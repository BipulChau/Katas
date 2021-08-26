const PI = Math.PI
const sphereVolume = function (radius) {
  let volumeOfSphere = 4 / 3 * PI * Math.pow(radius, 3);
  return volumeOfSphere;
}

const coneVolume = function (radius, height) {
  let volumeOfCone = 1 / 3 * PI * Math.pow(radius, 2) * height;
  return volumeOfCone;
}

const prismVolume = function (height, width, depth) {
  let volumeofPrism = height * width * depth;
  return volumeofPrism;
}

const totalVolume = function (shapes) {
  let vol = 0
  for ( i = 0; i < shapes.length; i++) {
    if (shapes[i]["type"] === "sphere") {
      let vol1 = sphereVolume (shapes[i]["radius"]);
      vol += vol1
    } else if (shapes[i]["type"] === "cone") {
      let vol2 = coneVolume (shapes[i]["radius"], shapes[i]["height"]);
      vol += vol2
    } else if (shapes[i]["type"] === "prism") {
      let vol3 = prismVolume (shapes[i]["height"], shapes[i]["width"], shapes [i]["depth"]);
      vol += vol3
    } 
  } return vol;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
console.log(totalVolume(duck));
