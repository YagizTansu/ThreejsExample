const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function createBox(x, y, z, color) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;

    return cube;
}

const cube1 = createBox(0, 0, 0, 0xff0000);
const cube2 = createBox(1, 0, 0, 0x00ff00);
const cube3 = createBox(2, 0, 0, 0x0000ff);
const cube4 = createBox(0, 1, 0, 0xffff00);
const cube5 = createBox(1, 1, 0, 0x00ffff);
const cube6 = createBox(2, 1, 0, 0xff00ff);

const cube10 = createBox(0, 0, -1, 0xffff00);
const cube11 = createBox(1, 0, -1, 0x00ffff);
const cube12 = createBox(2, 0, -1, 0xff00ff);

const cube7 = createBox(0, 1, -1, 0xff0000);
const cube8 = createBox(1, 1, -1, 0x0000ff);
const cube9 = createBox(2, 1, -1, 0xffffff);

const cube13 = createBox(0, 0, -2, 0xff0000);
const cube14 = createBox(1, 0, -2, 0x00ff00);
const cube15 = createBox(2, 0, -2, 0x0000ff);
const cube16 = createBox(0, 1, -2, 0xffff00);
const cube17 = createBox(1, 1, -2, 0x00ffff);
const cube18 = createBox(2, 1, -2, 0xff00ff);


scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

scene.add(cube4);
scene.add(cube5);
scene.add(cube6);

scene.add(cube7);
scene.add(cube8);
scene.add(cube9);

scene.add(cube10);
scene.add(cube11);
scene.add(cube12);

scene.add(cube13);
scene.add(cube14);
scene.add(cube15);

scene.add(cube16);
scene.add(cube17);
scene.add(cube18);

camera.position.set(-3, 4, 5);
camera.rotateY(-0.3);
camera.rotateX(-0.4);

function animate() {
    requestAnimationFrame(animate);

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();