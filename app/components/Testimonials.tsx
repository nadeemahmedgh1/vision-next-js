"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    (async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
      });
    })();
  }, []);

  const testimonials = [
    {
      title: "Tool of the year",
      text:
        "“Without a doubt, it's the best tool I've subscribed to this year. Keep up the good work!”",
      name: "Christopher Fox",
      role: "Founder",
      avatar: "/avatars/1.jpg",
    },
    {
      title: "Game-changer",
      text:
        "“I have ADHD and this tool has completely changed my life. It's like having a second brain!” 💖",
      name: "Robbie Lockie",
      role: "Founder",
      avatar: "/avatars/2.jpg",
    },
    {
      title: "It's a lifesaver",
      text:
        "“Thanks to Memorae! It's something that has changed my life and saved it. Yesterday I discovered the friend reminders feature and it was like: woooooooooooooooooooow!”",
      name: "Yukari Aotani",
      role: "Violinist",
      avatar: "/avatars/3.jpg",
    },
    {
      title: "A miracle!",
      text:
        "“A marvel. Now my memory has a name, and it's called Memorae.”",
      name: "Sergio Argüero",
      role: "Financial advisor",
      avatar: "/avatars/4.jpg",
    },
    {
      title: "The best invention of the century",
      text:
        "“Since I started using it, it's impossible for me to forget anything. Imagine now that I can also make sure others don't forget! The best invention of the century for people who live life at 200 km/h.”",
      name: "Fabiola Pérez",
      role: "Dentist",
      avatar: "/avatars/5.jpg",
    },
    {
      title: "The best thing that ever happened to me",
      text:
        "“The best tool I've ever subscribed to. I haven't forgotten a task or a gift since. It's been one of the best investments of my life.”",
      name: "Santiago Nicolás",
      role: "Student",
      avatar: "/avatars/6.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div data-aos="fade-up" data-aos-delay="50" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#5B8CFF] to-[#C56BFF] bg-clip-text text-transparent">
              60k+ people
            </span>
            <br />
            <span className="text-[#0B1B3B]">they have forgotten to forget</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 120}
              data-aos-duration="900"
              className="relative bg-white rounded-[28px] shadow-sm border border-black/5 px-8 py-7 overflow-hidden"
            >
              <div className="flex items-center gap-1 text-[#F5A623] text-lg mb-4">
                {"★★★★★".split("").map((s, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>

              <div className="absolute top-6 right-6 w-9 h-9 rounded-full overflow-hidden bg-gray-200">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-[18px] font-bold text-[#0B1B3B] mb-3">
                {t.title}
              </h3>

              <p className="text-[13px] leading-relaxed text-[#3B4454] mb-6">
                {t.text}
              </p>

              <p className="text-[11px] text-[#0B1B3B] font-medium">
                {t.name} <span className="text-[#6B7280]">- {t.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;