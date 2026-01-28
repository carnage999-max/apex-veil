
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Crosshair } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
    title: string;
    count: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

function AccordionItem({ title, count, children, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-steel/20 bg-zinc-900/20 mb-px">
            <button
                onClick={onToggle}
                className={cn(
                    "w-full flex items-center justify-between p-6 text-left transition-colors group",
                    isOpen ? "bg-secondary/5" : "hover:bg-white/5"
                )}
            >
                <div className="flex items-center gap-4">
                    <span className={cn("text-xs font-mono text-zinc-500", isOpen && "text-secondary")}>
                        MOD.{count}
                    </span>
                    <span className={cn(
                        "text-xl uppercase font-bebas tracking-wider",
                        isOpen ? "text-secondary" : "text-white"
                    )}>
                        {title}
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    {isOpen && <Crosshair className="w-5 h-5 text-secondary animate-pulse" />}
                    <ChevronDown
                        className={cn("w-5 h-5 text-zinc-500 transition-transform", isOpen && "rotate-180 text-secondary")}
                    />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 pl-16 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8">
                            <div className="text-zinc-400 leading-relaxed text-sm pr-8 border-l border-secondary/20 pl-4 py-2">
                                {children}
                            </div>
                            {/* Mini Schematic Visual Placeholder */}
                            <div className="hidden md:flex items-center justify-center border border-dashed border-zinc-700 bg-black/50 min-h-[100px] relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,bg-transparent_25%,#333_25%,#333_50%,transparent_50%,transparent_75%,#333_75%,#333_100%)] bg-[length:10px_10px]" />
                                <span className="text-[10px] text-zinc-600 font-mono">SCHEMATIC.SVG</span>
                            </div>
                        </div>

                        <div className="px-6 pb-6 pl-16">
                            <button className="text-xs uppercase tracking-widest text-secondary hover:text-white transition-colors border-b border-secondary pb-px">
                                Request detailed specs
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Accordion({ items }: { items: { title: string; content: string }[] }) {
    // Always keep one open
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="w-full border-t border-steel/20">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    count={String(index + 1).padStart(2, '0')}
                    title={item.title}
                    isOpen={activeIndex === index}
                    onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
