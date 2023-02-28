import { Hud, OrthographicCamera } from "@react-three/drei"
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber"
import { useRef, useState } from "react"
import { AxesHelper, Matrix4, Quaternion } from "three"

export const Viewcube = ({ renderPriority = 1, matrix = new Matrix4() }) => {
    const mesh = useRef(null)
    const { camera, size } = useThree()
    const [hover, set] = useState<number | null>(null)

    useFrame(() => {
        // Spin mesh to the inverse of the default cameras matrix
        matrix.copy(camera.matrix).invert()
        if (mesh.current && mesh.current["quaternion"]) {
            (mesh.current["quaternion"] as Quaternion).setFromRotationMatrix(matrix)
        }
    })

    return (
        <Hud renderPriority={renderPriority}>
            <OrthographicCamera makeDefault position={[0, 0, 100]} />
            <mesh
                ref={mesh}
                position={[size.width / 2 - 100, size.height / 2 - 100, 0]}
                onPointerOut={(e: ThreeEvent<PointerEvent | null>) => set(null)}
                onPointerMove={(e: ThreeEvent<PointerEvent | null>) => set(e.face ? e.face["materialIndex"] : null)}>
                {[...Array(6)].map((_, index) => (
                    <meshLambertMaterial attach={`material-${index}`} key={index} color={hover === index ? 'lightblue' : 'white'} />
                ))}
                <boxGeometry args={[40, 40, 40]} />
            </mesh>
            <ambientLight intensity={1} />
            <pointLight position={[200, 200, 100]} intensity={0.5} />
        </Hud>
    )
}