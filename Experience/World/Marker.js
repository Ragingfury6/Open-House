import Experience from '../Experience';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import Curves from '../Utils/Curves';
export default class Marker {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.world = this.experience.world;
    this.sizes = this.experience.sizes;
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
          (c) => c.name === 'ceiling'
        ),
        building: this.world.b1f2,
        slowDownTime: 0.8,
      },
      {
        name: 'Vet',
        position: new THREE.Vector3(8, 1, 2.5),
        toPosition: Curves.CenterToVet,
        fromPosition: Curves.VetToCenter,
        buildingCeiling: this.world.vet.roomScene.children.find(
          (c) => c.name === 'ceiling'
        ),
        building: this.world.vet,
        slowDownTime: 0.8,
      },
      {
        name: 'HVAC',
        position: new THREE.Vector3(-1, 1, -1.25),
        toPosition: Curves.CenterToHVAC,
        fromPosition: Curves.HVACToCenter,
        buildingCeiling: this.world.b1f1.roomScene.children.find(
          (c) => c.name === 'ceiling003'
        ),
        building: this.world.b1f1,
        slowDownTime: 0.65,
      },
      {
        name: 'Auto Collision',
        position: new THREE.Vector3(3, 1, 0),
        toPosition: Curves.CenterToAuto,
        fromPosition: Curves.AutoToCenter,
        buildingCeiling: this.world.autoCollision.roomScene.children.find(
          (c) => c.name === 'ceiling002'
        ),
        building: this.world.autoCollision,
        slowDownTime: 0.85,
      },
      {
        name: 'Auto',
        position: new THREE.Vector3(3.5, 1, -3),
        toPosition: Curves.CenterToAutoCollision,
        fromPosition: Curves.AutoCollisionToCenter,
        buildingCeiling: this.world.auto.roomScene.children.find(
          (c) => c.name === 'ceiling001'
        ),
        building: this.world.auto,
        slowDownTime: 0.85,
      },
      {
        name: 'Construction',
        position: new THREE.Vector3(-2.5, 1, -1.25),
        toPosition: Curves.CenterToConstruction,
        fromPosition: Curves.CenterToConstruction,
        buildingCeiling: this.world.b1f1.roomScene.children.find(
          (c) => c.name === 'ceiling003'
        ),
        building: this.world.b1f1,
        slowDownTime: 0.7,
      },
      {
        name: 'Electrical',
        position: new THREE.Vector3(-4.3, 1, -1.25),
        toPosition: Curves.CenterToElectrical,
        fromPosition: Curves.CenterToElectrical,
        buildingCeiling: this.world.b1f1.roomScene.children.find(
          (c) => c.name === 'ceiling003'
        ),
        building: this.world.b1f1,
        slowDownTime: 0.8,
      },
      {
        name: 'Diesel',
        position: new THREE.Vector3(-3.3, 1, 0),
        toPosition: Curves.CenterToDiesel,
        fromPosition: Curves.CenterToDiesel,
        buildingCeiling: this.world.b1f1.roomScene.children.find(
          (c) => c.name === 'ceiling003'
        ),
        building: this.world.b1f1,
        slowDownTime: 0.8,
      },
      {
        name: 'Pharmacy',
        position: new THREE.Vector3(-6.5, 1.5, -1.75),
        toPosition: Curves.CenterToPharmacy,
        fromPosition: Curves.CenterToPharmacy,
        buildingCeiling: this.world.b1f2.roomScene,
        building: this.world.b1f2,
        slowDownTime: 0.85,
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
    this.positionMaps[5].originalScale = this.positionMaps[2].originalScale;
    this.positionMaps[6].originalScale = this.positionMaps[2].originalScale;
    this.positionMaps[7].originalScale = this.positionMaps[2].originalScale;
    this.positionMaps[8].originalScale = {
      x: 1,
      y: 1,
      z: 1,
      height: 0,
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

    this.constructionMarker = this.markerScene.clone();
    this.constructionMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'Construction').position
    );
    this.electricalMarker = this.markerScene.clone();
    this.electricalMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'Electrical').position
    );
    this.dieselMarker = this.markerScene.clone();
    this.dieselMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'Diesel').position
    );
    this.pharmacyMarker = this.markerScene.clone();
    this.pharmacyMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'Pharmacy').position
    );

    this.autoMarker = this.markerScene.clone();
    this.autoMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'Auto').position
    );

    this.unknownBuildingMarker = this.markerScene.clone();
    this.unknownBuildingMarker.children[0].position.copy(
      this.positionMaps.find((m) => m.name === 'Auto Collision').position
    );

    this.scene.add(
      this.codingMarker,
      this.vetMarker,
      this.hvacMarker,
      this.autoMarker,
      this.unknownBuildingMarker,
      this.constructionMarker,
      this.electricalMarker,
      this.dieselMarker,
      this.pharmacyMarker
    );
    this.createText();
  }

  createText() {
    const loader = new FontLoader();
    loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      this.positionMaps.forEach((point) => {
        const geometry = new TextGeometry(point.name, {
          font: font,
          size: [
            'Construction',
            'HVAC',
            'Electrical',
            'Diesel',
            'Pharmacy',
          ].includes(point.name)
            ? 55
            : 85,
          height: 5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 10,
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 5,
        });
        const material = new THREE.MeshPhongMaterial({
          color: '#f71616',
          specular: '#abc345',
          shininess: 25,
          flatShading: false,
          reflectivity: 1,
        });
        const text = new THREE.Mesh(geometry, material);
        text.scale.set(0.003, 0.003, 0.003);
        text.geometry.computeBoundingSphere();
        text.position.set(
          point.position.x - text.geometry.boundingSphere.radius / 333.33,
          point.position.y + 0.5,
          point.position.z
        );
        if (point.name === 'Vet') {
          text.rotation.y = -Math.PI / 2;
          text.position.x = point.position.x;
          text.position.z = point.position.z - point.name.length / 12;
        }
        this.scene.add(text);
      });
    });
  }

  resize() {}

  update() {
    this.positionMaps.forEach((point, idx) => {
      const screenPositionVector = point.position.clone();
      screenPositionVector.y += 1.1;
      const camera = this.experience.camera.perspectiveCamera;
      screenPositionVector.project(camera);
      const tX = screenPositionVector.x * this.sizes.width * 0.5;
      const tY = -screenPositionVector.y * this.sizes.height * 0.5;
      const ele = document.querySelector(`.p${idx + 1}`);
      ele.style.transform = `translateX(${
        tX - ele.textContent.length * 7
      }px) translateY(${tY}px) `;
    });
  }
}
