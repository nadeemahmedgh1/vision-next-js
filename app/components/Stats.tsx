import React from 'react';

const Stats = () => {
  const statsList = [
    { value: "+60,000", label: "people already living with a peaceful mind" },
    { value: "+45", label: "countries" },
    { value: "+5000000", label: "reminders sent" },
    { value: "+100", label: "languages" },
  ];

  return (
    <section id="stats" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Your head can’t take it any more. Luckily, now you have help.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {statsList.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
