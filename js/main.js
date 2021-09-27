import { Cube } from './cube.js';
import { Sphere } from './sphere.js';
import { TEXTURES } from './texture.js';
import {camera, scene, renderer, pressed} from './setup.js';


camera.position.z = 10;
const cube = new Cube(TEXTURES.wood);
const cube2 = new Cube(TEXTURES.wood2);
const sphere = new Sphere(TEXTURES.ball);



cube2.updatePos({x: 2, y: 2, z: 0})
cube.updatePos({x: -2, y: 2, z: 0})



function animate() {
	requestAnimationFrame( animate );

    sphere.obj.rotation.y += .01;

    if (pressed.left) {
        // sphere.updatePos({x: sphere.obj.position.x -.1})
        camera.position.x += -.1;
    }
    if (pressed.right) {
        // sphere.updatePos({x: sphere.obj.position.x + .1});
        camera.position.y += .1;
    }

    if (pressed.down) {
        // sphere.updatePos({y: sphere.obj.position.y -.1});
        camera.position.y += -.1;
    }
    if (pressed.up) {
        // sphere.updatePos({y: sphere.obj.position.y + .1})
        camera.position.y += .1;
    }

    if (pressed.in) {
        // sphere.updatePos({y: sphere.obj.position.y -.1});
        camera.position.z += -.1;
    }
    if (pressed.out) {
        // sphere.updatePos({y: sphere.obj.position.y + .1})
        camera.position.z += .1;
    }
    if (pressed.rotateLeft) {
        // sphere.updatePos({y: sphere.obj.position.y -.1});
        camera.rotation.y += -.01;
    }
    if (pressed.rotateRight) {
        // sphere.updatePos({y: sphere.obj.position.y + .1})
        camera.rotation.y += .01;
    }


	renderer.render( scene, camera );
}
animate();



