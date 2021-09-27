import { Cube } from './cube.js';
import { Sphere } from './sphere.js';
import { TEXTURES, createTexture} from './texture.js';
import {camera, scene, renderer, pressed} from './setup.js';
import {socket} from './socket.js';

const players = [];
const playersObj = {};
let myUsername = '';
let myPlayer = null;

socket.on('all players', function(payload) {
    console.log('run all players')
    payload.forEach(function(player) {
        const texture = createTexture(TEXTURES['wood'])
        const cube = new Cube(texture);
        playersObj[player.username] = cube;
        players.push(cube);
        cube.updatePos({x: players.length}) 
    })
})

socket.on('add player', function(payload) {
    
    const keys = Object.keys(TEXTURES);

    const randomKey = keys.sort( () => Math.random() >= .5 ? 1 : -1)[0];
    const randomTexture = TEXTURES['wood'];
    const texture = createTexture(payload.value ? payload.value : randomTexture)
    const player = new Cube(texture, payload.username);
    playersObj[payload.username] = player;
    players.push(player);
    player.updatePos({x: players.length})
   

    if (payload.username === myUsername) {
        myPlayer = player;
        pressed.username = myUsername;
        button.disabled = true;
    }
});

socket.on('player move', function(payload) {
    console.log(payload, 'player move');
    playersObj[payload.username].pressed = payload;
    console.log(playersObj[payload.username]);
})

const input = document.querySelector('input');
const usernameInput = document.querySelector('#usernameInput');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    if (!usernameInput.value) {
        return;
    }
    myUsername = usernameInput.value;
    socket.emit('add player', {value: input.value, username: myUsername});
})


camera.position.z = 10;

camera.position.x = 8;



function animate() {
	requestAnimationFrame( animate );


  
    players.forEach( player => {
        if (player.pressed.left) {
            player.updatePos({x: player.obj.position.x -.1})
        }
        if (player.pressed.right) {
            player.updatePos({x: player.obj.position.x + .1})
        }
    
        if (player.pressed.down) {
            player.updatePos({y: player.obj.position.y -.1})
        }
        if (player.pressed.up) {
            player.updatePos({y: player.obj.position.y + .1})
        }
    
    })

	renderer.render( scene, camera );
}
animate();



