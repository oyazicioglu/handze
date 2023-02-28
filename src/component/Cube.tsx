import { MeshProps, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export const Cube = (props: MeshProps) => {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            castShadow
            position={[0, 0.5, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"white"} />
        </mesh>
    )
}