
interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

const JourneySection = () => {
  const journeyItems: JourneyItem[] = [
    {
      year: '2013',
      title: 'Founded',
      description: 'Our journey began with a small team of designers passionate about crafting beautiful digital experiences.'
    }, 
    {
      year: '2015',
      title: 'First Major Client',
      description: 'Landed our first enterprise client and expanded our team to include full-stack developers.'
    }, 
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Opened our first international office and began serving clients globally.'
    }, 
    {
      year: '2021',
      title: 'Innovation Focus',
      description: 'Established our innovation lab to explore emerging technologies and their applications.'
    }, 
    {
      year: '2023',
      title: 'Today',
      description: 'Continuing to grow and evolve, with a team of 50+ creatives serving clients around the world.'
    }
  ];

  return (
    <section id="journey" className="py-20 container mx-auto px-6 md:px-12 animate-on-scroll">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Journey</h2>
      
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
        
        <div className="space-y-20">
          {journeyItems.map((item, index) => (
            <div key={index} className={`relative flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="flex-1"></div>
              <div className="w-10 flex justify-center relative">
                <div className="h-6 w-6 rounded-full bg-primary absolute top-0"></div>
              </div>
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-10' : 'pl-10'}`}>
                <span className="text-primary font-bold text-lg">{item.year}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
