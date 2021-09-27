export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

export const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

export const pressed = {
    left: false,
    up: false,
    down: false,
    right: false,
}


window.addEventListener('keydown', function(event) {
    console.log(event);

    switch(event.key) {
        case 'a':
            return pressed.left = true;
        case 'd':
            return pressed.right = true;
        case 'w':
            return pressed.up = true;
        case 's':
            return pressed.down = true;
        case 'i':
            return pressed.in = true;
        case 'k':
            return pressed.out = true;
        case 'j':
            return pressed.rotateLeft = true;
        case 'l':
            return pressed.rotateRight = true;   

    }
});

window.addEventListener('keyup', function(event) {
    console.log(event);

    switch(event.key) {
        case 'a':
            return pressed.left = false;
        case 'd':
            return pressed.right = false;
        case 'w':
            return pressed.up = false;
        case 's':
            return pressed.down = false;
        case 'i':
            return pressed.in = false;
        case 'k':
            return pressed.out = false;
        case 'j':
            return pressed.rotateLeft = false;
        case 'l':
            return pressed.rotateRight = false;   

    }
});