import React from 'react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Forgetfulness won’t{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              win twice.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-green-100/50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">We didn’t come to create another app.</h3>
            <p className="text-gray-600 mb-6">
              The world doesn’t need more productivity tools. It needs fewer things in the head. Memorae doesn’t download: it integrates. It doesn’t demand effort: it eliminates it.
            </p>
            <div className="flex items-center space-x-2">
              {/* Placeholder for app icons */}
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div className="w-10 h-10 bg-green-500 rounded-full"></div>
              <div className="w-10 h-10 bg-red-500 rounded-full"></div>
              <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-500 text-white rounded-2xl p-8">
             <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-white/80 text-gray-800 rounded-lg p-2 text-xs">Meeting with new client...</div>
                <div className="bg-white/80 text-gray-800 rounded-lg p-2 text-xs">Your pending tasks...</div>
                <div className="bg-white/80 text-gray-800 rounded-lg p-2 text-xs">Call the dentist...</div>
             </div>
            <h3 className="text-3xl font-bold mb-4">We don’t organize lives: we decompress them</h3>
            <p>
              Chaos isn’t solved with more systems, but by removing friction. Memorae converts messages into tasks, audios into text, ideas into action... Without you having to think twice.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-2xl p-8">
             <div className="bg-white p-3 rounded-lg shadow mb-6">
                <p className="text-gray-700">Remember to send the report to your boss today before 4:00 PM.</p>
             </div>
            <h3 className="text-3xl font-bold mb-4">Forgetfulness is our enemy</h3>
            <p className="text-gray-600">
              We don’t compete with other apps. We compete with everything that escapes you. With the important things that never happen. With the mental load that exhausts you. We don’t sell features: we sell clarity. And clarity is power.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-pink-400 text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/20 rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">We are not an app. We are a change of logic.</h3>
              <p>
                We don’t design for you to look at it. We design for you not to even notice it. Memorae doesn’t seek attention. It acts just when you need it and disappears afterwards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
