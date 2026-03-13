
"use client";

import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

const technologyItems = [
    {
        title: "Target Acquisition & Vehicle Tracking",
        content: "AI-assisted drones identify and lock onto the fleeing vehicle."
    },
    {
        title: "Pursuit Intercept Positioning",
        content: "Drones position above and ahead of the vehicle for safe deployment."
    },
    {
        title: "Adhesive Deployment System",
        content: "A precision spray coats the windshield with a high-visibility-blocking compound."
    },

    {
        title: "Command & Law-Enforcement Override",
        content: "Encrypted command system allowing officers full operational control."
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
            /// Pursuit Mitigation
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-bebas text-white mb-8 leading-[0.85]">
                        ADAPTIVE <br />
                        <span className="text-zinc-400">DOMINANCE</span>
                    </h3>
                    <p className="text-zinc-200 max-w-md mb-12">
                        Apex Veil® is not a concealment swarm or cloaking system. It is a coordinated police drone deployment platform designed to safely stop fleeing vehicles. Autonomous units track a suspect vehicle and deploy a specialized adhesive onto the windshield, immediately obstructing visibility and forcing the driver to slow and stop—eliminating the need for dangerous high-speed pursuits.
                    </p>

                    <Button variant="secondary" onClick={() => document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' })}>
                        Request System Access
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
