import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import WhySection from "@/components/WhySection";
import CardsSection from "@/components/CardsSection";
import FAQSection from "@/components/FAQSection";
import StartSection from "@/components/StartSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <VideoSection />
        <WhySection />
        <CardsSection />
        <FAQSection />
        <StartSection />
      </main>
      <Footer />
    </>
  );
}
