import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: 'Proven Methodology',
      description: 'Battle-tested frameworks that deliver results',
    },
    {
      title: 'Expert Team',
      description: 'Industry veterans with diverse backgrounds',
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our top priority',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop"
              alt="Our team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-gradient-primary text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-5xl font-bold mb-1">15+</h3>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
              Driving Success Through Strategic Partnership
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Since 2010, Apex Consulting has been at the forefront of business transformation, helping
              organizations navigate complexity and achieve extraordinary results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of seasoned consultants brings deep industry expertise, innovative thinking, and a
              relentless commitment to client success. We don't just provide advice—we become your strategic
              partner in growth.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
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
