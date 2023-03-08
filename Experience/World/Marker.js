import Experience from '../Experience';
import * as THREE from 'three';
import Curves from '../Utils/Curves';
export default class Marker {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.marker = this.resources.items.marker;
    this.markerScene = this.marker.scene;
    this.positionMaps = [
      {
        name: 'Coding',
        position: new THREE.Vector3(-5.7, 1.5, -0.75),
        toPosition: Curves.CenterToCoding,
        fromPosition: Curves.CodingToCenter,
      },
      {
        name: 'Vet',
        position: new THREE.Vector3(8, 1, 2.5),
        toPosition: Curves.CenterToVet,
        fromPosition: Curves.VetToCenter,
      },
      {
        name: 'HVAC',
        position: new THREE.Vector3(-3.5, 1, -1.25),
        toPosition: Curves.CenterToHVAC,
        fromPosition: Curves.HVACToCenter,
      },
      {
        name: 'Auto',
        position: new THREE.Vector3(3, 1, 0),
        toPosition: Curves.CenterToAuto,
        fromPosition: Curves.AutoToCenter,
      },
      {
        name: 'AutoCollision',
        position: new THREE.Vector3(3.5, 1, -3),
        toPosition: Curves.CenterToAutoCollision,
        fromPosition: Curves.AutoCollisionToCenter,
      },
    ];
    this.setModel();
  }
  setModel() {
    this.codingMarker = this.markerScene.clone();
    this.codingMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'Coding').position
    );

    this.vetMarker = this.markerScene.clone();
    this.vetMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'Vet').position
    );
    this.vetMarker.children[0].rotation.y = Math.PI / 2;

    this.hvacMarker = this.markerScene.clone();
    this.hvacMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'HVAC').position
    );

    this.autoMarker = this.markerScene.clone();
    this.autoMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'Auto').position
    );

    this.unknownBuildingMarker = this.markerScene.clone();
    this.unknownBuildingMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'AutoCollision').position
    );

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
