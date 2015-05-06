VenteEnLigneClient

Pour lancer les tests karma/jasmine :
 - Installer NodeJS : https://nodejs.org/download/
 - Installer Karma : npm install -g karma
 - Installer Jasmine : npm install -g karma-jasmine
 Lancement de karma en ligne de commande :
   - Lancer la console Node puis se mettre à la racine du projet
   - Lancer : karma start src/test/webapp/js/karma.conf.js 
 Lancement de karma via maven :
   - mvn test -P jenkins
