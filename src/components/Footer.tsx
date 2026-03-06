import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-brand-text font-sans border-t border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center mb-6">
              <span className="text-white font-heading font-bold text-xl tracking-tighter">SM</span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-6 font-light">
              Stéphane Mbia, footballeur international camerounais et entrepreneur. Dédier l'expérience du très haut niveau à vos projets sportifs, immobiliers et philanthropiques.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-brand-muted">
              <a href="#" className="hover:text-brand-accent transition-colors p-2 -ml-2">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors p-2">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors p-2">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors p-2">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-1 flex flex-col">
            <h4 className="font-heading font-bold text-lg mb-6 tracking-tight">Navigation</h4>
            <nav className="flex flex-col gap-4 text-brand-muted text-sm">
              <Link to="/" className="hover:text-brand-accent transition-colors w-fit">Accueil</Link>
              <Link to="/parcours" className="hover:text-brand-accent transition-colors w-fit">Parcours & Palmarès</Link>
              <Link to="/consulting" className="hover:text-brand-accent transition-colors w-fit">SM Consulting</Link>
              <Link to="/fondation" className="hover:text-brand-accent transition-colors w-fit">La Fondation</Link>
              <Link to="/actualites" className="hover:text-brand-accent transition-colors w-fit">Actualités</Link>
            </nav>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1 flex flex-col">
            <h4 className="font-heading font-bold text-lg mb-6 tracking-tight">Services</h4>
            <nav className="flex flex-col gap-4 text-brand-muted text-sm">
              <a href="#" className="hover:text-brand-accent transition-colors w-fit">Mbia Connect App</a>
              <a href="#" className="hover:text-brand-accent transition-colors w-fit">Masterclass Business</a>
              <a href="#" className="hover:text-brand-accent transition-colors w-fit">Coaching Privé</a>
              <a href="#" className="hover:text-brand-accent transition-colors w-fit">Partenariats B2B</a>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1 flex flex-col">
            <h4 className="font-heading font-bold text-lg mb-6 tracking-tight">Restez Informé</h4>
            <p className="text-brand-muted text-sm leading-relaxed mb-6 font-light">
              Abonnez-vous à la newsletter pour recevoir en avant-première les actualités, annonces et opportunités de networking.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-black/10 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-sm"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-3 bg-black text-white hover:bg-black/80 rounded-xl font-medium text-sm transition-colors text-center"
              >
                S'abonner
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/5 text-xs text-brand-muted/70 gap-4">
          <p>© {currentYear} Stéphane Mbia. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-accent transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
