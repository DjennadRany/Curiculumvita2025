# Lancer le projet avec Vite (sans Webpack / CRA)

Ce projet utilise **Vite**, pas Create React App. Si vous voyez des erreurs "Html Webpack Plugin" ou "webpack", c’est qu’une ancienne installation (node_modules) est encore utilisée et que **Webpack** est lancé au lieu de Vite.

## Important : arrêter le serveur avant de supprimer node_modules

Les fichiers dans `node_modules` sont verrouillés tant qu’un processus les utilise. **Il faut absolument arrêter le serveur** (Ctrl+C dans le terminal où tourne `npm start`) **avant** de supprimer `node_modules`.

---

## Étapes à suivre (dans l’ordre)

### 1. Arrêter le serveur
- Dans le terminal où s’affichent les erreurs Webpack, appuyez sur **Ctrl+C** pour arrêter le processus.
- Vérifiez qu’aucun autre terminal ne lance le projet dans ce dossier.

### 2. Supprimer node_modules et package-lock.json
- **À la main** (Explorateur Windows) : aller dans `Curiculumvita2025`, supprimer le dossier **node_modules** et le fichier **package-lock.json**.
- Si la suppression échoue (« accès refusé »), fermez Cursor/VS Code, tous les terminaux, puis réessayez. Vous pouvez aussi redémarrer le PC puis supprimer.

### 3. Réinstaller les dépendances
Ouvrir un **nouveau** terminal dans le dossier du projet puis exécuter :
```powershell
cd c:\Users\GodFaz75\Desktop\cv2026\Curiculumvita2025
npm install
```

### 4. Lancer le projet avec Vite (et pas Webpack)
Pour être sûr d’utiliser Vite, lancez explicitement :
```powershell
npx vite
```
Vous devez voir : **`VITE v5.x.x  ready in xxx ms`** (et **pas** "webpack compiled").

- L’app sera sur **http://localhost:5173** (Vite utilise le port 5173, pas 3000).

Ensuite vous pourrez utiliser `npm start` ou `npm run dev`, qui exécutent aussi Vite.

---

## Si vous utilisez le bouton "Run" ou "Debug" de Cursor/VS Code

Vérifiez que la tâche lancée utilise **Vite** et non Create React App. Par exemple :
- Commande à lancer : `npx vite` ou `npm run dev`
- Pas : `react-scripts start` ni une tâche qui lance le port 3000 avec Webpack.
