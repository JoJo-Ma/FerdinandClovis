# Installation


## 1. Installer NodeJs pour lancer le site en mode developpement

https://nodejs.org/en/

## 2. Importer le repo git sur le PC

https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
Dans le dossier principal, lancer **npm install** dans le terminal pour telecharger tous les packages utilises dans le projet

## 3. Lancer le site en mode developpement

Dans le dossier principal, lancer **npm start** dans le terminal. Une nouvelle fenetre devrait s'ouvrir dans le navigateur apres quelques secondes. Sinon, se rendre sur
http://localhost:3000/ dans un navigateur


# Fichiers importants

## Pour modifier les photos dans la banderole

Aller dans **\src\About\data.js** et rajouter une valeur dans le fichier en respectant la syntaxe. Le lien de l'image doit renvoyer au dossier dans **\public\static\images**

## Pour changer les credentials du service emailJS

Aller dans **/src/Contact/emailjsCreds.js** :
https://dashboard.emailjs.com/admin
-Service ID se trouve dans l'onglet Email Services 
-Template ID dans l'onglet Email templates
-User ID dans Account/General/API keys/Public Key
