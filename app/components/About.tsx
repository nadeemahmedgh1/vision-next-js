import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-white text-gray-800">
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-200 opacity-50 transform rotate-12"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-200 opacity-50 transform -rotate-12"></div>
      
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-3xl md:text-4xl leading-relaxed mb-12">
          You normalized living with your head 🧠 about to to explode. And you don’t even notice anymore.
        </p>
        <p className="text-3xl md:text-4xl leading-relaxed mb-12">
          There’s always something pending. Something you forget. Something you should be doing right now 
          <span className="underline decoration-blue-500 decoration-4 underline-offset-8">...but you don’t know what</span>.
        </p>
        <p className="text-3xl md:text-4xl leading-relaxed text-gray-400">
          You jot down 📝 things so you won’t forget them. But you end up forgetting why you wrote ✍️ them. And you start again. Over and over. As if organization were the goal, not the <span className="relative inline-block"><span className="absolute bottom-0 left-0 w-full h-2/3 border-2 border-pink-400 rounded-full transform -skew-x-12"></span><span className="relative">solution.</span></span>
        </p>
      </div>
    </section>
  );
};

export default About;
