import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: TrendingUp, value: '150+', label: 'Projets Réalisés', color: 'from-primary-500 to-primary-600' },
    { icon: Users, value: '50+', label: 'Clients Satisfaits', color: 'from-accent-500 to-accent-600' },
    { icon: Award, value: '8+', label: 'Ans d\'Expérience', color: 'from-primary-600 to-accent-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 md:py-28 overflow-hidden bg-gray-900 dark:bg-black">
      {/* Isometric cubes pattern background - animated (SAME AS PROCESS) */}
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
            <pattern id="hero-cubes" x="0" y="0" width="120" height="105" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#hero-cubes)" />
        </svg>
      </motion.div>

      {/* Glowing connecting lines (SAME AS PROCESS) */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 100 200 Q 400 100, 700 200 T 1400 200"
            stroke="url(#hero-line-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Multiple layered gradient orbs for depth (SAME AS PROCESS) */}
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
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-400 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-600 dark:bg-primary-500 px-4 py-2 rounded-full mb-6 shadow-lg shadow-primary-500/20"
            >
              <Sparkles className="h-3.5 w-3.5 text-white animate-pulse" strokeWidth={2.5} />
              <span className="text-xs font-bold text-white tracking-wide">EXPERTISE CERTIFIÉE</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5">
              Propulsez Votre{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Succès</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full origin-left"
                />
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed font-light">
              Solutions stratégiques sur-mesure pour les entreprises algériennes visionnaires.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button className="bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto group text-sm md:text-base">
                  Consultation Gratuite
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>
              </motion.a>
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 hover:border-white/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
                  Nos Services
                </button>
              </motion.a>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-md border border-white/10"
                >
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} mb-2`}>
                    <stat.icon className="h-4 w-4 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">{stat.value}</h3>
                  <p className="text-[10px] md:text-xs text-gray-300 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=700&fit=crop"
                alt="Équipe Apex Consulting"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Gradient overlay - subtle */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating achievement card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-xl border border-white/20 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg p-2.5">
                  <Award className="h-6 w-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-medium mb-0.5">Taux de Réussite</p>
                  <p className="text-2xl font-bold text-white">95%</p>
                </div>
              </div>
            </motion.div>

            {/* Floating rating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3 w-3 text-yellow-300 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl font-bold text-white">5.0</p>
              <p className="text-[10px] text-white/90 font-medium">Note Clients</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
