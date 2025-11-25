'use client';
import React, { useRef } from 'react';

const Superpowers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const superpowersData = [
    {
      title: 'Notes that never get lost',
      description: 'Shopping lists, ideas, or whatever. Just say it, type it, or drop it in and your list is saved.',
      color: 'blue',
      messages: [
        { from: 'user', text: 'Memorae, add Stranger Things to my watch list!' },
        { from: 'bot', text: "Added 'Stranger Things' to your watch list." },
      ],
    },
    {
      title: 'All your calendars in one chat',
      description: 'Google, Outlook. Your appointments, events, and tasks together. You won’t miss a thing, even if you try.',
      color: 'pink',
      messages: [
        { from: 'user', text: 'Memorae, cancel all events after Thursday at 6PM.' },
        { from: 'bot', text: 'Cancelled all your events after Thursday at 6pm.' },
      ],
    },
    {
      title: 'Voice notes that become tasks',
      description: 'Your voice is enough. Memorae listens, transcribes, and organizes what you say. That easy.',
      color: 'purple',
      messages: [
        { from: 'user', type: 'voice' },
        { from: 'bot', text: "Created reminder: family lunch at Aunt Luisa's Sunday at 1:00 PM." },
      ],
    },
    {
      title: 'Unlimited automatic reminders',
      description: 'Unique or repeating. Weekly, monthly, with or without excuses. Scheduled or spontaneous — Memorae reminds you whenever needed!',
      color: 'indigo',
      messages: [
        { from: 'user', text: 'Remind me to meditate tomorrow at 8AM!' },
        { from: 'bot', text: "I've set your reminder for tomorrow at 8:00 to meditate. Don't forget to take that time to take care of yourself! 🙏" },
      ],
    },
     {
      title: 'From image to order',
      description: 'A timetable, a list, a whiteboard... Take a photo, send it to Memorae and turn it into whatever you need.',
      color: 'green',
      messages: [
        { from: 'user', type: 'image' },
        { from: 'bot', text: "Done! I've added everything to your shopping list." },
      ],
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Width of one card (380px) + gap (32px) = 412px. Scroll by 3 cards.
      const scrollAmount = direction === 'left' ? -1236 : 1236;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const colors = {
    blue: 'bg-blue-500',
    pink: 'bg-pink-500',
    purple: 'bg-purple-500',
    indigo: 'bg-indigo-500',
    green: 'bg-green-500',
  }

  return (
    <section id="superpowers" className="py-24 bg-[#0B0E1B] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Superpowers for people who can’t do it all</h2>
          <div className="flex space-x-4">
            <button onClick={() => scroll('left')} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              &larr;
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              &rarr;
            </button>
          </div>
        </div>
        
        <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
          {superpowersData.map((superpower, index) => (
            <div key={index} className="flex-shrink-0 w-[380px] bg-[#1A1D2D] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">{superpower.title}</h3>
                <p className="text-gray-400 mb-6">{superpower.description}</p>
              </div>
              <div className={`p-4 rounded-xl ${colors[superpower.color as keyof typeof colors]}`}>
                {superpower.messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                     <div className={`px-4 py-2 rounded-lg max-w-[80%] ${msg.from === 'user' ? 'bg-white/20' : 'bg-white/90 text-gray-800'}`}>
                       {msg.type === 'voice' && <span>Voice Note...</span>}
                       {msg.type === 'image' && <span>Image of a list...</span>}
                       {msg.text}
                     </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

         <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity text-lg">
                Discover all the superpowers &rarr;
            </button>
        </div>

      </div>
    </section>
  );
};

export default Superpowers;
