export class MainGame extends Phaser.Scene {
  constructor() {
    super(MainGame.name);
  }

  create() {
    this.add
      .text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "Main Game Scene",
        { color: "#ffffff", fontSize: "32px" }
      )
      .setOrigin(0.5);
  }
}
