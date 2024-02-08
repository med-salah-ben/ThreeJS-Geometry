import * as THREE from 'three' ;

// Create Scene
const scene = new THREE.Scene();

// Create our sphere and give him a size for segments
const geometry = new THREE.SphereGeometry(3 , 64, 64);
//  material to add 
const material = new THREE.MeshBasicMaterial({
  color: "#00ff83",
});

// combine geometry & material
const mesh = new THREE.Mesh(geometry, material);
// Add the mesh to the scene
scene.add(mesh);

// Create a camera------------------how much can the camera see
const camera = new THREE.PerspectiveCamera(45, 800, 600)
// Add the camera to the scene
scene.add(camera)

// Get Canvas
const canvas = document.querySelector(".webgl")

// Render the scene
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(800, 600)
renderer.render(scene, camera)