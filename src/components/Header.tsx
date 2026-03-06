import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Parcours & Palmarès", href: "/parcours" },
  { label: "SM Consulting", href: "/consulting" },
  { label: "La Fondation", href: "/fondation" },
  { label: "Actualités", href: "/actualites" },
];

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show header when user has scrolled more than 80% of the first viewport height
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="mx-4 mt-4 px-6 py-3 rounded-full bg-black backdrop-blur-[2px] flex items-center justify-between">
            {/* Logo / Name */}
            <Link to="/" className="font-heading text-xl font-medium text-white tracking-tight">
              S.<span className="text-brand-accent italic">Mbia</span>
            </Link>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-white hover:text-brand-accent transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 bg-brand-accent hover:bg-brand-accent-light text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(202,138,4,0.3)] hover:-translate-y-0.5"
            >
              Me Contacter
            </Link>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
