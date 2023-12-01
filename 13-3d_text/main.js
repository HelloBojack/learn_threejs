import * as THREE from 'three';
import gsap from 'gsap'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const scene = new THREE.Scene()
const loader = new FontLoader();

loader.load('/helvetiker_regular.typeface.json', function (font) {

  const text_geometry = new TextGeometry('Hello three.js!', {
    font: font,
    size: 0.5,
    height: 0.2,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5
  });
  text_geometry.center();

  const material = new THREE.MeshNormalMaterial()
  const text = new THREE.Mesh(text_geometry, material)
  scene.add(text)

  console.time('donuts')
  for (let i = 0; i < 100; i++) {
    const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
    const donut = new THREE.Mesh(donutGeometry, material)

    donut.position.x = (Math.random() - 0.5) * 10
    donut.position.y = (Math.random() - 0.5) * 10
    donut.position.z = (Math.random() - 0.5) * 10

    donut.rotation.x = Math.random() * Math.PI
    donut.rotation.y = Math.random() * Math.PI

    const scale = Math.random()
    donut.scale.set(scale, scale, scale)

    scene.add(donut)
  }
  console.timeEnd('donuts')
});

// axes
// const axes = new THREE.AxesHelper();
// scene.add(axes);

// cube
// const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
//   // wireframe: true
// })
// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)




const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)

const renderer = new THREE.WebGLRenderer();
document.querySelector('#app').appendChild(renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 0, 2);
controls.update();
function animate() {

  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);

}

animate();


document.addEventListener('resize', () => {
  const width = window.innerWidth
  const height = window.innerHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

})

document.addEventListener('dblclick', (event) => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    renderer.domElement.requestFullscreen()
  }
})
