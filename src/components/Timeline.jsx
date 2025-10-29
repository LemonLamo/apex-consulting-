import { motion } from 'framer-motion';
import { Milestone, Building2, Award, TrendingUp, Zap } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '2017',
      title: 'Fondation',
      description: 'Apex Consulting voit le jour avec une vision claire',
      icon: Building2,
      color: 'primary',
    },
    {
      year: '2019',
      title: 'Expansion',
      description: '50+ clients majeurs en Algérie nous font confiance',
      icon: TrendingUp,
      color: 'accent',
    },
    {
      year: '2021',
      title: 'Certification',
      description: 'Obtention des accréditations internationales',
      icon: Award,
      color: 'primary',
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Lancement de notre plateforme digitale propriétaire',
      icon: Zap,
      color: 'accent',
    },
    {
      year: '2025',
      title: 'Leadership',
      description: 'Leader reconnu du conseil stratégique en Algérie',
      icon: Milestone,
      color: 'primary',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-primary-50/10 to-white relative overflow-hidden">
      {/* Decorative line - more subtle */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-300/30 to-transparent hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">Notre Parcours</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Une Histoire de <span className="text-gradient">Croissance</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Des débuts ambitieux à notre position de leader aujourd'hui
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for mobile/tablet */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200 lg:hidden"></div>
          
          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Mobile/Tablet Layout - Vertical Timeline */}
                <div className="lg:hidden flex gap-6 md:gap-8 items-start">
                  {/* Icon Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                    className={`relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${
                      milestone.color === 'primary' 
                        ? 'from-primary-500 to-primary-600' 
                        : 'from-accent-500 to-accent-600'
                    } rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                  >
                    <milestone.icon className="h-6 w-6 md:h-8 md:w-8 text-white" strokeWidth={2.5} />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex-1 bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 ${
                      milestone.color === 'primary' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'bg-accent-100 text-accent-700'
                    }`}>
                      <span className="font-bold text-sm md:text-base">{milestone.year}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{milestone.description}</p>
                  </motion.div>
                </div>

                {/* Desktop Layout - Alternating Sides */}
                <div className={`hidden lg:grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content - Left side for even, Right side for odd */}
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Year badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
                        milestone.color === 'primary' 
                          ? 'bg-primary-100 text-primary-700' 
                          : 'bg-accent-100 text-accent-700'
                      }`}>
                        <milestone.icon className="h-4 w-4" strokeWidth={2.5} />
                        <span className="font-bold text-base">{milestone.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </motion.div>
                  </div>

                  {/* Icon - Center (visible on large screens only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.4, type: "spring" }}
                      className={`w-20 h-20 bg-gradient-to-br ${
                        milestone.color === 'primary' 
                          ? 'from-primary-500 to-primary-600' 
                          : 'from-accent-500 to-accent-600'
                      } rounded-full flex items-center justify-center shadow-xl border-4 border-white`}
                    >
                      <milestone.icon className="h-10 w-10 text-white" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : ''}`}></div>
                </div>

                {/* Connector line between milestones - Desktop only */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block h-16">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                      className={`w-0.5 h-full bg-gradient-to-b ${
                        milestone.color === 'primary' 
                          ? 'from-primary-400/40 to-accent-400/40' 
                          : 'from-accent-400/40 to-primary-400/40'
                      } absolute left-1/2 -translate-x-1/2`}
                    ></motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-full shadow-lg text-sm md:text-base">
            <Milestone className="h-5 w-5" strokeWidth={2.5} />
            <span className="font-bold">Et ce n'est que le début...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
