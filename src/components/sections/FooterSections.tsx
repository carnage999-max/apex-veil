"use client";

import Image from "next/image";
import { Youtube, Facebook, Instagram } from "lucide-react";

// Media Section Removed

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-black border-t border-steel/20 relative overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <div className="max-w-xl w-full">
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/apex-veil-logo.png"
                            alt="Apex Veil Logo"
                            width={160}
                            height={160}
                            className="w-40 h-auto object-contain brightness-125 scale-125"
                        />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mb-12">Base of Operations</h2>

                    <div className="grid grid-cols-1 gap-12 mb-16">
                        <div>
                            <h4 className="text-secondary text-xs font-mono uppercase mb-4 tracking-widest">Office Location</h4>
                            <div className="text-zinc-400 space-y-1">
                                <p className="text-lg text-white font-bebas tracking-wide">Apex Veil® Drone Technology</p>
                                <p>PO Box 52</p>
                                <p>Detroit, ME 04929</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-secondary text-xs font-mono uppercase mb-4 tracking-widest">Contact Us</h4>
                            <div className="text-zinc-400 space-y-1">
                                <p>Email: <a href="mailto:contact@apexveil.com" className="hover:text-secondary border-b border-transparent hover:border-secondary transition-all">contact@apexveil.com</a></p>
                                <p>Phone: <span className="text-white font-mono tracking-tighter">207-947-1999</span></p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-secondary text-xs font-mono uppercase mb-4 tracking-widest">Follow Our Signals</h4>
                            <div className="flex gap-4 justify-center">
                                <a href="#" className="p-3 border border-zinc-800 hover:border-secondary text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1">
                                    <Youtube className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 border border-zinc-800 hover:border-secondary text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1 group">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="#" className="p-3 border border-zinc-800 hover:border-secondary text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 border border-zinc-800 hover:border-secondary text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-zinc-900 text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
                        <p className="mb-4">&copy; {new Date().getFullYear()} APEX VEIL. Authorized Access Only.</p>
                        <div className="flex gap-8 justify-center">
                            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-secondary transition-colors">Terms of Engagement</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
