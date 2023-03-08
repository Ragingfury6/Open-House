import Experience from '../Experience';
import * as THREE from 'three';

export default class Raycaster {
  constructor() {
    this.experience = new Experience();
    this.world = this.experience.world;
    this.controls = this.world.controls;
    this.markers = this.world.marker;
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.camera = this.experience.camera.perspectiveCamera;
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    window.addEventListener('pointermove', (e) => this.onPointerMove(e));
    window.addEventListener('mousedown', () => this.onMouseDown());
  }
  onPointerMove(e) {
    this.pointer.x = (e.clientX / this.sizes.width) * 2 - 1;
    this.pointer.y = -(e.clientY / this.sizes.height) * 2 + 1;
    this.updateRaycast();
  }
  onMouseDown() {
    const intersect = this.raycaster.intersectObject(this.scene);
    const markerIntersect = intersect.find((i) => i.object.name == 'MapMarker');
    if (markerIntersect) {
      const marker = this.markers.positionMaps.find((m) =>
        m.position.equals(markerIntersect.object.position)
      );
      // this.controls.animationEnabled = true;
      this.controls.updateCurve(marker.toPosition);
    }
  }
  updateRaycast() {
    this.raycaster.setFromCamera(this.pointer, this.camera);
  }
}
