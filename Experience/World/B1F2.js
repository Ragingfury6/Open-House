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
    this.materials = this.experience.world.materials;

    // this.gui = new GUI();
    // this.guiObject = {
    //   x: -15.83,
    //   y: 0,
    //   z: 52.28,
    // };
    this.guiObject = {
      x: 0,
      y: 0,
      z: 0,
    };
    this.roomScene.position.copy(this.guiObject);
    this.roomScene.children.find((c) => c.name === 'walls003').material =
      this.materials.wallsMaterial;
    this.roomScene.children.find((c) => c.name === 'floor002').material =
      this.materials.floorMaterial;
    // this.gui.add(this.guiObject, 'x', -100, 100, 0.01).onChange((v) => {
    //   console.log(this.roomScene);
    //   this.roomScene.position.x = v;
    // });
    // this.gui.add(this.guiObject, 'y', -100, 100, 0.01).onChange((v) => {
    //   this.roomScene.position.y = v;
    // });
    // this.gui.add(this.guiObject, 'z', -100, 100, 0.01).onChange((v) => {
    //   this.roomScene.position.z = v;
    // });
    this.roomScene.scale.set(1, 1, 1);
    this.setModel();
  }
  setModel() {
    this.scene.add(this.roomScene);
  }

  resize() {}

  update() {}
}
