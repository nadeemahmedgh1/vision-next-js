import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-blue-400 text-white overflow-hidden"
      style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/clouds.png')`, backgroundBlendMode: 'overlay' }}
    >
      {/* Floating UI Elements */}
      <div className="absolute top-20 left-10 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg text-gray-800 w-64">
        <div className="flex items-center mb-2">
          <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-md">REMINDER</span>
        </div>
        <p className="font-bold text-lg">Call the dentist and make an appointment</p>
        <div className="flex justify-between text-gray-500 mt-2 text-sm">
          <span>Monday, 26</span>
          <span>8:00 AM</span>
        </div>
      </div>

      <div className="absolute top-24 right-10 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg text-gray-800 w-64">
        <div className="flex items-center mb-2">
          <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-md">LISTS</span>
        </div>
        <p className="font-bold text-lg">Your pending tasks</p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Walk Paco</li>
          <li>Do the grocery shopping</li>
          <li>Send a quote</li>
        </ul>
      </div>
      
      <div className="absolute bottom-24 right-20 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg text-gray-800 w-72 flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-10 h-10 mr-4"/>
        <div>
           <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-md mb-2 inline-block">COMING SOON</span>
           <p className="font-bold">Memorae will arrive in Gmail soon!</p>
        </div>
      </div>

      <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col space-y-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-12 h-12"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-12 h-12"/>
      </div>
      
      {/* Central Content */}
      <div className="text-center z-10">
        <div className="flex items-center justify-center space-x-2 text-yellow-400">
          <span className="text-2xl">★★★★</span><span className="text-2xl text-yellow-300">★</span>
          <span className="text-white font-semibold text-lg ml-4">4.8 | 60k+ users worldwide</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold my-8 leading-tight">
          You are not designed <br /> to remember everything. <br /> Memorae is.
        </h1>

        <Link href="#">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity text-xl inline-flex items-center">
            Try for Free
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </div>

       {/* Floating decorative elements */}
       <div className="absolute top-1/3 right-32 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-80 animate-blob"></div>
       <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-70 animate-blob animation-delay-2000"></div>

    </section>
  );
};

export default Home;
