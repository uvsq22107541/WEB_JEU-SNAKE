// ------------------------------------------------PHASER----------------------------------------------
/** -Phaser est un framework de création de jeux vidéo 2D. 
 *  -Phaser utilise :
 *     1) HTML5 Canvas : pour afficher le jeu et 
 *     2) JavaScript : pour exécuter le jeu. 
 *  -L'avantage d'utiliser Phaser est qu'il :
 *     1) possède une bibliothèque complète qui complète une grande partie de la physique des jeux vidéo,
 *        permettant ainsi, de se concentrer sur la conception du jeu lui-même 
 *     2) réduit le temps de développement et facilite le flux de travail
 * */
//---------------------------------------------------------------------------------------------------------



import MainScene from './MainScene.js';

/** ------------------------Configuration de la scene du jeu snake---------------------------------------- 
 * Mise en scene / terrain de jeu carrée de 640px * 640px  
 * -------------------------------------------------------------------------------------------------------*/

const config = {
  width: 640,
  height: 640,
  backgroundColor: '#380036', /*Violet*/
  type: Phaser.AUTO,
  parent: 'phaser-game',
  
  scene: [MainScene]
};

new Phaser.Game(config);


