import { motion } from "framer-motion";
import { 
  Aperture, Hexagon, Triangle, Circle, Square, 
  Activity, Anchor, Award, Box, Cloud, 
  Compass, Cpu, Feather, Globe, Layers 
} from "lucide-react";

// Using premium abstract icons to represent brands until actual partner logos are provided
const PARTNERS = [
  { id: 1, name: "APEX", icon: Triangle },
  { id: 2, name: "HEXA", icon: Hexagon },
  { id: 3, name: "NOVA", icon: Aperture },
  { id: 4, name: "GLOBAL", icon: Globe },
  { id: 5, name: "STRATUM", icon: Layers },
  { id: 6, name: "AURA", icon: Cloud },
  { id: 7, name: "VANGUARD", icon: Anchor },
  { id: 8, name: "PULSE", icon: Activity },
  { id: 9, name: "QUANTUM", icon: Cpu },
  { id: 10, name: "MERIT", icon: Award },
  { id: 11, name: "OMNI", icon: Circle },
  { id: 12, name: "FORGE", icon: Square },
  { id: 13, name: "NEXUS", icon: Box },
  { id: 14, name: "HORIZON", icon: Compass },
  { id: 15, name: "AERO", icon: Feather },
];

export default function Partners() {
  return (
    <section className="relative w-full py-32 bg-brand-bg text-brand-text font-sans overflow-hidden z-10 flex flex-col items-center">
      
      {/* Decorative center glow adapted for Light Mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="relative z-10 mb-20 text-center px-6">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-bold tracking-[0.3em] text-brand-muted uppercase"
        >
          JE COLLABORE AVEC DES MARQUES EN LESQUELLES JE <span className="text-brand-accent text-black font-extrabold">CROIS</span>
        </motion.h3>
      </div>

      {/* Grid Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-black/5">
          {PARTNERS.map((partner, index) => {
            const Icon = partner.icon;
            
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-4/3 flex flex-col items-center justify-center border-r border-b border-black/5 hover:bg-black/2 transition-colors duration-300 cursor-pointer overflow-hidden"
              >
                {/* Subtle hover accent line at the bottom of the cell */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                {/* Brand Logo / Icon */}
                <div className="text-black/30 group-hover:text-black/80 transition-colors duration-300 mb-3">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                
                {/* Brand Name */}
                <span className="font-heading font-medium tracking-widest text-xs text-black/40 group-hover:text-black/80 transition-colors duration-300">
                  {partner.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
