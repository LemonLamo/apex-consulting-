import { motion } from 'framer-motion';
import { BarChart3, Users, Target, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: BarChart3,
      value: '35%',
      label: 'Croissance Moyenne',
      description: 'pour nos clients',
    },
    {
      icon: Users,
      value: '50+',
      label: 'Entreprises',
      description: 'accompagnées',
    },
    {
      icon: Target,
      value: '98%',
      label: 'Projets Réussis',
      description: 'livrés à temps',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Certifications',
      description: 'et reconnaissances',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Des Résultats qui Parlent d'Eux-Mêmes
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Notre approche orientée résultats a aidé des dizaines d'entreprises algériennes à atteindre leurs objectifs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="bg-white/10 p-3 rounded-xl w-fit mb-4">
                <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-base md:text-lg font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-sm text-white/70">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;