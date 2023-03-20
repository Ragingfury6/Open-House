import Experience from '../Experience';
import * as THREE from 'three';
import Curves from '../Utils/Curves';
import GUI from 'lil-gui';
export default class Auto {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.auto;
    this.roomScene = this.room.scene;
    this.materials = this.experience.world.materials;
    console.log(this.roomScene);
    this.roomScene.children.find((c) => c.name === 'glass004').material =
      this.materials.glassMaterial;
    // this.gui = new GUI();
    // this.obj = { x: 0, y: 0, z: 0 };
    //   .add(this.obj, 'x', -100, 100, 0.01)
    //   .onChange(() =>
    //     this.roomScene.position.set(this.obj.x, this.obj.y, this.obj.z)
    //   );
    // this.gui
    //   .add(this.obj, 'y', -100, 100, 0.01)
    //   .onChange(() =>
    //     this.roomScene.position.set(this.obj.x, this.obj.y, this.obj.z)
    //   );
    // this.gui
    //   .add(this.obj, 'z', -100, 100, 0.01)
    //   .onChange(() =>
    //     this.roomScene.position.set(this.obj.x, this.obj.y, this.obj.z)
    //   );
    // this.roomScene.position.set(this.obj.x, this.obj.y, this.obj.z);
    // this.roomScene.scale.set(3, 3, 3);

    this.setModel();
  }
  setModel() {
    this.scene.add(this.roomScene);
  }

  resize() {}

  update() {}
}
