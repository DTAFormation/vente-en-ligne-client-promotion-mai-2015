////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                         VenteEnLigneClient

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Environnement : JDK 8 / TOMCAT 8 / MAVEN 3.3.3 / PHPMYADMIN

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Installation : 

Modifier dans le fichier persistance.xml create-drop -> create

                         -> <property name="hibernate.hbm2ddl.auto" value="create" />



Créer la BDD dans PHPMYADMIN -> ecommercedb_client

Modifier dans app-context.xtml 

                         -> <property name="password" value=""></property>

Run as / run as server -> création des tables au sein de ecommercedb_client

Arrêter l'exécution

Exécuter les requêtes sql fournies pour remplir la base ecommercedb_client (en annexe plus bas)

Modifier dans le fichier persistance.xml create -> update

                         -> <property name="hibernate.hbm2ddl.auto" value="update" />

L'application vente-en-ligne client est prête -> Run as / run as server

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

- Lancement des tests karma/jasmine :
 -- Installer NodeJS : https://nodejs.org/download/
 -- Installer Karma : npm install -g karma
 -- Installer Jasmine : npm install -g karma-jasmine
 -- Installer Karma-cli : npm install -g karma-cli
 -- Installer PhantomJS : npm install -g karma-phantomjs-launcher
- Lancement de karma en ligne de commande :
 - Lancer la console Node puis se mettre à la racine du projet
 - Lancer : karma start src/test/webapp/js/karma.conf.js 
- Lancement de karma via maven :
 - mvn test -P jenkins


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                         Annexe

Insertion dans la BDD test :
                         
INSERT INTO  `test`.`utilisateur` (`utilisateur_id`, `active`, `email`, `fax`, `prenom`, `nom`, `login`, `password`, `type_util`, `telephone`, `titre`) VALUES
(1, 1, 't@toto.com', '987654321', 'toto', 'toto', 'toto', 'toto', 'c', '123456789', NULL);

INSERT INTO `test`.`catalogue` (`catalogue_id`, `description`, `nom`) VALUES ('1', 'Articles de sport', 'Sport'), ('2', 'Logement', 'Logement');

INSERT INTO `test`.`produit` (`produit_id`, `description`, `nom`, `catalogue_catalogue_id`) VALUES ('1', 'Articles de football', 'Football', '1');

INSERT INTO `test`.`article` (`article_id`, `nom`, `prix`, `stock`, `produit_produit_id`) VALUES ('1', 'Chaussures de football', '80', '300', '1'), ('2', 'Ballon de football', '50', '350', '1');
