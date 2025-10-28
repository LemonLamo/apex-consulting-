import { motion } from 'framer-motion';

const TrustedBy = () => {
  const companies = [
    { 
      name: 'Sonatrach', 
      logo: '/assets/logos/sonatrach.svg'
    },
    { 
      name: 'Algérie Télécom', 
      logo: '/assets/logos/algerie-telecom.svg'
    },
    { 
      name: 'Air Algérie', 
      logo: '/assets/logos/air-algerie.svg'
    },
    { 
      name: 'Condor', 
      logo: '/assets/logos/condor.svg'
    },
    { 
      name: 'Naftal', 
      logo: '/assets/logos/naftal.svg'
    },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-100 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm md:text-base font-medium mb-12 uppercase tracking-wider"
        >
          Ils nous font confiance
        </motion.p>
        
        {/* Infinite Sliding Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  <div className="relative px-6">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="h-10 md:h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 p-2 bg-white/50"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;