import * as THREE from 'three';
import GUI from 'lil-gui';
import Experience from '../Experience';
import { Curve, Vector3 } from 'three';
import Curves from '../Utils/Curves';
export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.time = this.experience.time;

    this.progress = 0;
    this.dummyVector = new THREE.Vector3();
    this.lookAtPosition = new THREE.Vector3();
    this.gui = new GUI();

    this.guiObj = {
      a1: 0,
      a2: 10,
      a3: 20,
      b1: -1.18,
      b2: 1.52,
      b3: 2.76,
      c1: -3.38,
      c2: 2.02,
      c3: 3.74,
      d1: -5.7,
      d2: 0.7,
      d3: 2,
      moveToVet: () => {
        this.setPath(Curves.CenterToVet, Curves.CenterToVetLook);
      },
      moveFromVet: () => {
        this.setPath(Curves.VetToCenter, Curves.VetToCenterLook);
      },
      moveToCoding: () => {
        this.setPath(Curves.CenterToCoding, Curves.CenterToCodingLook);
      },
      moveFromCoding: () => {
        this.setPath(Curves.CodingToCenter, Curves.CodingToCenterLook);
      },
    };
    this.gui.add(this.guiObj, 'a1', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'a2', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'a3', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'b1', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'b2', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'b3', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'c1', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'c2', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'c3', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'd1', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'd2', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'd3', -10, 10).onChange(() => {
      this.scene.remove(this.curveObject);
      this.setPath();
    });
    this.gui.add(this.guiObj, 'moveToVet');
    this.gui.add(this.guiObj, 'moveFromVet');
    this.gui.add(this.guiObj, 'moveToCoding');
    this.gui.add(this.guiObj, 'moveFromCoding');
    this.setPath();
  }

  setPath(curve = null, lookCurve = null) {
    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(this.guiObj.a1, this.guiObj.a2, this.guiObj.a3),
      new THREE.Vector3(this.guiObj.b1, this.guiObj.b2, this.guiObj.b3),
      new THREE.Vector3(this.guiObj.c1, this.guiObj.c2, this.guiObj.c3),
      new THREE.Vector3(this.guiObj.d1, this.guiObj.d2, this.guiObj.d3),
    ]);
    this.curve = Curves.CenterToVet;
    this.lookCurve = Curves.CenterToVetLook;
    if (curve && lookCurve) {
      this.curve = curve;
      this.lookCurve = lookCurve;
      this.progress = 0;
    }

    this.points = this.curve.getPoints(50);
    this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
    this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    this.curveObject = new THREE.Line(this.geometry, this.material);
    // this.scene.add(this.curveObject);
  }

  update() {
    if (this.progress > 1) {
      this.curve.getPointAt(this.progress, this.dummyVector);
      this.lookCurve.getPointAt(this.progress, this.lookAtPosition);
      // this.curve.getPointAt(this.progress + 0.00001, this.lookAtPosition);
      this.progress += 0.0025;
      this.camera.perspectiveCamera.position.copy(this.dummyVector);
      this.camera.controls.target = this.lookAtPosition;
    } else {
      // this.progress = 0;
      // this.curve = Curves.CodingToCenter;
      // this.lookCurve = Curves.CodingToCenterLook;
    }
  }

  resize() {}
}
