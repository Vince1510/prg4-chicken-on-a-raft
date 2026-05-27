import { Scene } from "excalibur";
import { Background } from "./background.js";
import { Tree } from "./tree.js";

export class Level extends Scene {
  onInitialize(engine) {
    //1 keer aangeroepen
    const bg = new Background();
    this.add(bg);

    // maak 5 bomen op random plekken
    for (let i = 0; i < 5; i++) {
      const tree = new Tree();
      this.add(tree);
    }
  }
}
