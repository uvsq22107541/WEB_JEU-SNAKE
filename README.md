# SNAKE

## <u> INTERFACE 💻</u>

![Interfece de l'application](__SNAKE__README.png)

## <u> PRINCIPE DU JEU 💻</u> 

Dans une scène 2D, le joueur dirige un serpent vers des points objectifs (pommes) pour les manger 

<br> En l’occurrence quand le serpent passe sur : 
  <br> > une pomme verte, il s'étend en vert + augmentation du score avec 1 point + effet sonore pour cet évenement.
  <br> > une pomme bleue, il s'étend en bleu + augmentation du score avec 5 points + effet sonore pour cet évenement.
  <br> > une pomme rouge, il s'étend en rouge + diminution du score avec 1 point + effet sonore pour cet évenement.
<br> PS1 : le meilleure score et le temps de la partie sont aussi enregistrés et affichés pour le joueur (stockage local/mémoire cash).
<br> PS2 : le nombre des pommes vertes, bleues et rouges ainsi que le nombre total des pommes mangées durant la partie sont enregistrés et affichés pour le joueur.

<br> Le jeu s'arrète lorsque le serpent se cogne : 
  <br> >  l'obstacle gris (effet sonore pour cet évenement).
  <br> >  les extrimités du terrain du jeu / les murs (effet sonore pour cet évenement). 
  <br> >  lui-meme (effet sonore pour cet évenement). 
           

## <u> LANCEMENT DU JEU 💻</u>

1. #### Node JS

   - #### télécharger Node JS : https://nodejs.org/en/download/

   - #### vérifier le téléchargement en tapant dans le terminal la commande :

     ```
     node -v
     ```

     #### Cela affichera la version de Node JS (exemple, v16.14.0)

2. #### NPM

   - #### NPM est un gestionnaire de package, et est déjà téléchargé avec le Node

   - #### confirmer l'installation de NPM en tapant dans le terminal la commande  :

     ```
     npm -v
     ```

   - #### mettre à jour NPM vers la dernière version en tapant dans le terminal une des deux commandes :

     ```
     npm install npm@latest -g 
     ```
     ```
     npm install 
     ```

3. #### Serveur (taper dans le terminal)
   - ####

      ```
      node index.js 
      ```

4. #### Client (taper dans le Navigateur)
   - ####

      ```
      http://localhost:3001/ 
      ```
------





