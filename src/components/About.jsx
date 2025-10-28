import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, TrendingUp, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Méthodologie Éprouvée',
      description: 'Des cadres testés et validés qui produisent des résultats',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Users,
      title: 'Équipe Experte',
      description: 'Des professionnels chevronnés du marché algérien',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Target,
      title: 'Orienté Client',
      description: 'Votre succès est notre priorité absolue',
      color: 'from-primary-600 to-accent-500',
    },
  ];

  const achievements = [
    { number: '250+', label: 'Projets Livrés', icon: TrendingUp },
    { number: '98%', label: 'Satisfaction', icon: CheckCircle2 },
    { number: '15M+', label: 'DA Économisés', icon: Award },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-primary-50/10 to-accent-50/10 relative overflow-hidden">
      {/* Decorative background - softer */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-200 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated geometric patterns - more subtle */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-24 h-24 border-2 border-primary-300 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-32 h-32 border-2 border-accent-300 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-primary-400 rounded-lg rotate-45"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
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
                className="rounded-xl shadow-elegant-lg w-full"
              />
              
              {/* Decorative elements - softer */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-300 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-400 rounded-full blur-2xl opacity-30"></div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white p-5 md:p-6 rounded-xl shadow-warm">
              <h3 className="text-3xl md:text-4xl font-bold mb-1">8+</h3>
              <p className="text-xs opacity-90">Ans d'Excellence</p>
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
            <span className="text-primary-600 font-semibold text-xs md:text-sm uppercase tracking-wider">
              À Propos
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-5">
              Stimuler le Succès par le Partenariat Stratégique
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
              Depuis 2017, Apex Consulting est à l'avant-garde de la transformation des entreprises en Algérie, aidant
              les organisations à naviguer dans la complexité et à obtenir des résultats extraordinaires.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-7 leading-relaxed">
              Notre équipe de consultants expérimentés apporte une expertise approfondie du marché algérien, une pensée
              innovante et un engagement sans relâche envers le succès de nos clients.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-3 p-4 rounded-lg bg-white hover:shadow-md transition-all duration-300 border border-primary-100 shadow-sm"
                >
                  <div className={`shrink-0 w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-0.5 text-base">{feature.title}</h4>
                    <p className="text-gray-600 text-xs">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-200">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <item.icon className="h-5 w-5 text-primary-600 mx-auto mb-1.5" />
                  <h4 className="text-xl md:text-2xl font-bold text-gradient mb-0.5">{item.number}</h4>
                  <p className="text-[10px] md:text-xs text-gray-600">{item.label}</p>
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
