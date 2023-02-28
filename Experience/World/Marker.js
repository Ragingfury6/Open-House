import Experience from '../Experience';
import * as THREE from 'three';
export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.marker = this.resources.items.marker;
    this.markerScene = this.marker.scene;
    this.setModel();
  }
  setModel() {
    this.codingMarker = this.markerScene.clone();
    this.codingMarker.children[0].position.set(-5.75, 1.1, -1);

    this.vetMarker = this.markerScene.clone();
    this.vetMarker.children[0].position.set(7.25, 1.1, 2.25);
    this.vetMarker.children[0].rotation.y = Math.PI / 2;

    this.hvacMarker = this.markerScene.clone();
    this.hvacMarker.children[0].position.set(-2.5, 1.1, -1);

    this.autoMarker = this.markerScene.clone();
    this.autoMarker.children[0].position.set(3.5, 1.1, -2.8);

    this.unknownBuildingMarker = this.markerScene.clone();
    this.unknownBuildingMarker.children[0].position.set(3, 1.1, -0.5);

    this.scene.add(
      this.codingMarker,
      this.vetMarker,
      this.hvacMarker,
      this.autoMarker,
      this.unknownBuildingMarker
    );
  }

  resize() {}

  update() {}
}
