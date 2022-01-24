# Moi Citoyen Lambda

Ce dépôt git contient le code du site [Moi Citoyen Lambda](https://moicitoyenlambda.org/). Il est réalisé avec les technologies HTML, CSS, [Bootstrap 5](https://getbootstrap.com/), Javascript ES6 et [React](https://reactjs.org/) (en faisant le choix de ne pas utiliser de transpilation, donc sans utiliser la synthaxe JSX), et utilise les [modules Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules).

[Voici une démo](https://swergas.github.io/moicitoyenlambda/index_with_cdn.html) du site (cette démo est une variante de la version originale : elle utilise un CDN pour télécharger les bibliothèques, alors que la version originale va les chercher dans le dossier `node_modules`).

## Faire fonctionner le site sur son ordinateur

- Installer npm

- Dans un terminal, se déplacer vers le dossier correspondant à ce dépôt git

- Optionnellement, installer nvm et avant d'exécuter les commandes suivantes, exécuter :

  `nvm use current` 

- Demander à npm de télécharger dans le dossier `node_modules` les fichiers Javascript et CSS des bibliothèques React et Bootstrap :
  `npm install`

- Démarrer un serveur web local dans le dossier courant (cela est nécessaire pour que le navigateur web accepte de télécharger les modules Javascript sans qu'il n'affiche de problèmes CORS):
  `npm start`

- Ouvrez votre navigateur web à l'URL suivante :

http://localhost:8000

