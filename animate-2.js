
const scene = new THREE.Scene();
{
  const near = 1;
  const far = 2;
  const color = 'white';
  scene.fog = new THREE.Fog(color, near, far);
  
  scene.background = new THREE.Color(color);}
