import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComingSoonModal from "@/components/ComingSoonModal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <ComingSoonModal />
      <Footer/>
    </main>
  );
}
