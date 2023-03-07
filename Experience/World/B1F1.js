import Experience from '../Experience';
import * as THREE from 'three';
import Curves from '../Utils/Curves';
import GUI from 'lil-gui';
export default class B1F1 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.b1f1;
    this.roomScene = this.room.scene;

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
    // this.obj = { x: -33.67, y: -1.37, z: 52.13 };
    this.obj = { x: 0, y: 0, z: 0 };
    // this.gui
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
    this.roomScene.position.set(this.obj.x, this.obj.y, this.obj.z);
    this.roomScene.scale.set(1, 1, 1);

    const wallsMaterial = new THREE.MeshPhysicalMaterial({
      aoMap: this.textures.metal.ao,
      // displacementMap: this.textures.metal.disp,
      map: this.textures.metal.flat,
      metalnessMap: this.textures.metal.metalness,
      normalMap: this.textures.metal.normal,
      roughnessMap: this.textures.metal.roughness,
    });
    // const wallsMaterial = new THREE.MeshPhysicalMaterial({ color: '#f0f' });
    const floorMaterial = new THREE.MeshPhysicalMaterial({
      map: this.textures.tiles.flat,
      normalMap: this.textures.tiles.normal,
      specularColorMap: this.textures.tiles.gloss,
    });
    this.roomScene.children.find((c) => c.name === 'walls001').material =
      wallsMaterial;
    this.roomScene.children.find((c) => c.name === 'FLOOR').material =
      floorMaterial;
    this.setModel();
  }
  setModel() {
    this.scene.add(this.roomScene);
  }

  resize() {}

  update() {}
}
