import Experience from '../Experience';
import * as THREE from 'three';
import Curves from '../Utils/Curves';
export default class Marker {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.world = this.experience.world;
    this.resources = this.experience.resources;
    this.marker = this.resources.items.marker;
    this.markerScene = this.marker.scene;
    this.positionMaps = [
      {
        name: 'Coding',
        position: new THREE.Vector3(-5.7, 1.5, -0.75),
        toPosition: Curves.CenterToCoding,
        fromPosition: Curves.CodingToCenter,
        buildingCeiling: this.world.b1f2.roomScene.children.find(
          (c) => c.name === 'floor005'
        ),
      },
      {
        name: 'Vet',
        position: new THREE.Vector3(8, 1, 2.5),
        toPosition: Curves.CenterToVet,
        fromPosition: Curves.VetToCenter,
        buildingCeiling: this.world.vet.roomScene.children.find(
          (c) => c.name === 'ceiling'
        ),
      },
      {
        name: 'HVAC',
        position: new THREE.Vector3(-3.5, 1, -1.25),
        toPosition: Curves.CenterToHVAC,
        fromPosition: Curves.HVACToCenter,
        buildingCeiling: this.world.b1f1.roomScene.children.find(
          (c) => c.name === 'ceiling003'
        ),
      },
      {
        name: 'Auto',
        position: new THREE.Vector3(3, 1, 0),
        toPosition: Curves.CenterToAuto,
        fromPosition: Curves.AutoToCenter,
        buildingCeiling: this.world.autoCollision.roomScene.children.find(
          (c) => c.name === 'ceiling002'
        ),
      },
      {
        name: 'AutoCollision',
        position: new THREE.Vector3(3.5, 1, -3),
        toPosition: Curves.CenterToAutoCollision,
        fromPosition: Curves.AutoCollisionToCenter,
        buildingCeiling: this.world.auto.roomScene.children.find(
          (c) => c.name === 'ceiling001'
        ),
      },
    ];
    this.positionMaps[0].originalScale = {
      x: 0.7555366158485413,
      y: 0.11814051866531372,
      z: 0.7598729729652405,
      height: 0.6731687188148499,
    };
    this.positionMaps[1].originalScale = {
      x: 0.8184707164764404,
      y: 0.8184707164764404,
      z: 0.8184707164764404,
      height: 0.3596576750278473,
    };
    this.positionMaps[2].originalScale = {
      x: 0.7169927358627319,
      y: 0.7658734321594238,
      z: 0.7211077809333801,
      height: 0.34290650486946106,
    };
    this.positionMaps[3].originalScale = {
      x: 0.9711525440216064,
      y: 0.9711525440216064,
      z: 0.9711525440216064,
      height: 0.40423762798309326,
    };
    this.positionMaps[4].originalScale = {
      x: 0.9756215214729309,
      y: 0.9756215214729309,
      z: 0.9756215214729309,
      height: 0.4229370951652527,
    };

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
