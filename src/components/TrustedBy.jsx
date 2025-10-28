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
      name: 'Condor Electronics', 
      logo: '/assets/logos/condor.svg'
    },
    { 
      name: 'Naftal', 
      logo: '/assets/logos/naftal.svg'
    },
  ];

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
            >
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-12 md:h-14 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-sm md:text-base font-semibold text-gray-700">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;