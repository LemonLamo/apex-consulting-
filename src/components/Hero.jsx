import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: TrendingUp, value: '150+', label: 'Projets Réalisés', color: 'from-primary-500 to-primary-600' },
    { icon: Users, value: '50+', label: 'Clients Satisfaits', color: 'from-accent-500 to-accent-600' },
    { icon: Award, value: '8+', label: 'Ans d\'Expérience', color: 'from-primary-600 to-accent-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-primary-50/20 to-accent-50/10">
      {/* Animated background elements - softer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl"
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 rounded-full mb-6 shadow-lg shadow-primary-500/20"
            >
              <Sparkles className="h-3.5 w-3.5 text-white animate-pulse" strokeWidth={2.5} />
              <span className="text-xs font-bold text-white tracking-wide">EXPERTISE CERTIFIÉE</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-5">
              Propulsez Votre{' '}
              <span className="relative inline-block">
                <span className="text-gradient">Succès</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full origin-left"
                />
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-light">
              Solutions stratégiques sur-mesure pour les entreprises algériennes visionnaires.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto group text-sm md:text-base">
                  Consultation Gratuite
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>
              </motion.a>
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl font-bold hover:border-primary-500 hover:text-primary-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
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
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-md border border-gray-100"
                >
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} mb-2`}>
                    <stat.icon className="h-4 w-4 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</h3>
                  <p className="text-[10px] md:text-xs text-gray-600 font-medium">{stat.label}</p>
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
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-5 shadow-xl border border-gray-100 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg p-2.5">
                  <Award className="h-6 w-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium mb-0.5">Taux de Réussite</p>
                  <p className="text-2xl font-bold text-gradient">95%</p>
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
