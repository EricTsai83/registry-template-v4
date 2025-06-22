import { CTA } from "@/components/home/cta";
import { FAQ } from "@/components/home/faq";
import { Features } from "@/components/home/features";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Roadmap } from "@/components/home/roadmap";
import { ThemePresetSelector } from "@/components/home/theme-preset-selector";

export default function Home() {
  return (
    <div className="bg-background text-foreground flex min-h-[100dvh] flex-col items-center justify-items-center">
      <Header />
      <main className="w-full flex-1">
        <Hero />
        <ThemePresetSelector />
        <Features />
        <HowItWorks />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
