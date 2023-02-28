import { AccumulativeShadows, OrbitControls, RandomizedLight } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Fragment } from "react"
import { Cube } from "./Cube"
import { ShadowPlane } from "./ShadowPlane"
import { Viewcube } from "./Viewcube"

export const BaseScene = () => {
    return (
        <Fragment>
            <Canvas gl={{ antialias: true, logarithmicDepthBuffer: true }} shadows={'soft'} camera={{ position: [-15, 0, 10], fov: 25 }}>
                <Viewcube></Viewcube>
                <ambientLight intensity={0.5} />
                <directionalLight castShadow color={"white"} intensity={3} position={[2, 5, 5]} />
                <Cube></Cube>
                <AccumulativeShadows color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
                    <RandomizedLight amount={8} radius={1} ambient={0.8} intensity={1} position={[2, 5, 5]} bias={0.001} />
                </AccumulativeShadows>
                <ShadowPlane></ShadowPlane>
                <OrbitControls makeDefault enableDamping={false} />

            </Canvas>
        </Fragment>
    )
}
