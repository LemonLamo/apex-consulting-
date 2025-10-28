import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'contact@apexconsulting.dz',
      link: 'mailto:contact@apexconsulting.dz'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      detail: '+213 (0) 23 45 67 89',
      link: 'tel:+213023456789'
    },
    {
      icon: MapPin,
      title: 'Bureau',
      detail: 'Cité Bir Mourad Raïs\nAlger, Algérie 16030',
      link: 'https://maps.google.com'
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Merci pour votre message ! Nous vous répondrons dans les 24 heures.');
    e.target.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Contactez-nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Commençons la Conversation
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Une question ou prêt à démarrer ? Contactez notre équipe et nous vous répondrons dans les 24 heures.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.title === 'Bureau' ? '_blank' : '_self'}
                  rel={info.title === 'Bureau' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="bg-primary-100 p-3 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line text-sm md:text-base">{info.detail}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 p-6 md:p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Votre Nom"
                  required
                  className="w-full px-4 py-3 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm md:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Votre Email"
                  required
                  className="w-full px-4 py-3 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm md:text-base"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Nom de l'Entreprise"
                  className="w-full px-4 py-3 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm md:text-base"
                />
              </div>
              <div>
                <select
                  required
                  className="w-full px-4 py-3 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm md:text-base"
                >
                  <option value="">Sélectionner un Service</option>
                  <option value="strategy">Stratégie d'Entreprise</option>
                  <option value="operations">Optimisation des Opérations</option>
                  <option value="digital">Transformation Digitale</option>
                  <option value="change">Gestion du Changement</option>
                  <option value="analytics">Analyse de Données</option>
                  <option value="risk">Gestion des Risques</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Parlez-nous de votre projet"
                  rows="4"
                  required
                  className="w-full px-4 py-3 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none text-sm md:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-white px-8 py-3 md:py-4 rounded-lg font-semibold hover:shadow-elegant transition-all duration-300 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
