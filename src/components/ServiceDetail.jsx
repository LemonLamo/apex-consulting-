import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

const ServiceDetail = ({ service, onClose }) => {
  const benefits = [
    'Analyse approfondie de votre situation actuelle',
    'Stratégie personnalisée basée sur vos objectifs',
    'Accompagnement par des experts certifiés',
    'Suivi régulier et ajustements en temps réel',
    'Formation de vos équipes',
    'Mesure des résultats et ROI'
  ];

  const process = [
    {
      step: '01',
      title: 'Diagnostic',
      description: 'Analyse complète de vos besoins et défis'
    },
    {
      step: '02',
      title: 'Stratégie',
      description: 'Élaboration d\'un plan d\'action sur mesure'
    },
    {
      step: '03',
      title: 'Mise en œuvre',
      description: 'Implémentation avec votre équipe'
    },
    {
      step: '04',
      title: 'Optimisation',
      description: 'Suivi et amélioration continue'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-elegant-lg">
          {/* Header */}
          <div className="relative h-64 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-t-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative h-full flex flex-col justify-between p-8">
              <button
                onClick={onClose}
                className="self-start bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                Retour
              </button>
              <div>
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl w-fit mb-4">
                  <service.icon className="h-10 w-10 text-white" strokeWidth={2} />
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">{service.title}</h1>
                <p className="text-white/90 text-lg">{service.description}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Description détaillée */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vue d'ensemble</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Notre service de {service.title.toLowerCase()} est conçu pour aider les entreprises algériennes à naviguer 
                dans un environnement commercial en constante évolution. Nous combinons expertise locale et 
                meilleures pratiques internationales pour livrer des résultats mesurables.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Avec plus de 8 ans d'expérience dans le secteur, notre équipe de consultants certifiés 
                vous accompagne à chaque étape de votre transformation.
              </p>
            </section>

            {/* Avantages */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce que vous obtenez</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="h-6 w-6 text-success-500 shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Processus */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre processus</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à démarrer ?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment 
                nous pouvons vous aider à atteindre vos objectifs.
              </p>
              <a href="#contact">
                <button 
                  onClick={onClose}
                  className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-elegant-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  Demander une consultation
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
