const wood =
  "https://st2.depositphotos.com/2810953/5483/i/450/depositphotos_54837659-stock-photo-wood-crate-generated-hires-texture.jpg";
const wood2 =
  "https://cdna.artstation.com/p/assets/images/images/024/130/714/large/ethan-seddon-wooden-box-3d-model-c4d.jpg?1581420786";

  const ball = 'https://previews.123rf.com/images/my123rf88/my123rf881802/my123rf88180200024/95127940-closeup-detail-of-basketball-ball-texture-background.jpg'

export const TEXTURES = {
  wood: new THREE.TextureLoader().load(wood),
  wood2: new THREE.TextureLoader().load(wood2),
  ball: new THREE.TextureLoader().load(ball),
};
