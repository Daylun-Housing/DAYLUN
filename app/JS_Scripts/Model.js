import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model({ location, ...props }) {
  const { scene } = useGLTF(location);
  return <primitive object={scene} {...props} />;
}

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
