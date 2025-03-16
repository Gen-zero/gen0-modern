import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    'Evolution: Growing and getting better 🌱',
    'Logical Thinking: Thinking clearly and smartly 🧠',
    'Unity for Humanity: Working together with compassion 🤝',
    'Innovation: Being brave to create new things 🚀',
  ];

  return (
    <div
      className="animate-on-scroll w-full overflow-hidden px-4"
      style={{ animationDelay: '0.2s' }}
    >
      {/* 
        flex-col => stacked on small screens
        lg:flex-row => side-by-side on large screens
        gap-8 => spacing between columns
      */}
      <div className="flex flex-col gap-8 lg:flex-row w-full">
        {/* Left Column: ABOUT US content */}
        <div className="flex-1 p-8">
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
        </div>

        {/* Right Column: Our Values + Hidden Approach */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Our Values</h3>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>{value}</span>
                </li>
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
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
