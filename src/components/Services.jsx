import { motion } from 'framer-motion';
import { TrendingUp, Settings, Rocket, Users, Database, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Business Strategy',
      description: 'Develop winning strategies that align with your vision and drive measurable results in competitive markets.',
    },
    {
      icon: Settings,
      title: 'Operations Optimization',
      description: 'Streamline processes, reduce costs, and enhance efficiency through proven operational excellence frameworks.',
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Navigate the digital landscape with confidence through technology adoption and innovation strategies.',
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Lead organizational transformation with structured change programs that ensure smooth transitions.',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics and business intelligence solutions.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate business risks with comprehensive risk management frameworks.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mt-2 mb-4"
          >
            Comprehensive Solutions for Every Challenge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From strategy to execution, we provide end-to-end consulting services tailored to your unique business needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-primary p-3 rounded-xl w-fit mb-6 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <a href="#" className="text-primary-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                Learn more
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
