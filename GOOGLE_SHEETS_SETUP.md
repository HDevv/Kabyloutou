# 📊 Configuration Google Sheets pour la gestion des prix

## Pour le client (sans compétences techniques)

### 🎯 Ce que ça fait
Vous pouvez maintenant modifier les prix de vos produits directement dans un **Google Sheet**, sans toucher au code du site. Les changements sont visibles sur le site en **1 minute** maximum.

---

## 📝 Étape 1 : Créer le Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com) et créez une nouvelle feuille
2. Copiez-collez ce tableau (la première ligne est importante) :

| slug | name | price | unit | desc |
|------|------|-------|------|------|
| motobineuse-4-fraises-v2 | Motobineuse 4 fraises | 50 | jour | Largeur de travail 45 cm. |
| motobineuse-6-fraises | Motobineuse 6 fraises | 60 | jour | Largeur de travail 80 cm. |
| rotovator | Rotovator | 100 | jour | Emiettage facile de la terre. |
| ... | ... | ... | ... | ... |

### 📋 Colonnes obligatoires :

- **slug** : L'identifiant du produit (ne pas modifier !)
- **name** : Le nom du produit
- **price** : Le prix en euros (juste le nombre, ex: `50`)
- **unit** : L'unité (`jour`, `semaine`, etc.)
- **desc** : Courte description

### 🔧 Colonnes optionnelles :

- **longDesc** : Description longue (utilisez `\n` pour les sauts de ligne)
- **image** : Chemin de l'image (ex: `/outils/photo.jpg`)
- **raw** : Mettez `true` si l'image n'a pas d'extension

---

## 🌐 Étape 2 : Publier le Sheet

1. Dans votre Google Sheet, cliquez sur **Fichier** > **Partager** > **Publier sur le web**
2. Dans la fenêtre qui s'ouvre :
   - **Lien** : Sélectionnez la feuille entière (ou "Classeur entier")
   - **Format** : Choisissez **CSV (valeurs séparées par des virgules)**
3. Cliquez sur **Publier**
4. Copiez l'URL générée (elle ressemble à ça) :
   ```
   https://docs.google.com/spreadsheets/d/e/2PACX-XXXXXX/pub?gid=0&single=true&output=csv
   ```

---

## 🔗 Étape 3 : Envoyer l'URL au développeur

Envoyez simplement ce lien à votre développeur. Il s'occupera de le configurer sur le site.

**Ne modifiez pas ce lien**, gardez-le précieusement.

---

## ✏️ Modifier les prix (au quotidien)

Une fois configuré, pour modifier un prix :

1. **Ouvrez** votre Google Sheet
2. **Modifiez** le prix dans la colonne "price"
3. **Fermez** le Sheet (sauvegarde automatique)
4. **Attendez 1 minute**
5. **Rafraîchissez** le site → Le nouveau prix s'affiche !

---

## ⚠️ Règles importantes

### ✅ Ce que vous pouvez faire :
- Modifier les **prix**
- Modifier les **noms**
- Modifier les **descriptions**
- Modifier les **unités**
- Ajouter de **nouvelles lignes** (pour de futurs produits)

### ❌ Ce que vous ne devez PAS faire :
- **Ne modifiez pas** la colonne "slug" (c'est l'identifiant technique)
- **Ne supprimez pas** la première ligne (les titres)
- **Ne supprimez pas** de lignes si vous n'êtes pas sûr

### 🆘 En cas de problème :
- Si vous faites une erreur, le site utilisera automatiquement les prix par défaut
- Contactez votre développeur pour restaurer les données

---

## 📱 Accès rapide

**Bookmark ce lien** pour y accéder facilement :
```
https://sheets.google.com
```

---

## 💡 Astuce

Créez un raccourci sur votre téléphone pour modifier les prix même en déplacement !

---

**Besoin d'aide ?** Contactez votre développeur avec ce document en main.
