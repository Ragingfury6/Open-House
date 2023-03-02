import Experience from '../Experience';
import * as THREE from 'three';
import Curves from '../Utils/Curves';
export default class B1F1 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.b1f1;
    this.roomScene = this.room.scene;

    this.setModel();
  }
  setModel() {
    this.scene.add(this.roomScene);
  }

  resize() {}

  update() {}
}
