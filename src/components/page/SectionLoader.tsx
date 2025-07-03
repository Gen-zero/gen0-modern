const SectionLoader = () => (
  <div className="flex justify-center py-12">
    <div className="code-skeleton w-full max-w-md mx-auto px-4">
      {Array.from({ length: 3 }, (_, i) => (
        <div 
          key={i} 
          className={`line ${i === 1 ? 'short' : ''}`} 
          style={{ 
            width: i === 1 ? '60%' : '90%'
          }}
        />
      ))}
    </div>
  </div>
);

export default SectionLoader;