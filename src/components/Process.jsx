import { motion } from 'framer-motion';
import { Target, Lightbulb, Cog, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Target,
      number: '01',
      title: 'Diagnostic',
      description: 'Analyse approfondie de vos défis et opportunités',
      color: 'from-primary-500 to-primary-600',
      delay: 0.2,
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Stratégie',
      description: 'Élaboration de solutions sur-mesure adaptées',
      color: 'from-accent-500 to-accent-600',
      delay: 0.4,
    },
    {
      icon: Cog,
      number: '03',
      title: 'Mise en Œuvre',
      description: 'Déploiement structuré avec votre équipe',
      color: 'from-primary-600 to-primary-700',
      delay: 0.6,
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Optimisation',
      description: 'Suivi continu et amélioration des résultats',
      color: 'from-accent-600 to-accent-700',
      delay: 0.8,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900 dark:bg-black relative overflow-hidden">
      {/* Isometric cubes pattern background - animated */}
      <motion.div 
        className="absolute inset-0 opacity-[0.06]"
        animate={{ 
          backgroundPosition: ['0px 0px', '60px 105px'],
        }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-cubes" x="0" y="0" width="120" height="105" patternUnits="userSpaceOnUse">
              {/* Cube 1 - Teal */}
              <g>
                <path d="M30 17.5 L60 35 L60 70 L30 52.5 Z" fill="rgba(20, 184, 166, 0.4)" stroke="rgba(20, 184, 166, 0.6)" strokeWidth="0.5"/>
                <path d="M30 17.5 L0 35 L0 70 L30 52.5 Z" fill="rgba(20, 184, 166, 0.2)" stroke="rgba(20, 184, 166, 0.6)" strokeWidth="0.5"/>
                <path d="M30 17.5 L60 35 L30 52.5 L0 35 Z" fill="rgba(20, 184, 166, 0.6)" stroke="rgba(20, 184, 166, 0.6)" strokeWidth="0.5"/>
              </g>
              {/* Cube 2 - Orange accent */}
              <g>
                <path d="M90 17.5 L120 35 L120 70 L90 52.5 Z" fill="rgba(249, 115, 22, 0.3)" stroke="rgba(249, 115, 22, 0.5)" strokeWidth="0.5"/>
                <path d="M90 17.5 L60 35 L60 70 L90 52.5 Z" fill="rgba(249, 115, 22, 0.15)" stroke="rgba(249, 115, 22, 0.5)" strokeWidth="0.5"/>
                <path d="M90 17.5 L120 35 L90 52.5 L60 35 Z" fill="rgba(249, 115, 22, 0.5)" stroke="rgba(249, 115, 22, 0.5)" strokeWidth="0.5"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-cubes)" />
        </svg>
      </motion.div>

      {/* Glowing connecting lines between steps */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 100 200 Q 400 100, 700 200 T 1400 200"
            stroke="url(#line-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Multiple layered gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] w-96 h-96 bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-[5%] w-[500px] h-[500px] bg-accent-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600 rounded-full blur-3xl"
        />
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * 800,
              opacity: 0,
            }}
            animate={{
              y: [null, -150],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">Notre Méthodologie</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Un Processus <span className="text-gradient">Éprouvé</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Une approche structurée en 4 étapes pour garantir votre succès
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line - desktop only - more subtle */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.6 }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 relative z-10">
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-4 border-gray-700 shadow-xl">
                    <span className="text-lg font-bold text-gradient">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute bottom-3 right-3 w-10 h-0.5 bg-gradient-to-r ${step.color}`}></div>
                    <div className={`absolute bottom-3 right-3 w-0.5 h-10 bg-gradient-to-b ${step.color}`}></div>
                  </div>
                </div>

                {/* Arrow connector - desktop only - smaller */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-6 h-6 -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-l-6 border-l-primary-500/50"
                    ></motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <a href="#contact">
            <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3.5 rounded-xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300 text-sm md:text-base">
              Démarrez Votre Transformation
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
