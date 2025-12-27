import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SystemSections } from "@/components/SystemSections";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <SystemSections />
      <Footer />
    </main>
  );
}
