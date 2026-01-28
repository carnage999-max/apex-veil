
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crosshair, Map } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// Small thematic element for mobile menu
const DroneVisualizer = dynamic(
    () => import("@/components/visuals/DroneVisualizer"),
    { ssr: false }
);

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Process", href: "#process" },
    { name: "Technology", href: "#technology" },
    { name: "Specs", href: "#specs" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Contact", href: "#contact" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 pt-4 pointer-events-none">
            <div className={cn(
                "mx-auto max-w-7xl flex items-center justify-between transition-all duration-300 pointer-events-auto relative z-[101]",
                scrolled || isOpen ? "bg-black/90 backdrop-blur-md border border-zinc-800 p-2" : "bg-transparent p-4"
            )}>
                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <Link href="#home" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/apex-veil-logo.png"
                            alt="Apex Veil Logo"
                            width={80}
                            height={80}
                            className="h-12 w-auto object-contain brightness-125 scale-125"
                        />
                        <span className="text-2xl font-bebas tracking-wider text-white group-hover:text-secondary transition-colors">APEX VEIL<span className="text-secondary">®</span></span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-secondary hover:bg-secondary/5 transition-colors relative"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <Link
                    href="#request-demo"
                    className="hidden md:block px-6 py-2 bg-secondary text-black font-bebas text-lg uppercase hover:bg-white transition-colors skew-x-[-10deg]"
                >
                    <span className="block skew-x-[10deg]">Request Demo</span>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white hover:text-secondary transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-[90] md:hidden pointer-events-auto h-screen w-screen overflow-hidden"
                    >
                        {/* Background 3D Visualizer for WOW factor */}
                        <div className="absolute inset-0 opacity-20 scale-150 rotate-12">
                            <DroneVisualizer />
                        </div>

                        <div className="relative z-[91] h-full flex flex-col justify-center px-8 pt-20">
                            {/* Large Mobile Menu Logo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-12 flex justify-start"
                            >
                                <Image
                                    src="/apex-veil-logo.png"
                                    alt="Apex Veil Logo"
                                    width={300}
                                    height={300}
                                    className="w-64 h-auto object-contain brightness-125 scale-110"
                                />
                            </motion.div>
                            {/* HUD Decor */}
                            <div className="absolute top-24 left-8 text-[10px] font-mono text-secondary/40 vertical-text hidden sm:block">
                                HUD_NAV_SYSTEM_LINK_STABLE
                            </div>

                            <div className="space-y-4">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-end gap-4"
                                        >
                                            <span className="text-[10px] font-mono text-zinc-600 mb-2">0{i + 1}</span>
                                            <span className="text-5xl sm:text-7xl font-bebas text-white group-hover:text-secondary transition-colors uppercase tracking-tight">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-12"
                            >
                                <Link
                                    href="#request-demo"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-block px-8 py-4 bg-secondary text-black font-bebas text-2xl uppercase hover:bg-white transition-colors w-full text-center"
                                >
                                    Initiate Demo Request
                                </Link>
                            </motion.div>

                            {/* Tactical Corner Decor */}
                            <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-20">
                                <Crosshair className="w-12 h-12 text-zinc-500 mb-2" />
                                <span className="text-[8px] font-mono text-zinc-500 uppercase">Secure Connection Verified</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
