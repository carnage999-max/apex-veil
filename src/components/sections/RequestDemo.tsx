
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Lock, FileUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    organization: z.string().min(2, "Organization is required"),
    phone: z.string().min(10, "Valid phone number required"),
    email: z.string().email("Invalid email address"),
    useCase: z.string().min(10, "Please describe the detailed use case"),
    location: z.string().min(2, "Deployment location required"),
});

type FormValues = z.infer<typeof formSchema>;

export function RequestDemo() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setError(null);

        try {
            // const token = await executeRecaptcha("demo_request");

            const response = await fetch("/api/request-demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, captcha: null }),
            });

            if (!response.ok) {
                const resData = await response.json();
                throw new Error(resData.message || "Submission failed");
            }

            setIsSuccess(true);
            reset();
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="request-demo" className="py-32 bg-zinc-900 border-t border-b border-steel/20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                <div className="text-[200px] font-bebas text-black leading-none select-none">DEMO</div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">Request Secure Demonstration</h2>
                    <p className="text-zinc-50 max-w-2xl mx-auto">
                        Request a secure demonstration of Apex Veil® technology. All submissions are reviewed by our technical operations team.
                    </p>
                </div>

                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-900/10 border border-green-500/30 p-12 text-center rounded-sm"
                    >
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Lock className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bebas text-white mb-2">Request Encrypted & Logged</h3>
                        <p className="text-zinc-50">Our operations team will initiate secure contact within 24 hours.</p>
                        <Button className="mt-8" variant="outline" onClick={() => setIsSuccess(false)}>
                            Submit Another Request
                        </Button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-black/50 border border-steel/30 p-8 md:p-12 relative">
                        {/* Tactical Corner Markers */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-zinc-300">Full Name</label>
                                <input
                                    {...register("name")}
                                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-secondary p-3 text-white outline-none transition-colors"
                                    placeholder="Full Name"
                                />
                                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-zinc-300">Organization / Agency</label>
                                <input
                                    {...register("organization")}
                                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-secondary p-3 text-white outline-none transition-colors"
                                    placeholder="Organization / Agency"
                                />
                                {errors.organization && <span className="text-red-500 text-xs">{errors.organization.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-zinc-300">Phone Number</label>
                                <input
                                    {...register("phone")}
                                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-secondary p-3 text-white outline-none transition-colors"
                                    placeholder="Phone Number"
                                />
                                {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-zinc-300">Email Address</label>
                                <input
                                    {...register("email")}
                                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-secondary p-3 text-white outline-none transition-colors"
                                    placeholder="Email Address"
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-zinc-300">Intended Use Case</label>
                                <textarea
                                    {...register("useCase")}
                                    rows={4}
                                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-secondary p-3 text-white outline-none transition-colors resize-none"
                                    placeholder="Intended Use Case"
                                />
                                {errors.useCase && <span className="text-red-500 text-xs">{errors.useCase.message}</span>}
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-zinc-300">Deployment Location</label>
                                    <input
                                        {...register("location")}
                                        className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-secondary p-3 text-white outline-none transition-colors"
                                        placeholder="Deployment Location"
                                    />
                                    {errors.location && <span className="text-red-500 text-xs">{errors.location.message}</span>}
                                </div>

                                <div className="border border-dashed border-zinc-700 p-4 flex items-center justify-between group cursor-pointer hover:bg-zinc-900/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <FileUp className="w-5 h-5 text-zinc-300 group-hover:text-secondary" />
                                        <span className="text-sm text-zinc-50">Upload NDA (Optional)</span>
                                    </div>
                                    <span className="text-[10px] text-zinc-400 bg-black px-2 py-1 border border-zinc-800">PDF/DOCX</span>
                                </div>
                            </div>
                        </div>


                        {error && (
                            <div className="mb-6 bg-red-900/20 border border-red-500/50 p-4 text-red-200 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 text-zinc-300 text-xs">
                                <Lock className="w-3 h-3" />
                                <span>AES-256 ENCRYPTED SUBMISSION</span>
                            </div>
                            <Button
                                variant="primary"
                                className="w-full md:w-auto min-w-[200px]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <Loader2 className="animate-spin w-4 h-4" /> : "Initiate Request"}
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
