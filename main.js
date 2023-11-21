import * as THREE from 'three';
import gsap from 'gsap'

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry, material)

const group = new THREE.Group()
// scene.add(cube)
scene.add(group)

group.add(cube)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)

const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;


// renderer.render(scene, camera)
// console.log(gsap)

// const clock = new THREE.Clock()

gsap.to(cube.position, { duration: 3, y: 2, })

function animate() {
  // const elapsedTime = clock.getElapsedTime()

  requestAnimationFrame(animate);

  // cube.rotation.x += elapsedTime
  // cube.rotation.y += elapsedTime

  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01

  renderer.render(scene, camera);

}

animate();