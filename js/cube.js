import { scene } from "./setup.js";

export class Cube {
    x = 0;
    y = 0;
    z = 0;


    constructor(texture) {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { map:  texture} );
        this.obj = new THREE.Mesh( geometry, material );
        scene.add(this.obj);
    }


    updateX(value) {
        this.obj.position.x = value;
    }

    updatePos({x, y, z}) {
        x ? this.obj.position.x = x : void(null);
        y ? this.obj.position.y = y : void(null);
        z ? this.obj.position.z = z : void(null);
    } 

    update() {
        this.obj.position.x = this.x;
        this.obj.position.y = this.y;
        this.obj.position.z = this.z;
    }

}