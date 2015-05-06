
                         VenteEnLigneClient

#########################################################################

Environement : JDK 8 TOMCAT 8 PHPMYADMIN

#########################################################################

Installation : 

Modifier dans le fichier persistance.xml update -> create

Créer la BDD dans PHPMYADMIN -> test

Run as / run as server -> création des tables

Arreter l'execution

Executer les requetes sql fournies pour remplir la base test

Modifier dans le fichier persistance.xml create -> update

L'application vente-en-ligne client est prête -> Run as / run as server

#########################################################################

Lancement des tests karma/jasmine :
 - Installer NodeJS : https://nodejs.org/download/
 - Installer Karma : npm install -g karma
 - Installer Jasmine : npm install -g karma-jasmine
 - Installer Karma-cli : npm install -g karma-cli
 - Installer PhantomJS : npm install -g karma-phantomjs-launcher
 Lancement de karma en ligne de commande :
   - Lancer la console Node puis se mettre à la racine du projet
   - Lancer : karma start src/test/webapp/js/karma.conf.js 
 Lancement de karma via maven :
   - mvn test -P jenkins
