import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import styles from "../styles/Art.module.css";


const Model = ({ objPath, mtlPath, setControls }) => {
  const [model, setModel] = useState(null);
  const { camera } = useThree(); // Correctly import and use useThree hook

  useEffect(() => {
    new MTLLoader().load(mtlPath, (materials) => {
      materials.preload();
      new OBJLoader().setMaterials(materials).load(objPath, (loadedModel) => {
        setModel(loadedModel);
      });
    });
  }, [objPath, mtlPath]);

  useEffect(() => {
    if (model && camera) {
      fitCameraToObject(camera, model, 22, setControls);
    }
  }, [model, camera, setControls]);

  return model ? <primitive object={model} /> : null;
};

const ModelViewer = ({ objPath, mtlPath }) => {
  const controlsRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
      {" "}
      {/* Adjust the y-coordinate here */}
      <Suspense fallback={<div>Loading...</div>}>
        <ambientLight intensity={1.9} />
        <pointLight position={[10, 80, 80]} />
        <Model
          className={styles.ModelViewer}
          objPath={objPath}
          mtlPath={mtlPath}
          setControls={(c) => (controlsRef.current = c)}
        />
        <OrbitControls ref={controlsRef} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;

function fitCameraToObject(camera, object, offset, setControls) {
  offset = offset || 1.1; // Adjust the offset as needed

  const boundingBox = new THREE.Box3();

  // Calculate the bounding box of the object
  boundingBox.setFromObject(object);

  const center = boundingBox.getCenter(new THREE.Vector3());

  // This is the size of the bounding box
   
   const size = boundingBox.getSize(new THREE.Vector3());

  const maxDim = Math.max(size.x, size.y, size.z);
  const distance = maxDim / (3 * Math.tan((camera.fov * Math.PI) / 180));
  const offsetMultiplier = offset || 2.25; // Adjust the offset multiplier as needed

  camera.position.x = center.x;
  camera.position.y = center.y;
  camera.position.z = center.z + distance * offsetMultiplier;


  if (setControls) {
    setControls((controls) => {
      if (controls) {
        // Set the target of the controls to be the center of the bounding box
        controls.target.copy(center);
        controls.update();
      }
      return controls;
    });
  }
}
