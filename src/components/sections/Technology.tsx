
"use client";

import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

const technologyItems = [
    {
        title: "Swarm Veil Formation",
        content: "Apex Veil® deploys coordinated drone swarms that dynamically position and maintain a continuous veiling layer. The system adapts in real time to wind, terrain, and threat vectors."
    },
    {
        title: "Stealth Cloaking System",
        content: "Each unit contributes to a composite cloaking field that disrupts visual, infrared, and sensor-based detection through controlled particulate dispersion and signal interference."
    },
    {
        title: "Signal Scrambling Mesh",
        content: "An adaptive RF mesh actively disrupts hostile surveillance, telemetry interception, and unauthorized drone penetration within the protected perimeter."
    },
    {
        title: "Autonomous Coordination AI",
        content: "Distributed intelligence enables autonomous decision-making across the swarm, ensuring resilience, redundancy, and uninterrupted veil integrity."
    },
    {
        title: "Manual Override + Encrypted Command",
        content: "Operators retain full manual control via encrypted command channels, allowing precision intervention, redeployment, or immediate shutdown when required."
    }
];

export function Technology() {
    return (
        <section id="technology" className="py-32 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-zinc-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column: Heading & minimal info */}
                <div className="lg:sticky lg:top-32">
                    <h2 className="text-secondary text-base font-mono uppercase tracking-[0.2em] mb-4">
            /// Core Architecture
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-bebas text-white mb-8 leading-[0.85]">
                        ADAPTIVE <br />
                        <span className="text-zinc-600">DOMINANCE</span>
                    </h3>
                    <p className="text-zinc-400 max-w-md mb-12">
                        The Apex Veil system is not one drone—it is an intelligent organism.
                        Hundreds of autonomous units acting with a singular purpose: absolute obfuscation.
                    </p>

                    <Button variant="secondary" onClick={() => document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' })}>
                        Deploy Context
                    </Button>
                </div>

                {/* Right Column: Interactive Modules */}
                <div>
                    <Accordion items={technologyItems} />
                </div>
            </div>
        </section>
    );
}
