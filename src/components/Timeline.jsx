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
        <div className="space-y-0">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Content - Left side for even, Right side for odd */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
                  <div className="inline-block lg:block">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-primary-200 transition-all duration-300"
                    >
                      {/* Year badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 ${milestone.color === 'primary' ? 'bg-primary-50 text-primary-700' : 'bg-accent-50 text-accent-700'}`}>
                        <milestone.icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                        <span className="font-bold text-xs">{milestone.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{milestone.description}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Icon - Center (visible on large screens) */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                    className={`w-16 h-16 bg-gradient-to-br ${milestone.color === 'primary' ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600'} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                  >
                    <milestone.icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:order-2' : ''}`}></div>
              </div>

              {/* Connector line between milestones */}
              {index < milestones.length - 1 && (
                <div className="h-12 lg:h-16 flex justify-center lg:justify-start">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                    className={`w-0.5 bg-gradient-to-b ${milestone.color === 'primary' ? 'from-primary-400/40 to-accent-400/40' : 'from-accent-400/40 to-primary-400/40'} origin-top lg:absolute lg:left-1/2 lg:-translate-x-1/2`}
                  ></motion.div>
                </div>
              )}
            </motion.div>
          ))}
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
