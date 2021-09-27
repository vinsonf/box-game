import { scene } from "./setup.js";

export class Sphere {
  constructor(texture) {
    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.obj = new THREE.Mesh(geometry, material);
    scene.add(this.obj)
   
  }

  updatePos({x, y, z}) {
    x ? this.obj.position.x = x : void(null);
    y ? this.obj.position.y = y : void(null);
    z ? this.obj.position.z = z : void(null);
} 
}
