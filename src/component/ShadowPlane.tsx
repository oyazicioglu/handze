import { MeshProps } from "@react-three/fiber";
import { Euler, Vector3 } from "three";

export const ShadowPlane = (props: MeshProps) => {
    return (
        <mesh {...props} position={[0, 0.001, 0]} receiveShadow rotation={[Math.PI / 2 * -1, 0, 0]} >
            <planeGeometry args={[200, 200]} />
            <shadowMaterial opacity={0.1} />
        </mesh>
    )
}