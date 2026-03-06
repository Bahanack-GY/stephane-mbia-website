import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "../assets/hero.mp4"; // Using this as placeholder until exact clips are added.
import { ChevronRight } from "lucide-react";

import cmLogo from "../assets/logos/cm.png";
import rennesLogo from "../assets/logos/rennes.png";
import omLogo from "../assets/logos/om.png";
import sevillaLogo from "../assets/logos/sevilla.png";
import trabzonLogo from "../assets/logos/trabzon.svg";

type ClubHighlight = {
  id: string;
  name: string;
  videoSrc: string;
  watermark: string;
  logoSrc: string;
};

const CLUBS: ClubHighlight[] = [
  {
    id: "cm",
    name: "CAMEROUN",
    videoSrc: heroVideo, // Placeholders
    watermark: "LIONS INDOMPTABLES",
    logoSrc: cmLogo,
  },
  {
    id: "rennes",
    name: "STADE RENNAIS",
    videoSrc: heroVideo,
    watermark: "SRFC",
    logoSrc: rennesLogo,
  },
  {
    id: "om",
    name: "OLYMPIQUE DE MARSEILLE",
    videoSrc: heroVideo,
    watermark: "OM",
    logoSrc: omLogo,
  },
  {
    id: "sevilla",
    name: "SEVILLA FC",
    videoSrc: heroVideo,
    watermark: "SEVILLA",
    logoSrc: sevillaLogo,
  },
  {
    id: "trabzon",
    name: "TRABZONSPOR",
    videoSrc: heroVideo,
    watermark: "TRABZONSPOR",
    logoSrc: trabzonLogo,
  },
];

const HIGHLIGHT_DURATION_MS = 12000;

export default function CareerHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advance logic
  useEffect(() => {
    const startTime = Date.now();
    let animationFrameId: number;

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed / HIGHLIGHT_DURATION_MS) * 100;

      if (currentProgress < 100) {
        setProgress(currentProgress);
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        // Time is up, move to next club
        setProgress(0);
        setActiveIndex((prev) => (prev + 1) % CLUBS.length);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeIndex]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setProgress(0); // Reset progress timer for manual select
  };

  const currentClub = CLUBS[activeIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
      
      {/* Full-screen Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-brand-bg">
        <AnimatePresence>
          <motion.video
            key={currentClub.id + "-bg"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src={currentClub.videoSrc} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
        {/* Frosted Glass Overlay to maintain Light Mode aesthetic */}
        <div className="absolute inset-0 bg-brand-bg/70 backdrop-blur-[30px] border-t border-white/20"></div>
      </div>

      {/* Background Watermark - Transparent Glass Effect */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none z-0 overflow-hidden">
        <AnimatePresence>
          <motion.img 
            key={currentClub.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            src={currentClub.logoSrc}
            alt={`${currentClub.name} Watermark`}
            className="absolute w-[120vw] md:w-[60vw] lg:w-[50vw] max-w-[1000px] h-auto object-contain grayscale drop-shadow-2xl mix-blend-luminosity -translate-x-1/4 md:-translate-x-[20%]"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between pt-24 pb-12 px-8 max-w-[100vw] mx-auto w-full">
        
        {/* Top Header */}
        <div className="w-full">
          <h3 className="text-xl font-bold tracking-[0.2em] text-brand-accent uppercase pl-4 md:pl-12">
            CAREER HIGHLIGHTS
          </h3>
        </div>

        {/* Video Player Area */}
        <div className="w-full flex justify-end flex-1 items-center md:pr-12 md:pl-[30%]">
          <div className="relative w-full aspect-video max-h-[60vh] rounded-xl overflow-hidden shadow-2xl bg-black">
            <AnimatePresence>
              <motion.video
                key={currentClub.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                loop
              >
                <source src={currentClub.videoSrc} type="video/mp4" />
              </motion.video>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Timeline Control Area */}
        <div className="w-full px-4 md:px-12 mt-8">
          <div className="flex justify-between items-end mb-4">
            <AnimatePresence mode="wait">
              <motion.h4 
                key={currentClub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-heading font-medium text-brand-text uppercase tracking-wide"
              >
                {currentClub.name}
              </motion.h4>
            </AnimatePresence>
            
            {/* Optional manual advancement controls if desired */}
            <button 
              onClick={() => handleManualSelect((activeIndex + 1) % CLUBS.length)}
              className="p-2  rounded-full bg-black/5 transition-colors text-brand-text cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress Bars */}
          <div className="w-full flex gap-2 h-1.5 md:h-2">
            {CLUBS.map((_, idx) => {
              // Logic for individual bar fills based on sequence
              let barProgress = 0;
              if (idx < activeIndex) barProgress = 100; // Passed bars are full
              else if (idx === activeIndex) barProgress = progress; // Current bar fills over 12s

              return (
                <div 
                  key={idx} 
                  onClick={() => handleManualSelect(idx)}
                  className="flex-1 bg-black/10 rounded-full overflow-hidden cursor-pointer hover:bg-black/20 transition-colors"
                >
                  <div 
                    className="h-full bg-brand-accent transition-all duration-75 ease-linear"
                    style={{ width: `${barProgress}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
