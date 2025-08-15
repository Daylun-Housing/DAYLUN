import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

/**
 * MODEL 
 * @param {*}  
 * @returns {primitive}
 * 
 * DEFUNCT: generates a model to view.
 */
function Model({ location, ...props }) {
  const { scene } = useGLTF(location);
  return <primitive object={scene} {...props} />;
}

/**
 * MODEL PREVIEW
 * @param {*} loc 
 * @returns {JSX.Element}
 * 
 * DEFUNCT: creates the preivew section; this is used in the House Builder section 
 * but D2M will replace this.
 */
export default function Model_Preview({ loc }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        fov: 45,
        position: [0, 0, 5],
        near: 0.1,
        far: 1000,
      }}
      style={{ position: "relative" }}
    >
      <color attach="background" args={["#0474BC"]} />
      <PresentationControls
        key={loc} // <- force remount on model change
        speed={1.5}
        global
        zoom={0.7}
        polar={[-0.1, Math.PI / 4]}
        rotation={[0, 0, 0]}
        config={{ mass: 2, tension: 500 }}
      >
        <Stage
          environment="sunset"
          shadows={false}
          contactShadow={false}
          preset="rembrandt"
          intensity={1}
        >
          <Model scale={0.01} location={loc} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
