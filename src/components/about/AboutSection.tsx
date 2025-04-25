
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const values = [
    'Evolution: Cultivating continuous growth through learning, iteration, and adaptation 🌱',
    'Zeroth Thinking: Cultivating original insights by anchoring our reasoning in clear, foundational principles before complexity 🧠',
    'Unity for Humanity: Fostering global solidarity that transcends borders and conflict 🤝',
    'Loyalty: Fearlessly committing to pioneering new frontiers with unwavering dedication 🚀',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Use a fragment (<>) so we can return two siblings
  return (
    <>
      {/* Left "ABOUT US" block */}
      <motion.div 
        className="w-full overflow-hidden px-4 p-8"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="block mb-3 text-gray-400 font-semibold text-4xl">
          ABOUT US
        </span>
        <h2 className="text-3xl font-semibold mb-6 md:text-2xl">
          We&apos;re a crew of creative game-changers!
        </h2>
        <p className="w-full text-muted-foreground mb-8 text-lg">
          We&apos;re a squad 🚀 of multidisciplinary talent 🎨💻 crafting
          next-gen projects ✨ to level up humanity 🌏—They call us GenZ 🌀,
          but we are GenZero 🕉️.
        </p>
      </motion.div>

      {/* Right "Our Values" block */}
      <motion.div 
        className="w-full overflow-hidden px-4 p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4">Our Values</h3>
          <ul className="space-y-3">
            {values.map((value, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                variants={itemVariants}
              >
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>{value}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hidden Approach Section */}
        <div className="hidden">
          <h3 className="text-xl font-medium mb-4">Our Approach</h3>
          <p className="w-full text-muted-foreground">
            We keep it collaborative AF 🤝✨—teaming up closely with our
            clients 🎯 to vibe with their unique goals 💎 and challenges 🧩.
            Our process? Proven 📌 to deliver solutions 🚀 that don&apos;t
            just hit expectations—they smash them! 🔥
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSection;
