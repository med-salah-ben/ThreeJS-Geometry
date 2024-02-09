import * as THREE from 'three' ;
import "./style.css";
// Create Scene
const scene = new THREE.Scene();

// Create our sphere and give him a size for segments
const geometry = new THREE.SphereGeometry(3 , 64, 64);
//  material to add 
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
});

// combine geometry & material
const mesh = new THREE.Mesh(geometry, material);
// Add the mesh to the scene
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera

// Light
//  create light to the element
const light = new THREE.DirectionalLight(0xffffff, 1, 100);
light.position.set(0, 10,10);
// Add the light to the scene
scene.add(light);

// Camera
// Create a camera------------------how much can the camera see 
// 0.1 = camera can't see anything when position is less thin 0.1
// 100 = camera can't see anything when position is great thin 100
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
// change the camera position make geometry view
camera.position.z = 20;
// Add the camera to the scene
scene.add(camera);

// Render
// Get Canvas
const canvas = document.querySelector(".webgl");
// Render the scene
const renderer = new THREE.WebGLRenderer({canvas});
//  Set up viewport
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera)

// console.log(navigator.gpu);

//Resize
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
    // Update camera
    // make geometry view fixed
    camera.updateProjectionMatrix();
  
    camera.aspect = sizes.width / sizes.height;
    renderer.setSize(sizes.width, sizes.height);
});

const loop =()=>{
  console.log("loop");
  // add Event
  // mesh.position.x += 0.1
renderer.render(scene, camera)
window.requestAnimationFrame(loop);
}
// loop()