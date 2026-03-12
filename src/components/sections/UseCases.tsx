
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Crosshair, Map as MapIcon, ShieldAlert, Zap, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const cases = [
    {
        title: "High-Speed Pursuits",
        desc: "End dangerous vehicle chases safely by obstructing suspect visibility from a distance.",
        icon: Crosshair,
        image: "/images/recon.png",
    },
    {
        title: "Stolen Vehicle Recovery",
        desc: "Intercept and disable stolen vehicles without risking road-side collisions or bystander injury.",
        icon: MapIcon,
        image: "/images/border.png",
    },
    {
        title: "Tactical Interception",
        desc: "Drones coordinate to stop high-value suspect vehicles in complex urban environments.",
        icon: ShieldAlert,
        image: "/images/urban.png",
    },
    {
        title: "Perimeter Breach Stop",
        desc: "Immediately stop unauthorized vehicles attempting to breach secure government or corporate facilities.",
        icon: Zap,
        image: "/images/disaster.png",
    },
    {
        title: "Asset Protection",
        desc: "Neutralize mobile threats targeting high-value cargo or personnel during transit.",
        icon: Truck,
        image: "/images/vip.png",
    },
];

export function UseCases() {
    return (
        <section id="use-cases" className="py-32 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-7xl font-bebas text-white mb-6">Tactical Applications</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-zinc-900 border border-zinc-800 hover:border-secondary/50 transition-colors overflow-hidden"
                        >
                            {/* Image Area */}
                            <div className="aspect-video relative overflow-hidden">
                                <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                                <Image
                                    src={c.image}
                                    alt={c.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Tactical Overlay on Image */}
                                <div className="absolute inset-0 p-4 flex flex-col justify-between z-20 pointer-events-none">
                                    <div className="flex justify-between items-start">
                                        <c.icon className="text-white drop-shadow-md w-6 h-6" />
                                        <span className="text-[10px] font-mono bg-black/70 text-secondary px-2 py-1">LIVE FEED</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bebas text-white mb-4 group-hover:text-secondary transition-colors">{c.title}</h3>
                                <p className="text-zinc-50 text-sm leading-relaxed mb-6">
                                    {c.desc}
                                </p>
                                <Button variant="outline" size="sm" className="w-full">
                                    View Case Study
                                </Button>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-400 group-hover:border-secondary transition-colors" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-400 group-hover:border-secondary transition-colors" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-400 group-hover:border-secondary transition-colors" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-400 group-hover:border-secondary transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
