import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import CardsSection from "@/components/CardsSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VideoSection />
      <CardsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
