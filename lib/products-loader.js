/**
 * Products Loader - Charge les produits depuis Google Sheets ou fallback local
 * 
 * Configuration pour le client:
 * 1. Créer un Google Sheet avec les colonnes: slug, name, price, unit, desc, longDesc, image, raw
 * 2. Fichier > Partager > Publier sur le web
 * 3. Sélectionner le format CSV
 * 4. Copier l'URL et la mettre dans GOOGLE_SHEET_CSV_URL
 * 
 * Le client peut modifier les prix dans le Sheet, les changements seront
 * visibles sur le site après rechargement (pas besoin de toucher au code)
 */

import { products as localProducts } from './products';

// URL du Google Sheet publié en CSV (à configurer par le développeur)
// Format: https://docs.google.com/spreadsheets/d/{SHEET_ID}/pub?gid={GID}&single=true&output=csv
const GOOGLE_SHEET_CSV_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL || '';

// Cache pour éviter les appels répétés
let cachedProducts = null;
let lastFetch = 0;
const CACHE_DURATION = 60000; // 1 minute de cache

/**
 * Parse une ligne CSV en tenant compte des guillemets
 */
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Guillemet échappé
        current += '"';
        i++; // Skip le prochain guillemet
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

/**
 * Convertit le CSV en array de produits
 */
function parseCSV(csvText) {
  const lines = csvText.split('\n').filter(line => line.trim());
  if (lines.length < 2) return null;
  
  // Première ligne = headers
  const headers = parseCSVLine(lines[0]).map(h => h.toLowerCase().trim());
  
  const products = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length < 3) continue; // Minimum: slug, name, price
    
    const product = {};
    headers.forEach((header, index) => {
      const value = values[index] || '';
      
      switch (header) {
        case 'slug':
          product.slug = value;
          break;
        case 'name':
          product.name = value;
          break;
        case 'price':
          product.price = parseFloat(value) || 0;
          break;
        case 'unit':
          product.unit = value || 'jour';
          break;
        case 'desc':
          product.desc = value;
          break;
        case 'longdesc':
        case 'long_desc':
          // Convertir les \n en vrais sauts de ligne
          product.longDesc = value.replace(/\\n/g, '\n');
          break;
        case 'image':
          product.image = value;
          break;
        case 'raw':
          product.raw = value.toLowerCase() === 'true' || value === '1';
          break;
        default:
          // Ignorer les colonnes inconnues
      }
    });
    
    // Vérifier que le produit a les champs minimums
    if (product.slug && product.name && product.price > 0) {
      products.push(product);
    }
  }
  
  return products.length > 0 ? products : null;
}

/**
 * Enrichit les produits du Sheet avec les données locales manquantes (images, descriptions)
 */
function mergeWithLocalData(sheetProducts) {
  return sheetProducts.map(sheetProduct => {
    const localProduct = localProducts.find(p => p.slug === sheetProduct.slug);
    
    if (localProduct) {
      // Fusionner: priorité au Sheet pour prix/nom/unité, local pour le reste
      return {
        ...localProduct,
        // Données du Sheet (modifiables par le client)
        name: sheetProduct.name || localProduct.name,
        price: sheetProduct.price || localProduct.price,
        unit: sheetProduct.unit || localProduct.unit,
        desc: sheetProduct.desc || localProduct.desc,
        // Données locales (non modifiées)
        longDesc: sheetProduct.longDesc || localProduct.longDesc,
        image: sheetProduct.image || localProduct.image,
        raw: sheetProduct.raw !== undefined ? sheetProduct.raw : localProduct.raw,
      };
    }
    
    // Si pas de correspondance locale, retourner tel quel (mais risque d'être incomplet)
    return sheetProduct;
  });
}

/**
 * Récupère les produits depuis Google Sheets
 */
async function fetchFromGoogleSheet() {
  if (!GOOGLE_SHEET_CSV_URL) {
    console.log('[Products] No Google Sheet URL configured, using local data');
    return null;
  }
  
  try {
    console.log('[Products] Fetching from Google Sheet...');
    
    // Ajouter un timestamp pour éviter le cache navigateur
    const url = `${GOOGLE_SHEET_CSV_URL}${GOOGLE_SHEET_CSV_URL.includes('?') ? '&' : '?'}_t=${Date.now()}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'text/csv',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const csvText = await response.text();
    const parsedProducts = parseCSV(csvText);
    
    if (!parsedProducts || parsedProducts.length === 0) {
      throw new Error('No products found in CSV');
    }
    
    console.log(`[Products] Loaded ${parsedProducts.length} products from Google Sheet`);
    
    // Fusionner avec les données locales pour compléter (images, etc.)
    return mergeWithLocalData(parsedProducts);
    
  } catch (error) {
    console.error('[Products] Error fetching from Google Sheet:', error.message);
    return null;
  }
}

/**
 * Récupère tous les produits (depuis Google Sheets ou fallback local)
 * 
 * Usage:
 *   import { getProducts } from '@/lib/products-loader';
 *   const products = await getProducts();
 */
export async function getProducts() {
  // En mode développement ou SSR, on peut utiliser le cache
  const now = Date.now();
  
  if (cachedProducts && (now - lastFetch) < CACHE_DURATION) {
    console.log('[Products] Using cached data');
    return cachedProducts;
  }
  
  // Essayer de charger depuis Google Sheets
  const sheetProducts = await fetchFromGoogleSheet();
  
  if (sheetProducts && sheetProducts.length > 0) {
    cachedProducts = sheetProducts;
    lastFetch = now;
    return cachedProducts;
  }
  
  // Fallback sur les données locales
  console.log('[Products] Using local fallback data');
  return localProducts;
}

/**
 * Récupère un produit par son slug
 * 
 * Usage:
 *   import { getProductBySlug } from '@/lib/products-loader';
 *   const product = await getProductBySlug('motobineuse-4-fraises-v2');
 */
export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find(p => p.slug === slug);
}

/**
 * Fonction synchrone pour les cas où on ne peut pas utiliser async
 * Utilise les données locales (pour generateStaticParams, etc.)
 */
export function getProductsSync() {
  return localProducts;
}

export function getProductBySlugSync(slug) {
  return localProducts.find(p => p.slug === slug);
}

// Réexporter formatPriceTTC pour compatibilité
export { formatPriceTTC } from './products';
