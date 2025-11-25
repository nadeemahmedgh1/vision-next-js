'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <footer className="w-full bg-white px-3 sm:px-6 pb-6">
      <div
        className="
          relative mx-auto w-full max-w-[1400px]
          h-[420px] sm:h-[460px] md:h-[520px]
          rounded-2xl overflow-hidden
          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        "
        style={{
          backgroundImage:
            'url("../assests/footer.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* optional dark overlay for readability (same look) */}
        <div className="absolute inset-0 bg-[#050b2a]/80" />

        {/* Top-left brand */}
        <div className="absolute left-8 top-8 text-white" data-aos="fade-right">
          <div className="text-lg font-semibold tracking-wide">memorae</div>
        </div>

        {/* Headline + subtext */}
        <div
          className="absolute left-8 sm:left-10 md:left-12 top-[40%] -translate-y-1/2 max-w-[520px]"
          data-aos="fade-up"
        >
          <h3 className="text-white text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-tight">
            You just live.
            <br />
            Memorae remembers for you.
          </h3>
          <p className="mt-4 text-white/75 text-[12px] sm:text-[13px] md:text-[14px]">
            Your to-do list asked us for help. Here we are.
          </p>
        </div>

        {/* Social icons (top-right) */}
        <div
          className="absolute right-8 top-10 flex items-center gap-3 text-white/90"
          data-aos="fade-left"
        >
          {[
            { label: "in", href: "#" },
            { label: "▶", href: "#" },
            { label: "◎", href: "#" },
            { label: "f", href: "#" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="
                h-6 w-6 grid place-items-center rounded-md
                bg-white/10 text-[11px] font-bold
                hover:bg-white/20 transition
                animate-[pop_2.4s_ease-in-out_infinite]
              "
              style={{ animationDelay: `${i * 0.2}s` }}
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Bottom-right links */}
        <div
          className="
            absolute right-8 bottom-8 flex flex-wrap justify-end gap-x-6 gap-y-2
            text-[11px] text-white/90
          "
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {[
            "Privacy Policy",
            "Terms and Conditions",
            "Cookie Settings",
            "Legal Notice",
            "Communication Channels",
          ].map((t, i) => (
            <a
              key={i}
              href="#"
              className="underline underline-offset-4 decoration-white/50 hover:decoration-white transition"
            >
              {t}
            </a>
          ))}
        </div>

        {/* Bottom-left copyright */}
        <div
          className="absolute left-8 bottom-8 text-[10px] text-white/70"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          © 2024 Genera Capital SLU. All rights reserved.
        </div>

        {/* keyframes */}
        <style>{`
          @keyframes pop {
            0%,100% { transform: translateY(0) scale(1) }
            50% { transform: translateY(-3px) scale(1.05) }
          }
        `}</style>
      </div>
    </footer>
  );
}

export default Footer;
