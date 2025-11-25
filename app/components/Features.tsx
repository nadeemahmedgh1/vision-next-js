import React from 'react';

const Features = () => {
  const featuresList = [
    { text: "No more mental lists", position: "top-1/4 left-1/4" },
    { text: "No more missed appointments", position: "top-1/4 right-1/4" },
    { text: "No more post-its on the mirror", position: "top-1/2 left-1/4 -translate-y-1/2" },
    { text: "No more dead plants", position: "top-1/2 right-1/4 -translate-y-1/2" },
    { text: "No more missed deadlines", position: "bottom-1/4 left-1/4" },
    { text: "No more reminders on napkins", position: "bottom-1/4 right-1/4" },
  ];

  return (
    <section id="features" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full transform rotate-45">
          <div className="absolute inset-2 bg-white rounded-full"></div>
      </div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full transform -rotate-45">
        <div className="absolute inset-2 bg-white rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 flex justify-center">
        <div className="relative w-[350px] h-[700px] bg-black rounded-[40px] shadow-2xl p-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-2xl"></div>
          <div className="h-full w-full bg-blue-200 rounded-[30px] flex flex-col justify-between items-center p-8" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/az-subtle.png')` }}>
            <p className="text-center text-gray-800 text-lg">
              You're not making a mess of yourself: you're trying to do it all yourself.
            </p>
            <div className="w-40 h-40 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full relative">
                    <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-black rounded-full"></div>
                    <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-black rounded-full"></div>
                    <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-12 h-6 border-t-4 border-black rounded-b-full"></div>
                </div>
            </div>
            <div className="w-full h-16 bg-cover bg-center rounded-b-[26px]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=2070&auto=format&fit=crop')`}}></div>
          </div>
        </div>
        
        {featuresList.map((feature, index) => (
          <div key={index} className={`absolute ${feature.position} bg-white/80 backdrop-blur-md rounded-full px-4 py-2 shadow-md text-gray-700`}>
            {feature.text}
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;
