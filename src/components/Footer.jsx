import { TrendingUp, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: ['Stratégie d\'Entreprise', 'Opérations', 'Transformation Digitale', 'Gestion du Changement'],
    },
    {
      title: 'Entreprise',
      links: ['À Propos', 'Notre Équipe', 'Carrières', 'Actualités'],
    },
    {
      title: 'Ressources',
      links: ['Blog', 'Études de Cas', 'Livres Blancs', 'Contact'],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-400 rounded-lg opacity-20 blur-sm"></div>
                <TrendingUp className="h-7 w-7 md:h-8 md:w-8 text-primary-400 relative" strokeWidth={2.5} />
              </div>
              <span className="text-xl md:text-2xl font-bold">Apex Consulting</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              Accompagner les entreprises algériennes vers l'excellence à travers le conseil stratégique et des solutions innovantes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-gradient-primary transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-base md:text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © 2025 Apex Consulting. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Conditions d'Utilisation
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Politique de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
