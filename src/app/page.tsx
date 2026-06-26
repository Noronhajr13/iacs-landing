import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AreasStrip from "@/components/AreasStrip";
import Sobre from "@/components/Sobre";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <AreasStrip />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}
