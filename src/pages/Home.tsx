import Hero from "../components/Hero";
import CareerHighlights from "../components/CareerHighlights";
import MbiaConnect from "../components/MbiaConnect";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="bg-brand-bg relative z-0">
      <Hero />
      <div className="relative z-10">
        <CareerHighlights />
        <MbiaConnect />
        <Partners />
        <Footer />
      </div>
    </main>
  );
}