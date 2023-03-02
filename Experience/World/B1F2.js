import Experience from '../Experience';
import * as THREE from 'three';
import Curves from '../Utils/Curves';
import GUI from 'lil-gui';
export default class B1F2 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.b1f2;
    this.roomScene = this.room.scene;
    this.roomScene.rotation.y = Math.PI;

    // this.gui = new GUI();
    this.guiObject = {
      x: -5.8,
      y: 0.4,
      z: -19.8,
    };
    this.roomScene.position.copy(this.guiObject);
    // this.gui.add(this.guiObject, 'x', -25, 25).onChange((v) => {
    //   console.log(this.roomScene);
    //   this.roomScene.position.x = v;
    // });
    // this.gui.add(this.guiObject, 'y', -25, 25).onChange((v) => {
    //   this.roomScene.position.y = v;
    // });
    // this.gui.add(this.guiObject, 'z', -25, 25).onChange((v) => {
    //   this.roomScene.position.z = v;
    // });
    this.setModel();
  }
  setModel() {
    this.scene.add(this.roomScene);
  }

  resize() {}

  update() {}
}
