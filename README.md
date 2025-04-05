# MiCetF - Page d'accueil

Page d'accueil et catalogue des applications pédagogiques pour le site [MiCetF](https://micetf.fr).

![Aperçu de l'application](./public/assets/preview.png)

## 🚀 Fonctionnalités

- 📚 Catalogue des applications pédagogiques classées par domaines
- 🔍 Recherche par mot-clé et par domaine thématique
- 📱 Interface responsive adaptée à tous les appareils
- 🎨 Affichage en mode vignettes ou liste
- 🔗 Intégration facile avec les autres applications du site

## 📋 Prérequis

- Node.js 18 ou supérieur
- npm, yarn ou pnpm (pnpm recommandé)

## 🛠️ Installation

```bash
# Cloner le dépôt
git clone https://github.com/micetf/accueil.git
cd accueil

# Installer les dépendances avec pnpm (recommandé)
pnpm install

# Ou avec npm
npm install

# Ou avec yarn
yarn install
```

## 📊 Utilisation

### Développement

```bash
# Démarrer le serveur de développement
pnpm dev

# Le site sera disponible sur http://localhost:5173
```

### Production

```bash
# Construire pour la production
pnpm build

# Prévisualiser la version de production
pnpm preview
```

## 🧱 Structure du projet

```
accueil/
├── public/             # Fichiers statiques
│   ├── assets/         # Images et ressources
│   │   └── thumbnails/ # Miniatures des applications
├── src/                # Code source
│   ├── components/     # Composants React
│   ├── data/           # Données des applications et constantes
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Fonctions utilitaires
│   ├── App.jsx         # Composant principal
│   └── main.jsx        # Point d'entrée
├── index.html          # Template HTML
├── package.json        # Dépendances et scripts
├── tailwind.config.js  # Configuration Tailwind CSS
└── vite.config.js      # Configuration Vite
```

## 🔄 Comment mettre à jour le catalogue

Le catalogue d'applications est stocké dans `src/data/applications.js`. Pour ajouter une nouvelle application, suivez ce format :

```javascript
{
    id: "app-id",
    title: "Titre de l'application",
    url: "chemin/vers/application",
    description: "Description détaillée de l'application.",
    thumbnail: "nom-image.png",
    keywords: ["mot-clé1", "mot-clé2", "domaine"]
}
```

Assurez-vous de placer l'image miniature correspondante dans `public/assets/thumbnails/`.

## 🧩 Composants principaux

### AppGallery

Affiche la grille ou la liste des applications filtrées.

```jsx
<AppGallery applications={filteredApps} viewMode="grid" />
```

### SearchBar

Barre de recherche pour filtrer les applications par mot-clé.

```jsx
<SearchBar onSearch={handleSearch} />
```

### DomainFilter

Filtre par domaine thématique.

```jsx
<DomainFilter
    domains={domains}
    selectedDomain={selectedDomain}
    onDomainChange={handleDomainChange}
/>
```

## 🎨 Personnalisation

### Thème

Les couleurs et le style peuvent être personnalisés dans le fichier `tailwind.config.js`. Le projet utilise Tailwind CSS pour tous les styles.

### Navbar

La barre de navigation utilise le composant `Navbar` de la bibliothèque `@micetf/ui`. Consultez la documentation de cette bibliothèque pour plus d'informations sur les personnalisations possibles.

## 🔌 Intégration avec @micetf/ui

Ce projet utilise la bibliothèque de composants `@micetf/ui` pour une cohérence visuelle avec les autres applications MiCetF.

```jsx
// Import du composant Navbar depuis @micetf/ui
import { Navbar } from "@micetf/ui";
import "@micetf/ui/index.css"; // Importation des styles

// Utilisation
<Navbar
    breadcrumb={["MiCetF", "Accueil"]}
    subtitle="Des outils pour la classe"
    showHelp={true}
    onHelpClick={handleShowHelp}
/>;
```

## 🔧 Configuration

### tailwind.config.js

La configuration Tailwind inclut les chemins vers les composants de `@micetf/ui` pour assurer la disponibilité des styles.

```javascript
export default {
    content: [
        "./src/**/*.{js,jsx}",
        "./node_modules/@micetf/ui/dist/**/*.{js,jsx}",
    ],
    // ...
};
```

### vite.config.js

```javascript
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    // ...
});
```

## 📝 Licence

MIT

## 👤 Auteur

- Frédéric Misery - [@micetf](https://github.com/micetf)
