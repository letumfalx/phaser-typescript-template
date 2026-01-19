import "phaser";
import { SCENES } from "./scenes";

const config: Phaser.Types.Core.GameConfig = {
  // backgroundColor: "#000000",
  height: 600,
  parent: "game-container",
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT,
  },
  scene: SCENES,
  type: Phaser.AUTO,
  width: 800,
};

export default new Phaser.Game(config);
