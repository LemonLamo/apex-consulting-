import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: '150+', label: 'Projets Réalisés' },
    { value: '95%', label: 'Satisfaction Client' },
    { value: '8+', label: 'Ans d\'Expérience' },
  ];

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-mesh">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full mb-6 shadow-elegant"
            >
              <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
              <span className="text-sm font-semibold text-white">Cabinet de Conseil Certifié</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transformez Votre Entreprise avec{' '}
              <span className="text-gradient">l'Excellence Stratégique</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Nous aidons les entreprises algériennes ambitieuses à accélérer leur croissance, optimiser leurs opérations et atteindre un succès durable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact">
                <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-elegant-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                  Planifier une Consultation
                  <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </a>
              <a href="#about">
                <button className="border-2 border-primary-500 text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Play className="h-5 w-5" strokeWidth={2.5} />
                  Voir la Démo
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="text-center sm:text-left"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Business team"
                className="rounded-2xl shadow-elegant-lg w-full relative z-10"
              />
              
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-lg opacity-80 blur-xl"></div>
              
              {/* Stats card overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-elegant-lg border-l-4 border-accent-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Taux de Réussite</p>
                    <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">95%</p>
                  </div>
                  <div className="h-12 w-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
