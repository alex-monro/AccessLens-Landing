import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import CardsSection from "@/components/CardsSection";
import DownloadSection from "@/components/DownloadSection";
import StartSection from "@/components/StartSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <VideoSection />
        <CardsSection />
        <DownloadSection />
        <StartSection />
      </main>
      <Footer />
    </>
  );
}
