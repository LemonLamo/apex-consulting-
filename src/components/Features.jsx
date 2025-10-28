import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Globe, Award, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligence Stratégique',
      description: 'Analyses de marché poussées et veille concurrentielle',
      color: 'primary',
    },
    {
      icon: Shield,
      title: 'Conformité Garantie',
      description: 'Respect total des normes algériennes et internationales',
      color: 'accent',
    },
    {
      icon: Zap,
      title: 'Résultats Rapides',
      description: 'Implémentation agile avec des gains mesurables',
      color: 'primary',
    },
    {
      icon: Globe,
      title: 'Expertise Locale',
      description: 'Connaissance approfondie du marché algérien',
      color: 'accent',
    },
    {
      icon: Award,
      title: 'Excellence Certifiée',
      description: 'Accréditations internationales et reconnaissance du secteur',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Accompagnement Humain',
      description: 'Formation continue de vos équipes pour l\'autonomie',
      color: 'accent',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements - more subtle */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400/40 to-transparent"></div>
      
      {/* Hexagon pattern background - lighter */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">Pourquoi Nous Choisir</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Des Atouts <span className="text-gradient">Uniques</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ce qui nous distingue dans le paysage du conseil en Algérie
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary-200 transition-all duration-500 overflow-hidden">
                {/* Animated background on hover - very subtle */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color === 'primary' ? 'from-primary-500/[0.02] to-primary-600/[0.02]' : 'from-accent-500/[0.02] to-accent-600/[0.02]'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with animated ring */}
                  <div className="relative w-fit mb-5">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color === 'primary' ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600'} opacity-10 blur-md`}
                    ></motion.div>
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.color === 'primary' ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Corner decoration - smaller */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.color === 'primary' ? 'from-primary-500/5 to-transparent' : 'from-accent-500/5 to-transparent'} rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent - more subtle */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-0.5 bg-gradient-to-r from-transparent via-primary-400/30 to-transparent mx-auto max-w-md origin-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Features;
