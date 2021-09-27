const wood =
  "https://st2.depositphotos.com/2810953/5483/i/450/depositphotos_54837659-stock-photo-wood-crate-generated-hires-texture.jpg";
const wood2 =
  "https://cdna.artstation.com/p/assets/images/images/024/130/714/large/ethan-seddon-wooden-box-3d-model-c4d.jpg?1581420786";

  const ball = 'https://previews.123rf.com/images/my123rf88/my123rf881802/my123rf88180200024/95127940-closeup-detail-of-basketball-ball-texture-background.jpg';


  const homer = 'https://static.standard.co.uk/s3fs-public/thumbnai…ge/2016/02/17/10/homersimpson1702a.jpg?width=1200';

  const castle = 'https://upload.wikimedia.org/wikipedia/commons/thu…chloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg';
  const treeOrb = 'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg';
  const smiley1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRhRyPFiULslUj0wdK1-JLLJLfa4puR4B3Q&usqp=CAU';

  const adT = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLpClwzs8AxqEqQLvQ9hSJnHenSVNJ9nCjg&usqp=CAU';
  // const smiley2 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…IUVlz8PsiftckIQhSWnLxSw9nmhCEKOzZngi0Z+CEIQv/2Q==';
  // const bryce = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVEA…FK1rRila0ohWtaEVXpP8HxslUhdykAe8AAAAASUVORK5CYII=';
  const catfish = 'https://yt3.ggpht.com/ytc/AKedOLSW8oE2ji6KnFNUYf-pgNMeI8pwrvG_ZnmZQo6lIg=s900-c-k-c0x00ffffff-no-rj';

export const TEXTURES = {
  wood,wood2,ball,homer, treeOrb, smiley1, catfish, adT
};

export function createTexture(url) {
  return new THREE.TextureLoader().load(url)
}
