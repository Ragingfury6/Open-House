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

    this.textures = {
      metal: {
        ao: this.resources.items.metalAo,
        disp: this.resources.items.metalDisp,
        flat: this.resources.items.metalFlat,
        metalness: this.resources.items.metalMetalness,
        normal: this.resources.items.metalNormal,
        roughness: this.resources.items.metalRoughness,
      },
      tiles: {
        disp: this.resources.items.tilesDisp,
        flat: this.resources.items.tilesFlat,
        gloss: this.resources.items.tilesGloss,
        normal: this.resources.items.tilesNormal,
        refl: this.resources.items.tilesRefl,
      },
    };

    // this.gui = new GUI();
    this.guiObject = {
      x: -6.5,
      y: 0,
      z: -58.5,
    };
    // this.guiObject = {
    //   x: -5.8,
    //   y: 0.4,
    //   z: -19.8,
    // };
    this.roomScene.position.copy(this.guiObject);
    const wallsMaterial = new THREE.MeshPhysicalMaterial({
      aoMap: this.textures.metal.ao,
      // displacementMap: this.textures.metal.disp,
      map: this.textures.metal.flat,
      metalnessMap: this.textures.metal.metalness,
      normalMap: this.textures.metal.normal,
      roughnessMap: this.textures.metal.roughness,
    });
    const floorMaterial = new THREE.MeshPhysicalMaterial({
      map: this.textures.tiles.flat,
      normalMap: this.textures.tiles.normal,
      specularColorMap: this.textures.tiles.gloss,
    });
    this.roomScene.children.find((c) => c.name === 'walls').material =
      wallsMaterial;
    this.roomScene.children.find((c) => c.name === 'floor002').material =
      floorMaterial;
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
    this.roomScene.scale.set(3, 3, 3);
    this.setModel();
  }
  setModel() {
    this.scene.add(this.roomScene);
  }

  resize() {}

  update() {}
}
