import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "./resources";
import { Chicken } from "./chicken";

export class Tree extends Actor {
  constructor() {
    super({ width: Resources.Tree.width, height: Resources.Tree.height });
  }
  onInitialize(engine) {
    this.graphics.use(Resources.Tree.toSprite());
    this.vel = new Vector(Math.random() * 80 - 120, 0);
    this.pos = new Vector(
      engine.drawWidth + Math.random() * 100,
      Math.random() * engine.drawHeight,
    ); //zorgt voor de random positie
    this.on("exitviewport", () => this.resetPosition());

    // voeg een kip toe aan elke boom
    const chicken = new Chicken();
    this.addChild(chicken);
  }

  resetPosition() {
    this.pos.x = 1020;
  }
}
