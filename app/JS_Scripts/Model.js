import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("/models/falcon.gltf");
    return <primitive object={scene} {...props} />
}

export default function Model_Preview() {
    return (
        <Canvas dpr={[1, 2]} camera={{fov:45 }} style={{"position" : "relative"}}>
            <color attach="background" args={["#0474BC"]} />
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={null}>
                    <Model scale={0.01} />
                </Stage>
            </PresentationControls>
        </Canvas>
    )
}