import * as THREE from 'three';
import GUI from 'lil-gui';
import Experience from '../Experience';
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
      a1: 0.66,
      a2: 0.42,
      a3: 1.4,
      b1: 2.62,
      b2: 0.42,
      b3: 1.64,
      c1: 3.6,
      c2: 0.42,
      c3: 1.64,
      d1: 5.58,
      d2: 0.38,
      d3: 1.5,
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
    this.setPath();
  }

  setPath() {
    // To Coding
    // this.curve = new THREE.CatmullRomCurve3([
    //   new THREE.Vector3(0.66, 0.42, 1.4),
    //   new THREE.Vector3(-4, 0.42, 1.4),
    //   new THREE.Vector3(-6, 0.42, 1.4),
    //   new THREE.Vector3(-6, 0.38, 0.66),
    // ]);

    // To vet
    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.42, 0.42, -0.32),
      new THREE.Vector3(0.66, 0.42, 1.64),
      new THREE.Vector3(3.6, 0.42, 1.64),
      new THREE.Vector3(5.58, 0.38, 1.5),
    ]);

    // this.curve = new THREE.CatmullRomCurve3([
    //   new THREE.Vector3(this.guiObj.a1, this.guiObj.a2, this.guiObj.a3),
    //   new THREE.Vector3(this.guiObj.b1, this.guiObj.b2, this.guiObj.b3),
    //   new THREE.Vector3(this.guiObj.c1, this.guiObj.c2, this.guiObj.c3),
    //   new THREE.Vector3(this.guiObj.d1, this.guiObj.d2, this.guiObj.d3),
    // ]);

    this.points = this.curve.getPoints(50);
    this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
    this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    this.curveObject = new THREE.Line(this.geometry, this.material);
    // this.scene.add(this.curveObject);
  }

  update() {
    if (this.progress < 1) {
      this.curve.getPointAt(this.progress, this.dummyVector);
      this.curve.getPointAt(this.progress + 0.00001, this.lookAtPosition);
      this.progress += 0.001;
      this.camera.perspectiveCamera.position.copy(this.dummyVector);
      this.camera.perspectiveCamera.lookAt(this.lookAtPosition);
    } else {
      this.camera.controls.update();
    }
  }

  resize() {}
}
