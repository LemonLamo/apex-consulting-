import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Planifiez une consultation gratuite avec nos experts et découvrez comment nous pouvons vous aider à atteindre vos objectifs stratégiques.
          </p>
          <a href="#contact">
            <button className="bg-white text-primary-700 px-8 md:px-10 py-4 md:py-5 rounded-lg font-bold text-base md:text-lg hover:bg-gray-50 transition-all duration-300 shadow-elegant-lg inline-flex items-center gap-3 hover:scale-105">
              Planifier une Consultation Gratuite
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
