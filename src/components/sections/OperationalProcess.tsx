
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Tactical Positioning",
        desc: "Coordinated drone swarm initiates high-precision hovering protocol above target asset.",
        image: "/steps/step1.png",
    },
    {
        id: "02",
        title: "Active Deployment",
        desc: "System synchronizes particulate dispersion, veiling the target via advanced chemical coating.",
        image: "/steps/step2.png",
    },
    {
        id: "03",
        title: "Operational Extraction",
        desc: "Automated extraction protocol safely removes veiling material, restoring full visibility to the asset.",
        image: "/steps/step3.png",
    },
];

export function OperationalProcess() {
    return (
        <section id="process" className="py-32 bg-black relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-secondary text-sm font-mono uppercase tracking-[0.3em] mb-4">/// Operational Protocol</h2>
                    <h3 className="text-5xl md:text-7xl font-bebas text-white uppercase tracking-tight">Deployment <span className="text-zinc-600">Cycle</span></h3>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 lg:gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex-1 flex flex-col items-center w-full group">
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-[120px] left-[calc(50%+140px)] w-[calc(100%-280px)] h-[2px] bg-secondary/30 z-0">
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: false, margin: "-100px" }}
                                        transition={{ duration: 1, ease: "circOut" }}
                                        className="w-full h-full bg-secondary origin-left"
                                    />
                                    <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#00ff41]" />
                                </div>
                            )}

                            {/* Connector Line (Mobile) */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden absolute -bottom-12 left-1/2 w-[2px] h-12 bg-secondary/30 z-0 -translate-x-1/2">
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: false, margin: "-50px" }}
                                        transition={{ duration: 0.8, ease: "circOut" }}
                                        className="w-full h-full bg-secondary origin-top"
                                    />
                                </div>
                            )}

                            {/* Step Image Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative w-full max-w-[400px] mb-8 z-10"
                            >
                                <div className="aspect-video relative overflow-hidden border border-zinc-800 p-1 bg-zinc-900/50 group-hover:border-secondary transition-colors duration-500">
                                    <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                                    <div className="relative w-full h-full grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* HUD Elements */}
                                    <div className="absolute top-2 left-2 flex gap-2 z-20">
                                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_5px_#00ff41]" />
                                        <span className="text-[8px] font-mono text-secondary tracking-widest font-bold">ACTIVE_FEED_{step.id}</span>
                                    </div>
                                    <div className="absolute bottom-2 right-2 z-20">
                                        <div className="text-[8px] font-mono text-secondary/60 uppercase">Operational Verified</div>
                                    </div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-secondary/0 group-hover:border-secondary shadow-[0_0_10px_#00ff41] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-secondary/0 group-hover:border-secondary shadow-[0_0_10px_#00ff41] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </motion.div>

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.3 }}
                                className="text-center md:text-left px-4"
                            >
                                <span className="inline-block text-secondary font-mono text-xs mb-2">PROT_V.{step.id}</span>
                                <h4 className="text-2xl font-bebas text-white mb-3 tracking-wide">{step.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed max-w-[300px] mx-auto md:mx-0">
                                    {step.desc}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
