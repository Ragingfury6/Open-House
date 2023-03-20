import Experience from '../Experience';
import * as THREE from 'three';
import gsap from 'gsap';
import { Power4 } from 'gsap/src/all';

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
    this.lastMarker = null;
    window.addEventListener('pointermove', (e) => this.onPointerMove(e));
    window.addEventListener('mousedown', () => this.onMouseDown());
  }
  onPointerMove(e) {
    this.pointer.x = (e.clientX / this.sizes.width) * 2 - 1;
    this.pointer.y = -(e.clientY / this.sizes.height) * 2 + 1;
    this.updateRaycast();
    const marker = this.locateMarker();
    if (marker) {
      if (this.lastMarker === null) {
        this.lastMarker = marker;
        gsap.to(marker.buildingCeiling.position, {
          y: 1,
          duration: 1.5,
          ease: Power4.easeOut,
        });
        gsap.to(marker.buildingCeiling.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1.5,
          ease: Power4.easeOut,
        });
      }
    } else {
      if (this.lastMarker) {
        gsap.to(this.lastMarker.buildingCeiling.position, {
          y: this.lastMarker.originalScale.height,
          duration: 1.5,
          ease: Power4.easeOut,
        });
        gsap.to(this.lastMarker.buildingCeiling.scale, {
          x: this.lastMarker.originalScale.x,
          y: this.lastMarker.originalScale.y,
          z: this.lastMarker.originalScale.z,
          duration: 1.5,
          ease: Power4.easeOut,
        });
      }
      this.lastMarker = null;
    }
  }
  onMouseDown() {
    const marker = this.locateMarker();
    if (marker) {
      this.controls.updateCurve(marker.toPosition);
    }
  }
  locateMarker() {
    const intersect = this.raycaster.intersectObject(this.scene);
    const markerIntersect = intersect.find((i) => i.object.name == 'MapMarker');
    if (markerIntersect) {
      const marker = this.markers.positionMaps.find((m) =>
        m.position.equals(markerIntersect.object.position)
      );
      return marker;
    }
    return null;
  }
  updateRaycast() {
    this.raycaster.setFromCamera(this.pointer, this.camera);
  }
}
