import { socket } from "./socket.js";

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

export const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

export const pressed = {
    username: null,
    left: false,
    up: false,
    down: false,
    right: false,
}

const availableKeys = ['a','d', 'w', 's'];


window.addEventListener('keydown', function(event) {
  

    if (!pressed.username || !availableKeys.includes(event.key)) {
        return;
    }

    console.log(event.key);

    switch(event.key) {
        case 'a':
            pressed.left = true;
            break;
        case 'd':
            pressed.right = true;
            break;
        case 'w':
            pressed.up = true;
            break;
        case 's':
            pressed.down = true;
            break;

    }
    socket.emit('player move', pressed);
});

window.addEventListener('keyup', function(event) {

    if (!pressed.username || !availableKeys.includes(event.key)) {
        return;
    }
    console.log(event.key);

    switch(event.key) {
        case 'a':
            pressed.left = false;
            break;
        case 'd':
            pressed.right = false;
            break;
        case 'w':
            pressed.up = false;
            break;
        case 's':
            pressed.down = false;
            break;
    }
    socket.emit('player move', pressed);
});