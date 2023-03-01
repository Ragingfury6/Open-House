import Experience from '../Experience';
import Environment from './Environment';
import Room from './Room';
import Marker from './Marker';
import Controls from './Controls';
import * as THREE from 'three';
import Raycaster from './Raycaster';
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
    });
  }

  resize() {}

  update() {
    if (this.controls) {
      this.controls.update();
    }
  }
}
