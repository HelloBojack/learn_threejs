import * as THREE from 'three';
import gsap from 'gsap'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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
// camera.position.z = 5;

// const cursor = {
//   x: 0,
//   y: 0
// }

// window.addEventListener('mousemove', (event) => {
//   cursor.x = event.clientX / window.innerWidth - 0.5
//   cursor.y = -(event.clientY / window.innerHeight - 0.5)
// })

// renderer.render(scene, camera)
// console.log(gsap)

// const clock = new THREE.Clock()

// gsap.to(cube.position, { duration: 3, y: 2, })

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 2, 0);
controls.update();
function animate() {
  // const elapsedTime = clock.getElapsedTime()

  requestAnimationFrame(animate);

  // cube.rotation.x += elapsedTime
  // cube.rotation.y += elapsedTime

  // camera.position.x = cursor.x * 10
  // camera.position.y = cursor.y * 10

  // camera.position.x = Math.sin(cursor.x * 2 * Math.PI) * 2
  // camera.position.z = Math.cos(cursor.x * 2 * Math.PI) * 2
  // camera.position.y = cursor.y * 5
  // camera.lookAt(cube.position)

  controls.update();

  renderer.render(scene, camera);

}

animate();