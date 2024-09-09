import * as Three from 'three'
import { OrbitControls } from 'three/addons//controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

const scene = new Three.Scene();
scene.background = new Three.Color('#f0f0f0');

let Conegeometry = new Three.SphereGeometry(0.2,10,10);
let ConegeometryMaterial = new Three.MeshBasicMaterial( {color: '#00fff0'})
let coneMeshContainer = new Three.Mesh(Conegeometry,ConegeometryMaterial);
scene.add(coneMeshContainer);

let geometry = new Three.BoxGeometry(1,0.01);
let geometryMaterial = new Three.MeshBasicMaterial( {color: '#00ff00'})
let meshContainer = new Three.Mesh(geometry,geometryMaterial);
meshContainer.position.y = -0.3
scene.add(meshContainer);

const light = new Three.DirectionalLight("#f0f0f0",10);
scene.add(light);

const camera = new Three.PerspectiveCamera(10,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 10;

const render = new Three.WebGLRenderer( {canvas} );
render.setSize(window.innerWidth, window.innerHeight);

const control = new OrbitControls(camera, render.domElement);
control.enableDamping = true;
control.enablePan = true;
control.dampingFactor = 0.05;
control.enableZoom = true;



function animate(){

  coneMeshContainer.rotation.x += 0.01;
  coneMeshContainer.rotation.y += 0.01;

  meshContainer.rotation.y += 0.01;
  render.render( scene, camera );
  control.update();
}


render.setAnimationLoop(animate);




