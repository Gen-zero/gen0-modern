
import { Code, Layout, Palette, Search, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface NavMenuServicesProps {
  toggleMenu: () => void;
}

const NavMenuServices = ({ toggleMenu }: NavMenuServicesProps) => {
  const services: ServiceLink[] = [
    {
      name: '0 TO 1',
      href: '#services',
      icon: <Rocket className="h-4 w-4 text-accent" />
    }, 
    {
      name: 'Web Development',
      href: '#services',
      icon: <Code className="h-4 w-4 text-accent" />
    }, 
    {
      name: 'UI/UX Design',
      href: '#services',
      icon: <Palette className="h-4 w-4 text-accent" />
    }, 
    {
      name: 'SEO Optimization',
      href: '#services',
      icon: <Search className="h-4 w-4 text-accent" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div 
      className="space-y-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3 
        className="text-base md:text-lg font-semibold mb-2 text-accent"
        variants={itemVariants}
      >
        Services
      </motion.h3>
      <motion.ul 
        className="space-y-2"
        variants={containerVariants}
      >
        {services.map(service => (
          <motion.li 
            key={service.name}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href={service.href} 
              className="relative inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-sm md:text-base" 
              onClick={(e) => {
                e.preventDefault();
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
                toggleMenu();
              }}
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              {service.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default NavMenuServices;
