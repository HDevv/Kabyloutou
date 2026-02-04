# 🔌 Google Sheets Integration pour Kabyloutou

## Vue d'ensemble

Système permettant au client de modifier les prix des produits via Google Sheets, sans accès au code.

### Architecture

```
Google Sheets (Client) → CSV Publique → products-loader.js → Pages Next.js
                              ↓
                    Fallback: products.js (local)
```

## 📁 Fichiers modifiés/créés

### Nouveaux fichiers
- `lib/products-loader.js` - Loader avec cache et fallback
- `.env.local.example` - Template de configuration
- `GOOGLE_SHEETS_SETUP.md` - Documentation client

### Fichiers modifiés
- `lib/products.js` - Données locales (fallback)
- `app/catalogue/page.js` - Utilise getProducts()
- `app/catalogue/[slug]/page.js` - Utilise getProductBySlug()

## 🚀 Installation

### 1. Créer le Google Sheet

Créer un Sheet avec les colonnes:
```
slug | name | price | unit | desc | longDesc | image | raw
```

**IMPORTANT**: La colonne `slug` doit correspondre exactement aux slugs dans `products.js`

### 2. Publier le Sheet

1. Fichier → Partager → Publier sur le web
2. Format: CSV
3. Copier l'URL

### 3. Configurer l'environnement

```bash
# Créer le fichier .env.local
cp .env.local.example .env.local

# Éditer et ajouter l'URL
NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/e/XXXX/pub?gid=0&single=true&output=csv
```

### 4. Redémarrer le serveur

```bash
npm run dev
```

## 🔧 Fonctionnement technique

### Cache
- Durée: 60 secondes (évite les appels répétés à Google)
- Si le Sheet est inaccessible → fallback automatique sur données locales

### Priorité des données
1. **Google Sheet** : Prix, nom, unité, description courte
2. **products.js** : Images, description longue (si non fournie dans Sheet)

### Colonnes supportées

| Colonne | Requis | Description |
|---------|--------|-------------|
| slug | ✅ | Identifiant unique (ne pas modifier) |
| name | ✅ | Nom du produit |
| price | ✅ | Prix numérique (ex: 50) |
| unit | ✅ | Unité (jour, semaine...) |
| desc | ✅ | Description courte |
| longDesc | ❌ | Description longue (utiliser `\n` pour sauts de ligne) |
| image | ❌ | Chemin image (fallback sur local si vide) |
| raw | ❌ | `true` si image sans extension |

## 🧪 Test

```bash
# Vérifier que les données se chargent
npm run dev

# Ouvrir le navigateur → Console
# Message attendu: "[Products] Loaded X products from Google Sheet"
```

## 🐛 Debug

### Problème: Les prix ne changent pas
1. Vérifier l'URL dans `.env.local`
2. Vérifier que le Sheet est publié (pas juste partagé)
3. Vérifier la console pour les erreurs

### Problème: "Using local fallback data"
- Le Sheet n'est pas accessible (CORS, URL incorrecte, non publié)
- Le site fonctionne quand même avec les données locales

### Problème: Colonnes mal alignées
- Vérifier qu'il n'y a pas de virgules dans les descriptions
- Utiliser des guillemets dans le Sheet si besoin

## 📚 API

### getProducts()
```typescript
import { getProducts } from '@/lib/products-loader';

const products = await getProducts();
// Retourne: Array<Product>
```

### getProductBySlug(slug)
```typescript
import { getProductBySlug } from '@/lib/products-loader';

const product = await getProductBySlug('motobineuse-4-fraises-v2');
// Retourne: Product | undefined
```

### formatPriceTTC(price)
```typescript
import { formatPriceTTC } from '@/lib/products-loader';

const price = formatPriceTTC(50); // "50.00€"
```

## 🔒 Sécurité

- Le Sheet est en lecture seule (CSV public)
- Pas de clé API requise
- Fallback automatique si indisponible
- Données locales conservées comme backup

## 📝 Notes pour le développeur

- Ne pas supprimer `products.js` - c'est le fallback essentiel
- Le cache est en mémoire (disparait au redémarrage)
- Pour un vrai temps réel, envisager SWR ou React Query
- Sur Vercel, les fonctions serverless ont un cold start

## 🎓 Pour le client

Voir `GOOGLE_SHEETS_SETUP.md` pour la documentation destinée au client.

---

**Questions ?** Le loader logge toutes les actions dans la console.
