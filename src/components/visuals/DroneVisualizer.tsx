
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function DroneSwarm() {
    const ref = useRef<THREE.Points>(null!);

    // Generate 200 drones
    const count = 200;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Distribute in a sphere/cloud
            const r = 20 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 8;
            ref.current.rotation.y -= delta / 12;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00ff41"
                    size={0.4}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.9}
                />
            </Points>
        </group>
    );
}

function RadarGrid() {
    return (
        <gridHelper args={[60, 60, 0x111111, 0x050505]} position={[0, -10, 0]} />
    )
}

export default function DroneVisualizer() {
    return (
        <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none">
            <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
                <fog attach="fog" args={["#050505", 10, 50]} />
                <ambientLight intensity={0.5} />
                <DroneSwarm />
                <RadarGrid />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_2px,rgba(0,0,0,0.5)_3px)] opacity-20 pointer-events-none"
                style={{ backgroundSize: '100% 4px' }}
            />
        </div>
    );
}
