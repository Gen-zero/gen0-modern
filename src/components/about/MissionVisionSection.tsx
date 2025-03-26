import { Globe, Target } from 'lucide-react';
const MissionVisionSection = () => {
  return <div className="py-20 bg-primary/5 animate-on-scroll">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground">Unlocking true freedom 🕊️ for every human 🌏. We're here to break boundaries 🚧, remove limits, and empower people 💪🏼 to live life fully and authentically. True freedom isn't just a dream—it’s the vibe we're creating, together 🤝.</p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">Zeroth Thinking 🌀✨. We're pioneering a fresh mindset 🌱 and going beyond what's known 🚀. It's about seeing clearly from point zero [0️⃣], creating solutions no one's thought of before 💡.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-white p-1 rounded-xl shadow-xl rotate-3">
              <img src="https://ik.imagekit.io/kalidaspem/an%20office%20setting%20inside%20a%20computer%20screen,%20resembling%20a%20metaverse-style%20office%20setting,%20where%20someone%20is%20playing%20video%20games%20in%20the%20pc,%20but%20the%20game%20is%20work%20itself%20-%20enforcing%20the%20work%20as%20game%20into%20them..png" alt="Team brainstorming session" className="rounded-lg w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 aspect-square w-48 bg-white p-1 rounded-xl shadow-xl -rotate-6">
              <img src="https://ik.imagekit.io/kalidaspem/Alex.png" alt="Team collaboration" className="rounded-lg w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default MissionVisionSection;