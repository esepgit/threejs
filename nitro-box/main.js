import * as THREE from 'three';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const textureLoader = new THREE.TextureLoader()
const material = [
  new THREE.MeshBasicMaterial({
    map: textureLoader.load("./assets/nitroface.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: textureLoader.load("./assets/nitroface.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: textureLoader.load("./assets/nitrotop.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: textureLoader.load("./assets/nitrotop.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: textureLoader.load("./assets/nitroface.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: textureLoader.load("./assets/nitroface.png"),
  }),
];

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5
cube.rotation.x = 0.4

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()

