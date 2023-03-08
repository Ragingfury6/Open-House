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
    // this.gui = new GUI();

    this.animationEnabled = false;
    this.pointIndex = 0;

    this.guiObj = {
      a1: 0,
      ADD_POINT: () => {
        const folder = this.gui.addFolder(`v${this.pointIndex}`);
        const obj = { a: 0, b: 0, c: 0 };
        this[`v${this.pointIndex}`] = obj;
        folder.add(obj, 'a', -50, 50, 0.01).onChange(() => this.updateCurve());
        folder.add(obj, 'b', -50, 50, 0.01).onChange(() => this.updateCurve());
        folder.add(obj, 'c', -50, 50, 0.01).onChange(() => this.updateCurve());
        // this.guiObj[`v${this.pointIndex}a`] = 0;
        // this.guiObj[`v${this.pointIndex}b`] = 0;
        // this.guiObj[`v${this.pointIndex}c`] = 0;
        // const folder = this.gui.addFolder(`v${this.pointIndex}`);
        // this.gui.add(this.guiObj, `v${this.pointIndex}a`, -50, 50, 0.01);
        // this.gui.add(this.guiObj, `v${this.pointIndex}b`, -50, 50, 0.01);
        // this.gui.add(this.guiObj, `v${this.pointIndex}c`, -50, 50, 0.01);
        this.pointIndex++;
        this.updateCurve();
      },
      moveToVet: () => {
        this.setPath(Curves.CenterToVet, Curves.CenterToVetLook);
        this.animationEnabled = true;
      },
      moveFromVet: () => {
        this.setPath(Curves.VetToCenter, Curves.VetToCenterLook);
        this.animationEnabled = true;
      },
      moveToCoding: () => {
        this.setPath(Curves.CenterToCoding, Curves.CenterToCodingLook);
        this.animationEnabled = true;
      },
      moveFromCoding: () => {
        this.setPath(Curves.CodingToCenter, Curves.CodingToCenterLook);
        this.animationEnabled = true;
      },
    };
    // this.gui.add(this.guiObj, 'a1', -10, 10).onChange(() => {
    //   this.scene.remove(this.curveObject);
    //   this.setPath();
    // });

    // this.gui.add(this.guiObj, 'ADD_POINT');
    // this.gui.add(this.guiObj, 'moveToVet');
    // this.gui.add(this.guiObj, 'moveFromVet');
    // this.gui.add(this.guiObj, 'moveToCoding');
    // this.gui.add(this.guiObj, 'moveFromCoding');
    // const arr = [new Vector3(0, 8, 13.78), new Vector3(-0.41, 0.33, 1.43)];
    // arr.forEach(({ x, y, z }) => {
    //   const obj = { a: x, b: y, c: z };
    //   this[`v${this.pointIndex}`] = obj;
    //   const folder = this.gui.addFolder(`v${this.pointIndex}`);
    //   folder.add(obj, 'a', -50, 50, 0.01).onChange(() => this.updateCurve());
    //   folder.add(obj, 'b', -50, 50, 0.01).onChange(() => this.updateCurve());
    //   folder.add(obj, 'c', -50, 50, 0.01).onChange(() => this.updateCurve());
    //   this.pointIndex++;
    // });
    // this.updateCurve();
    // this.setPath();
  }

  updateCurve(toPosition) {
    if (this.curveObject) this.scene.remove(this.curveObject);
    // const curveArray = [];
    // for (let i = this.pointIndex - 1; i >= 0; i--) {
    //   const { a, b, c } = this[`v${i}`];
    //   curveArray.unshift(new THREE.Vector3(a, b, c));
    // }
    this.curve = toPosition;
    this.points = this.curve.getPoints(100);
    this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
    this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    this.curveObject = new THREE.Line(this.geometry, this.material);
    this.progress = 0;
    this.animationEnabled = true;
    // this.scene.add(this.curveObject);
  }
  update() {
    if (this.progress < 1 && this.animationEnabled) {
      this.curve.getPointAt(this.progress, this.dummyVector);
      // this.lookCurve.getPointAt(this.progress, this.lookAtPosition);
      // if (this.progress + 0.00001 < 1) {
      this.curve.getPointAt(
        Math.min(this.progress + 0.00001, 1),
        this.lookAtPosition
      );
      // }
      if (this.progress < 0.8) {
        this.progress += 0.002;
      } else {
        this.progress += 0.00025;
      }
      // this.progress += 0.001;
      this.camera.perspectiveCamera.position.copy(this.dummyVector);
      this.camera.controls.target = this.lookAtPosition;
    } else if (this.progress > 1) {
      this.animationEnabled = false;
    }
  }

  resize() {}
}
