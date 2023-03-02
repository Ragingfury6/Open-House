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
        position: new THREE.Vector3(-5.75, 1.1, -1),
        toPosition: Curves.CenterToCoding,
        toLook: Curves.CenterToCodingLook,
        fromPosition: Curves.CodingToCenter,
        fromLook: Curves.CodingToCenterLook,
      },
      {
        name: 'Vet',
        position: new THREE.Vector3(7.25, 1.1, 2),
        toPosition: Curves.CenterToVet,
        toLook: Curves.CenterToVetLook,
        fromPosition: Curves.VetToCenter,
        fromLook: Curves.VetToCenterLook,
      },
      { name: 'HVAC', position: new THREE.Vector3(-2.5, 1.1, -1) },
      { name: 'Auto', position: new THREE.Vector3(3.5, 1.1, -2.8) },
      { name: 'Unknown', position: new THREE.Vector3(3, 1.1, -0.5) },
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
      this.positionMaps.find((m) => m.name === 'Unknown').position
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
