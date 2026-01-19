import { Preloader } from "./Preloader";

export class Boot extends Phaser.Scene {
  constructor() {
    super(Boot.name);
  }

  preload() {
    // Load any assets needed for the loading screen here
  }

  create() {
    // Start the Preloader scene
    this.scene.start(Preloader.name);
  }
}
