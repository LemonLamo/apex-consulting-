import { motion } from 'framer-motion';
import { TrendingUp, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const handleLinkClick = (e, sectionId) => {
    if (sectionId) {
      e.preventDefault();
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Stratégie d\'Entreprise', href: '#services' },
        { name: 'Opérations', href: '#services' },
        { name: 'Transformation Digitale', href: '#services' },
        { name: 'Gestion du Changement', href: '#services' }
      ],
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À Propos', href: '#about' },
        { name: 'Notre Équipe', href: '#about' },
        { name: 'Carrières', href: '#about' },
        { name: 'Actualités', href: '#about' }
      ],
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Blog', href: '#about' },
        { name: 'Études de Cas', href: '#testimonials' },
        { name: 'Livres Blancs', href: '#about' },
        { name: 'Contact', href: '#contact' }
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@apexconsulting.dz', href: 'mailto:contact@apexconsulting.dz' },
    { icon: Phone, text: '+213 (0) 23 45 67 89', href: 'tel:+213234567890' },
    { icon: MapPin, text: 'Alger, Algérie', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Animated geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40 L40 0 L80 40 L40 80 Z" fill="none" stroke="rgba(20, 184, 166, 0.6)" strokeWidth="1"/>
              <circle cx="40" cy="40" r="2" fill="rgba(249, 115, 22, 0.6)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[10%] w-96 h-96 bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-[15%] w-80 h-80 bg-accent-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content */}
        <div className="pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-primary-400 rounded-xl opacity-20 blur-md"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-xl">
                    <TrendingUp className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Apex Consulting
                </span>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                Accompagner les entreprises vers l'excellence.
              </p>

              {/* Social Links - Enhanced */}
              <div className="flex gap-3 mb-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity" />
                    <div className="relative bg-gray-800 p-2 rounded-lg group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300">
                      <social.icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Contact Info - Compact */}
              <div className="space-y-2">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group text-xs"
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links - Enhanced */}
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="font-semibold text-sm mb-3 relative inline-block">
                  {section.title}
                  <motion.div 
                    className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 3 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer group inline-flex items-center gap-1.5 text-sm"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter Section - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-4"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h4 className="font-semibold text-sm mb-3 relative inline-block">
                  Newsletter
                  <motion.div 
                    className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </h4>
                <p className="text-gray-400 mb-3 text-xs">
                  Restez informé de nos dernières actualités et insights.
                </p>
                <div className="flex gap-2 mb-4">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-sm transition-colors placeholder:text-gray-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 whitespace-nowrap"
                  >
                    S'abonner
                  </motion.button>
                </div>
                
                {/* Trust Badges - Inline */}
                <div className="flex items-center gap-3">
                  <p className="text-xs text-gray-500">Certifié:</p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-gray-800/50 rounded border border-gray-700/30 text-xs">ISO 9001</div>
                    <div className="px-3 py-1 bg-gray-800/50 rounded border border-gray-700/30 text-xs">Pro</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Enhanced */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 py-5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Apex Consulting. Tous droits réservés. Fait avec{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block text-red-500"
              >
                ♥
              </motion.span>
              {' '}en Algérie
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Confidentialité
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Conditions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Cookies
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
