import Experience from '../Experience';
import Environment from './Environment';
import Room from './Room';
import Marker from './Marker';
import Controls from './Controls';
import * as THREE from 'three';
import Raycaster from './Raycaster';
import B1F1 from './B1F1';
import B1F2 from './B1F2';
export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;

    this.resources = this.experience.resources;
    this.resources.on('ready', () => {
      this.environment = new Environment();
      this.room = new Room();
      this.marker = new Marker();
      this.controls = new Controls();
      this.raycaster = new Raycaster();
      this.b1f1 = new B1F1();
      this.b1f2 = new B1F2();
    });
  }

  resize() {}

  update() {
    if (this.controls) {
      this.controls.update();
    }
  }
}
