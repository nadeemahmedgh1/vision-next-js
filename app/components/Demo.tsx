import React from 'react';

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300">
      <div className="container mx-auto px-4">
        <div className="bg-white/50 backdrop-blur-lg rounded-3xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="relative aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl"></div>
            <button className="relative flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md transition-transform hover:scale-110">
              <span className="sr-only">Play</span>
              <span className="text-gray-800 text-lg mr-2">Let's</span>
              <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
              </svg>
              <span className="text-gray-800 text-lg ml-2">test</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
