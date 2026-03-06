import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import heroVideo from "../assets/hero.mp4";
import portraitImage from "../assets/portraits/2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // The shared timeline logic (applies to both desktop and mobile)
    const setupTimeline = (isMobile: boolean) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",     
          end: "+=400%",        // Increased scrub distance to accommodate 5 text changes
          pin: true,            
          scrub: 1,             
        }
      });

      // Fade out original content
      tl.to([contentRef.current, videoRef.current], {
        opacity: 0,
        y: -50,
        duration: 0.5,
      }, 0);

      // Reveal portrait image
      tl.to(imageRef.current, {
        y: "0%",               
        scale: 0.95,           
        borderRadius: "16px",  
        duration: 1, // Ends at 1.0
        ease: "power2.inOut"
      }, 0);

      // Text Sequence
      // Step 0: stephane MBIA
      tl.fromTo(".scroll-text-0", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0.2);
      
      // Step 1: Exit Step 0, Enter Football (Left) AND Immobilier (Right)
      tl.to(".scroll-text-0", { opacity: 0, y: -50, duration: 0.5, ease: "power2.in" }, 1.5);
      
      // If mobile, start fading out the image here so texts can be read clearly
      if (isMobile) {
        tl.to(imageRef.current, { opacity: 0.1, duration: 0.5, ease: "power2.inOut" }, 1.5);
      }

      tl.fromTo(".scroll-text-1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 1.5);
      tl.fromTo(".scroll-text-2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 1.5);

      // Step 2: Left Side Swap (Football OUT -> Philanthropie IN)
      tl.to(".scroll-text-1", { opacity: 0, y: -50, duration: 0.5, ease: "power2.in" }, 2.5);
      tl.fromTo(".scroll-text-3", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 2.5);

      // Step 3: Right Side Swap (Immobilier OUT -> Conseil IN)
      tl.to(".scroll-text-2", { opacity: 0, y: -50, duration: 0.5, ease: "power2.in" }, 3.5);
      tl.fromTo(".scroll-text-4", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 3.5);

      return tl;
    };

    // Desktop
    mm.add("(min-width: 769px)", () => {
      setupTimeline(false);
    });

    // Mobile
    mm.add("(max-width: 768px)", () => {
      setupTimeline(true);
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden font-sans liquid-container flex items-center justify-center">
      {/* Video Background */}
      <div ref={videoRef} className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Light overlay to ensure text contrast over the video in Light Mode */}
        <div className="absolute inset-0 bg-brand-bg/60 backdrop-blur-[2px]"></div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">

        {/* Name / Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium mb-8 leading-[0.9] tracking-tight text-brand-text whitespace-nowrap"
        >
          stephane <br />
          <span className="block mt-2 text-brand-accent italic font-medium pr-8 relative z-10 text-glow">MBIA</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-brand-muted mb-12 font-light leading-relaxed"
        >
          Des terrains de football internationaux aux arènes du commerce mondial. Bâtir des entreprises, créer de l'impact et façonner l'avenir.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-accent hover:bg-brand-accent-light text-white font-medium text-lg rounded-full transition-all duration-300 ease-out cursor-pointer hover:shadow-[0_0_30px_rgba(202,138,4,0.4)] hover:-translate-y-1">
            <span>Explorer le Parcours</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 glass hover:bg-black/5 text-brand-text font-medium text-lg rounded-full transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1">
            <Play size={20} className="fill-brand-accent text-brand-accent group-hover:scale-110 transition-transform" />
            <span>Voir la Vidéo</span>
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator - we hide this when scrolling or let container pin handle it */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 pointer-events-none"
      >
         <span className="text-xs uppercase tracking-[0.3em] text-brand-muted font-medium">Défiler</span>
         <ChevronDown size={24} className="text-brand-accent animate-bounce" />
      </motion.div>

      {/* Portrait Image Overlay */}
      <div className="absolute z-30 bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden flex justify-center items-end pb-0">
        
        {/* Animated Background Texts Sequence */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Step 0: stephane MBIA */}
          <div className="scroll-text-0 absolute inset-0 flex items-center justify-between px-8 md:px-24 opacity-0 font-heading font-bold text-brand-text/10 tracking-tighter whitespace-nowrap">
            <span className="text-6xl md:text-[8rem] xl:text-[12rem]">stephane</span>
            <span className="text-6xl md:text-[8rem] xl:text-[12rem]">MBIA</span>
          </div>

          {/* Wrapper for the side content so it sits in the empty space next to the image */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 max-w-[100vw] mx-auto pt-12 md:pt-32">
            
            {/* LEFT SIDE TEXTS */}
            <div className="w-full md:w-1/3 max-w-sm relative h-[40vh] md:h-full flex items-center justify-center md:justify-start">
              {/* Step 1: FOOTBALL */}
              <div className="scroll-text-1 absolute opacity-0 text-center md:text-left bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none z-20">
                <h3 className="text-sm tracking-[0.3em] text-brand-accent uppercase mb-3 font-medium">01 — Carrière Sportive</h3>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-text mb-4 leading-tight">Légende <br className="hidden md:block"/><span className="italic">du Football</span></h2>
                <p className="text-brand-muted text-sm md:text-lg leading-relaxed font-light">
                  Ancien milieu redoutable et capitaine des Lions Indomptables. Double vainqueur de la Ligue Europa avec le FC Séville.
                </p>
              </div>

              {/* Step 3: PHILANTHROPIE */}
              <div className="scroll-text-3 absolute opacity-0 text-center md:text-left bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none z-20">
                <h3 className="text-sm tracking-[0.3em] text-brand-accent uppercase mb-3 font-medium">03 — Engagement</h3>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-text mb-4 leading-tight">Impact <br className="hidden md:block"/><span className="italic">Social</span></h2>
                <p className="text-brand-muted text-sm md:text-lg leading-relaxed font-light">
                  Une voix qui compte pour la jeunesse. Mbia s'investit activement pour l'éducation, l'équité sociale et le développement.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE TEXTS */}
            <div className="w-full md:w-1/3 max-w-sm relative h-[40vh] md:h-full flex items-center justify-center md:justify-end text-center md:text-right">
              {/* Step 2: IMMOBILIER & BTP */}
              <div className="scroll-text-2 absolute opacity-0 flex flex-col items-center md:items-end bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none z-20">
                <h3 className="text-sm tracking-[0.3em] text-brand-accent uppercase mb-3 font-medium">02 — Investissement</h3>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-text mb-4 leading-tight">Bâtir <br className="hidden md:block"/><span className="italic">l'Avenir</span></h2>
                <p className="text-brand-muted text-sm md:text-lg leading-relaxed font-light text-center md:text-right">
                  Investisseur foncier visionnaire. Il met son exigence du sport au service du développement de l'Immobilier et du secteur BTP.
                </p>
              </div>

              {/* Step 4: CONSEIL */}
              <div className="scroll-text-4 absolute opacity-0 flex flex-col items-center md:items-end bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none z-20">
                <h3 className="text-sm tracking-[0.3em] text-brand-accent uppercase mb-3 font-medium">04 — Expertise</h3>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-text mb-4 leading-tight">Conseil <br className="hidden md:block"/><span className="italic">Stratégique</span></h2>
                <p className="text-brand-muted text-sm md:text-lg leading-relaxed font-light text-center md:text-right">
                  Un pont entre l'industrie du sport et le monde des affaires. Il accompagne et conseille grâce à une vision globale.
                </p>
              </div>
            </div>

          </div>
        </div>

        <img
          ref={imageRef}
          src={portraitImage}
          alt="stephane Mbia Portrait"
          className="w-auto h-[90vh] object-cover object-top relative z-10"
          style={{
            transform: "translateY(100%) scale(0.8)", // start below viewport, slightly larger base
            transformOrigin: "bottom center",
            borderRadius: "40px" // round top corners initially
          }}
        />
      </div>
    </div>
  );
}
