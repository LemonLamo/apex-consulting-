import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Karim Benali',
      role: 'PDG, TechnoAlger',
      image: 'https://i.pravatar.cc/100?img=12',
      rating: 5,
      text: 'Apex Consulting a transformé nos opérations et nous a aidés à réaliser une croissance de 35% en un an. Leur expertise du marché algérien est exceptionnelle.',
    },
    {
      name: 'Amina Messaoudi',
      role: 'Directrice, Nour Distribution',
      image: 'https://i.pravatar.cc/100?img=47',
      rating: 5,
      text: "L'approche stratégique et pratique de l'équipe a rendu notre transformation digitale fluide et réussie. Je recommande vivement leurs services.",
    },
    {
      name: 'Yacine Hamidi',
      role: 'Fondateur, StartupHub DZ',
      image: 'https://i.pravatar.cc/100?img=33',
      rating: 5,
      text: 'Travailler avec Apex Consulting a changé la donne. Ils nous ont aidés à naviguer dans les défis complexes du marché algérien.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-br from-white via-accent-50/20 to-primary-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-elegant-lg transition-all duration-300 relative border-t-4 border-primary-500"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-6xl text-primary-100 font-serif">"</div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-accent-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover ring-2 ring-primary-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
