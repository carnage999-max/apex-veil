
"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
        const baseStyles =
            "relative inline-flex items-center justify-center font-bold tracking-widest text-sm uppercase transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";

        const variants = {
            primary:
                "bg-secondary text-black hover:bg-white hover:text-black border border-transparent shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)]",
            secondary:
                "bg-accent text-black hover:bg-white hover:text-black border border-transparent shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]",
            outline:
                "bg-transparent text-secondary border border-secondary hover:bg-secondary/10 hover:shadow-[0_0_10px_rgba(0,255,65,0.2)]",
            ghost: "bg-transparent text-secondary hover:text-white hover:bg-secondary/10",
            destructive: "bg-red-600 text-white hover:bg-red-700",
        };

        const sizes = {
            sm: "h-8 px-4 text-xs",
            md: "h-12 px-6",
            lg: "h-14 px-8 text-base",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {/* Tactical Corner Cuts (Pseudo-elements could be used, but clip-path is easier) */}
                <span className="absolute inset-0 border border-current opacity-20 pointer-events-none" />

                {icon && <span className="mr-2">{icon}</span>}
                <span className="relative z-10 flex items-center gap-2 font-bebas tracking-wide">
                    {children}
                </span>

                {/* Tactical decorations */}
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50" />
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50" />
            </motion.button>
        );
    }
);
Button.displayName = "Button";
