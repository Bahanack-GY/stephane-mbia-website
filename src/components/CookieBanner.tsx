import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { BiCookie } from "react-icons/bi";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage after initial render to avoid hydration mismatch and block the thread
    const hasConsented = localStorage.getItem("mbia_cookie_consent");
    
    // Add a slight delay before showing the banner for a smoother user experience
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // 1.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("mbia_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("mbia_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-sm z-100"
        >
          {/* Main Container */}
          <div className="bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] rounded-2xl p-6 relative overflow-hidden">
            
            {/* Soft background glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none"></div>

            {/* Header / Icon */}
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <BiCookie size={22} />
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-text tracking-tight">
                  Vos préférences
                </h3>
              </div>
              <button 
                onClick={handleDecline}
                className="text-black/30 hover:text-black/80 transition-colors p-1 rounded-full hover:bg-black/5"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Text Content */}
            <p className="text-brand-muted text-sm leading-relaxed mb-6 font-light relative z-10">
              Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic de notre site et personnaliser le contenu. En cliquant sur "Accepter", vous consentez à l'utilisation de tous les cookies.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 relative z-10">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-black text-white hover:bg-black/80 font-medium py-2.5 px-4 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-black/10 hover:shadow-black/20"
              >
                Accepter
              </button>
              <button 
                onClick={handleDecline}
                className="flex-1 bg-transparent border border-black/10 hover:bg-black/5 text-brand-text font-medium py-2.5 px-4 rounded-xl text-sm transition-colors duration-200"
              >
                Refuser
              </button>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
