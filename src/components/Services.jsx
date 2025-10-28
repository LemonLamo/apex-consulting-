import { motion } from 'framer-motion';
import { TrendingUp, Settings, Rocket, Users, Database, Shield } from 'lucide-react';
import { useState } from 'react';
import ServiceDetail from './ServiceDetail';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const services = [
    {
      icon: TrendingUp,
      title: 'Stratégie d\'Entreprise',
      description: 'Développez des stratégies gagnantes adaptées au marché algérien et aux réalités économiques locales.',
    },
    {
      icon: Settings,
      title: 'Optimisation des Opérations',
      description: 'Rationalisez vos processus, réduisez les coûts et améliorez l\'efficacité opérationnelle de votre entreprise.',
    },
    {
      icon: Rocket,
      title: 'Transformation Digitale',
      description: 'Accompagnement dans la digitalisation de vos activités et l\'adoption des nouvelles technologies.',
    },
    {
      icon: Users,
      title: 'Gestion du Changement',
      description: 'Conduisez la transformation organisationnelle avec des programmes structurés et efficaces.',
    },
    {
      icon: Database,
      title: 'Analyse de Données',
      description: 'Transformez vos données en insights exploitables avec des solutions d\'analyse avancées.',
    },
    {
      icon: Shield,
      title: 'Gestion des Risques',
      description: 'Identifiez, évaluez et atténuez les risques commerciaux avec des cadres de gestion complets.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
          >
            Nos Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mt-2 mb-4"
          >
            Des Solutions Complètes pour Chaque Défi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            De la stratégie à l'exécution, nous fournissons des services de conseil personnalisés adaptés aux besoins uniques de votre entreprise.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-6 md:p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-primary-300 hover:shadow-elegant-lg transition-all duration-300 group"
            >
              {/* Color accent bar */}
              <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-primary rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Icon */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl w-fit mb-6 group-hover:shadow-lg transition-all duration-300">
                <service.icon className="h-7 w-7 md:h-8 md:w-8 text-primary-600" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">{service.description}</p>
              <a href="#contact" className="text-primary-600 font-semibold inline-flex items-center group/link hover:gap-2 transition-all text-sm md:text-base">
                En savoir plus
                <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
