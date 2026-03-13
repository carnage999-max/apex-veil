
"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

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
                    STOP THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">CHASE</span>
                    <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-white font-thin tracking-[0.5em]">
                        BEFORE IT HAPPENS
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="max-w-2xl text-zinc-50 text-sm md:text-base leading-relaxed mb-10 border-l-2 border-secondary/50 pl-4 text-left md:text-center md:border-l-0 md:pl-0 font-light"
                >
                    Apex Veil® is a police utility drone designed to safely end dangerous vehicle pursuits. It deploys a specialized adhesive onto a suspect vehicle’s windshield, instantly blocking visibility and forcing the driver to slow and stop.
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
