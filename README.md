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
                         
insert into Utilisateur (utilisateur_id, prenom, nom, password, login, email, telephone, fax, titre, type_util, active) values (1, 'George', 'Abitbol', 'Monde2merde', 'GAbitbol', 'g.abitbol@detournement.fr', '0000000000', '0000000001', 'Monsieur', '1', 1);

insert into Utilisateur (utilisateur_id, prenom, nom, password, login, email, telephone, fax, titre, type_util, active) values (2, 'Gandalf', 'Leblanc', 'Shallnotpass', 'GLeblanc', 'g.legris@lotr.com', '4538619765', '4538619766', 'Valar', '1', 1);


insert into Catalogue (catalogue_id, nom, description) values (1, 'sport', 'catalogue de sport');

insert into Catalogue (catalogue_id, nom, description) values (2, 'primeurs', 'catalogue de primeurs');


insert into Produit (produit_id, nom, description, catalogue_catalogue_id) values (1, 'football', 'liste de produits concernant le football', 1);

insert into Produit (produit_id, nom, description, catalogue_catalogue_id) values (2, 'basketball', 'liste de produits concernant le basketball', 1);

insert into Produit (produit_id, nom, description, catalogue_catalogue_id) values (3, 'cucurbitacé', 'liste de cucurbitacés', 2);

insert into Produit (produit_id, nom, description, catalogue_catalogue_id) values (4, 'tubercule', 'liste de tubercules', 2);

insert into Produit (produit_id, nom, description, catalogue_catalogue_id) values (5, 'fruits', 'liste de fruits', 2);


insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (1, 'ballon de foot', 'http://i.imgur.com/4O86daR.jpg', 10, 1, 25);

insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (2, 'chaussures de foot', 'http://i.imgur.com/kG47bs8.jpg', 500, 1, 2000);
 
insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (3, 'ballon de basket', 'http://i.imgur.com/iDWMUTr.jpg', 15, 2, 30);

insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (4, 'panier de basket', 'http://i.imgur.com/z3rOjE9.jpg', 100, 2, 30);

insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (5, 'concombre', 'http://i.imgur.com/NUOJOdC.jpg', 2.35, 3, 10);

insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (6, 'courgette', 'http://i.imgur.com/lhxWEQ3.jpg', 59.99, 3, 5000);

insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (7, 'pomme de terre', 'http://i.imgur.com/vBRzDhq.jpg', 2.65, 4, 1000);

insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (8, 'carotte', 'http://i.imgur.com/XhUhqXX.jpg', 3.05, 4, 60);

insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (9, 'banane', 'http://i.imgur.com/BT2FVWT.jpg', 4.60, 5, 35);

insert into Article (article_id, nom, image, prix, produit_produit_id, stock) VALUES (10, 'tomate', 'http://i.imgur.com/MQfZPWa.png', 4.70, 5, 25);
