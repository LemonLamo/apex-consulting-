import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: 'Méthodologie Éprouvée',
      description: 'Des cadres testés et validés qui produisent des résultats',
    },
    {
      title: 'Équipe Experte',
      description: 'Des professionnels chevronnés du marché algérien',
    },
    {
      title: 'Orienté Client',
      description: 'Votre succès est notre priorité absolue',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary-300 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-accent-300 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop"
                alt="Our team"
                className="rounded-2xl shadow-elegant-lg w-full"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent-300 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-400 rounded-full blur-2xl opacity-50"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-gradient-to-br from-accent-500 to-accent-600 text-white p-6 md:p-8 rounded-2xl shadow-warm">
              <h3 className="text-4xl md:text-5xl font-bold mb-1">8+</h3>
              <p className="text-sm opacity-90">Ans d'Excellence</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              À Propos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Stimuler le Succès par le Partenariat Stratégique
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
              Depuis 2017, Apex Consulting est à l'avant-garde de la transformation des entreprises en Algérie, aidant
              les organisations à naviguer dans la complexité et à obtenir des résultats extraordinaires.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Notre équipe de consultants expérimentés apporte une expertise approfondie du marché algérien, une pensée
              innovante et un engagement sans relâche envers le succès de nos clients.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white hover:bg-primary-50 transition-all duration-300 border border-primary-100"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0 mt-1" strokeWidth={2.5} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
