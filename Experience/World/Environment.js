import Experience from '../Experience';
import * as THREE from 'three';
export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.setSunlight();
    this.setB1F2PointLights();
    this.setB1F1PointLights();
  }
  setSunlight() {
    this.sunLight = new THREE.DirectionalLight('#fff', 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(1.5, 7, 3);
    this.scene.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight('#fff', 0.4);
    this.scene.add(this.ambientLight);
  }

  setB1F2PointLights() {
    const p1 = new THREE.PointLight('#0f0', 0.25);
    p1.position.copy(new THREE.Vector3(-6.5, 1, -2));
    this.scene.add(p1);
  }

  setB1F1PointLights() {
    const p1 = new THREE.PointLight('#0f0', 0.75);
    p1.position.copy(new THREE.Vector3(-23.5, -0.75, -2.09));
    this.scene.add(p1);
    // this.scene.add(new THREE.PointLightHelper(p1));
  }

  resize() {}

  update() {}
}
