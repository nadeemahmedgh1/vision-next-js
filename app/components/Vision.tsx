import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#0B0E1B] text-white rounded-3xl p-16 relative overflow-hidden flex items-center">
          <div className="grid md:grid-cols-2 gap-16 items-center w-full">
            <div className="z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What we are creating doesn’t exist
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                We don’t add functions. We are building a mental operating system.
              </p>
              <p className="text-lg text-gray-300">
                A new category, a new habit, a new way of living: with a clear head and life under control.
              </p>
            </div>
            
            <div className="relative h-80 w-full flex items-center justify-center">
              {/* Placeholder for the hand and orb graphic */}
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2070&auto=format&fit=crop')" }}></div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full filter blur-lg opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center filter blur-sm">
                    <div className="w-40 h-40 bg-white/20 rounded-full"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
