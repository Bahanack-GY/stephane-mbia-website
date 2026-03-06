import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import phoneImg from "../assets/phone.png";

export default function MbiaConnect() {
  return (
    <section className="relative w-full py-32 bg-white text-brand-text font-sans overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Content Area: Text & CTAs */}
        <div className="flex flex-col items-start space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-bold tracking-[0.3em] text-brand-accent uppercase mb-4">
              Restez Connecté. Partout.
            </h3>
            <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight leading-tight">
              L'expérience <br />
              <span className="italic text-brand-accent">Mbia Connect</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-muted font-light leading-relaxed max-w-lg"
          >
            Téléchargez l'application officielle pour interagir directement avec Stéphane Mbia. 
            Suivez ses actualités, sollicitez son expertise en immobilier ou en football, et accédez à 
            un réseau exclusif en un seul clic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
          >
            {/* App Store Button */}
            <a 
              href="#" 
              className="flex items-center justify-center sm:justify-start gap-3 bg-black text-white hover:bg-black/80 transition-colors px-6 py-3 rounded-2xl w-full sm:w-auto min-w-[200px]"
            >
              <FaApple size={32} />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Download on the</span>
                <span className="text-lg font-bold leading-tight">App Store</span>
              </div>
            </a>

            {/* Google Play Button */}
            <a 
              href="#" 
              className="flex items-center justify-center sm:justify-start gap-3 glass hover:bg-black/5 transition-colors px-6 py-3 rounded-2xl w-full sm:w-auto border border-black/10 min-w-[200px]"
            >
              <FaGooglePlay size={26} className="text-brand-text" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">GET IT ON</span>
                <span className="text-lg font-bold leading-tight">Google Play</span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right Content Area: Phone Mockup Visual */}
        <div className="relative flex justify-center lg:justify-end items-center h-full w-full perspective-[1000px]">
          
          {/* Abstract decorative background blurs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px]"></div>
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

          <motion.div
            initial={{ opacity: 0, rotateY: 15, x: 50 }}
            whileInView={{ opacity: 1, rotateY: -10, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[340px] md:w-[420px] lg:w-[480px] xl:w-[520px] flex justify-center items-center z-10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Phone Image including the frame */}
            <img 
              src={phoneImg} 
              alt="Mbia Connect App on Phone" 
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] object-contain select-none pointer-events-none" 
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}
