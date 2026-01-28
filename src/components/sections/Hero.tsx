
"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowDown, Play, Shield, Wifi, Cpu } from "lucide-react";
import Image from "next/image";

// Lazy load the 3D visualizer
const DroneVisualizer = dynamic(
    () => import("@/components/visuals/DroneVisualizer"),
    { ssr: false, loading: () => <div className="absolute inset-0 bg-transparent" /> }
);

export function Hero() {
    return (
        <section id="home" className="relative h-[calc(100vh-1.5rem)] mt-6 min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-steel/20 shadow-2xl">

            {/* Background Visuals */}
            <div className="absolute inset-0 z-0">
                <DroneVisualizer />
            </div>

            {/* Radar Sweep Overlay - Reduced opacity for visibility */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-60" />

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center pt-24 md:pt-0">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="max-w-5xl text-5xl md:text-7xl lg:text-9xl font-bebas leading-[0.9] text-white tracking-widest mb-8 mix-blend-exclusion"
                >
                    DISAPPEAR FROM <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">THE SKY</span>
                    <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-white font-thin tracking-[0.5em]">
                        WITHOUT LEAVING THE GROUND.
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="max-w-2xl text-zinc-100 text-sm md:text-base leading-relaxed mb-10 border-l-2 border-secondary/50 pl-4 text-left md:text-center md:border-l-0 md:pl-0 font-light"
                >
                    Apex Veil® is a next-generation drone-based veiling system engineered to obscure, disrupt, and control aerial visibility using coordinated swarm intelligence and adaptive cloaking technologies.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 items-center"
                >
                    <Button variant="primary" size="lg" onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}>
                        See Tech Specs
                    </Button>

                    <Button variant="outline" size="lg" onClick={() => document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' })}>
                        Request Demo
                    </Button>
                </motion.div>

                {/* Tech Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70"
                >
                    {[
                        { icon: Shield, label: "Swarm Cloaking" },
                        { icon: Wifi, label: "RF Scrambling" },
                        { icon: Cpu, label: "Coordination AI" },
                        { icon: ArrowDown, label: "Encrypted Mesh" } // Using ArrowDown as placeholder for Mesh, maybe Network if available
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="p-3 border border-zinc-800 bg-zinc-900/50 group-hover:border-secondary/50 transition-colors">
                                <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-secondary transition-colors" />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative overlaid Grid Lines */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-transparent">
                <div className="absolute top-10 left-10 w-32 h-[1px] bg-secondary/30" />
                <div className="absolute top-10 left-10 w-[1px] h-32 bg-secondary/30" />

                <div className="absolute bottom-10 right-10 w-32 h-[1px] bg-secondary/30" />
                <div className="absolute bottom-10 right-10 w-[1px] h-32 bg-secondary/30" />
            </div>

        </section>
    );
}
