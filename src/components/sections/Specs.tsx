
"use client";

import { Button } from "@/components/ui/Button";

const specs = [
    { label: "Individual drone weight", value: "Classified", highlight: true },
    { label: "Maximum swarm size", value: "Configurable" },
    { label: "Flight time", value: "Extended-duration operation" },
    { label: "Charge time", value: "Rapid cycle" },
    { label: "Construction", value: "Composite aerospace materials" },
    { label: "Environmental tolerance", value: "All-weather rated" },
    { label: "Sensor loadout", value: "Modular, mission-dependent" },
];

export function Specs() {
    return (
        <section id="specs" className="py-32 bg-zinc-950 border-t border-b border-steel/20 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-16 border-l-4 border-secondary pl-6">
                        <h2 className="text-5xl md:text-6xl font-bebas text-white mb-2 text-balance">Technical Specifications</h2>
                        <p className="text-zinc-300 font-mono text-sm uppercase">/// Authorized Personnel Only</p>
                    </div>

                    {/* Data Grid */}
                    <div className="bg-black/50 border border-steel/30 shadow-2xl">
                        {specs.map((item, i) => (
                            <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 px-6 border-b border-steel/20 last:border-0 hover:bg-white/5 transition-colors gap-2">
                                <span className="text-zinc-50 font-mono text-xs uppercase tracking-wider">{item.label}</span>
                                <span className={`font-bold font-bebas tracking-wide text-lg ${item.highlight ? 'text-red-500 blur-[2px] hover:blur-none transition-all cursor-crosshair' : 'text-white'}`}>
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
