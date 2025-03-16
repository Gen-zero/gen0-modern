import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const values = [
    'Evolution: Growing and getting better 🌱',
    'Logical Thinking: Thinking clearly and smartly 🧠',
    'Unity for Humanity: Working together with compassion 🤝',
    'Innovation: Being brave to create new things 🚀'
  ];

  return (
    <div
      className="animate-on-scroll max-w-7xl mx-auto px-4"
      style={{ animationDelay: '0.2s' }}
    >
      {/* 
        Use flex-col by default and switch to flex-row at lg screens 
        so they display side-by-side. gap-8 adds spacing between columns.
      */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: About content */}
        <div className="flex-1">
          <span className="block mb-3 text-gray-400 font-semibold text-4xl">
            ABOUT US
          </span>
          <h2 className="text-3xl font-semibold mb-6 md:text-2xl">
            We&apos;re a crew of creative game-changers!
          </h2>
          <p className="w-full text-muted-foreground mb-8 text-lg">
            We&apos;re a squad 🚀 of multidisciplinary talent 🎨💻 crafting next-gen projects ✨
            to level up humanity 🌏—They call us GenZ 🌀, but we are GenZero 🕉️.
          </p>
        </div>

        {/* Right Column: Values list + hidden section */}
        <div className="flex-1">
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

          {/* Hidden Approach 
