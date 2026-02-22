import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureBreakfast from "@/components/SignatureBreakfast";
import Gallery from "@/components/Gallery";
import InfoHours from "@/components/InfoHours";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main aria-label="Hauptinhalt">
        <Hero />
        <SignatureBreakfast />
        <Gallery />
        <InfoHours />
        <CTABand />
        <Footer />
      </main>
    </>
  );
}
