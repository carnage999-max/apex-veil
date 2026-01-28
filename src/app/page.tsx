
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Technology } from "@/components/sections/Technology";
import { Specs } from "@/components/sections/Specs";
import { RequestDemo } from "@/components/sections/RequestDemo";
import { UseCases } from "@/components/sections/UseCases";
import { Contact } from "@/components/sections/FooterSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-secondary selection:text-black">
      <Header />
      <Hero />
      <Technology />
      <Specs />
      <RequestDemo />
      <UseCases />
      <Contact />

      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
    </main>
  );
}
