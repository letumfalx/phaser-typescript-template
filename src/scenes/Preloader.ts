import { MainGame } from "./MainGame";

export class Preloader extends Phaser.Scene {
  constructor() {
    super(Preloader.name);
  }

  preload() {
    // Load your game assets here
  }

  create() {
    // Start the main game scene after loading is complete
    this.scene.start(MainGame.name);
  }
}
