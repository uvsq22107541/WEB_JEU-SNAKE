import Snake from './Snake.js';
export default class MainScene extends Phaser.Scene {

  //-------------------------------------------------------------------------------------------------------
/** Phaser définit trois 3 méthodes (étapes principales) : précharger, créer et mettre à jour 
 * pour lancer une partie du jeu snake avec le framework PHASER. 
 * Les étapes de préchargement et de création  sont exécutées une fois au démarrage du jeu.
--------------------------------------------------------------------------------------------------------*/


  /** --------------------- 1) Etape de préchargement / méthode constructor()-------------------------------
   * construction de la scene du jeu ; là ou les ressources du jeu sont téléchargées et 
   * mises à disposition du joueur. 
   * ------------------------------------------------------------------------------------------------------**/
  constructor() {
    super('MainScene');
  }

  /** --------------------- 2) Etape de création / méthode create() ------------------------------------- 
   * initialisation de tous les éléments du jeu (serpent, pomme, obstacle). 
   * -----------------------------------------------------------------------------------------------------**/
  create() {
    this.snake = new Snake(this);
  }


  /**  --------------------- 3) Etape de mise à jour / méthode update() ---------------------------------
   * fonctionne en boucle tout au long du jeu, à chaque instant T. 
   * mise à jour des éléments du jeu pour le rendre interactif (serpent, pomme). 
   * ---------------------------------------------------------------------------------------------------*/
  update(time, delta) {
    this.snake.update(time);
  }
}
