import React from "react";

export default function Choas() {
  return (
    <section
      className="
        relative w-full h-[395px] overflow-hidden rounded-[18px]
        bg-[radial-gradient(1200px_500px_at_50%_-40%,#1e4aa3_0%,transparent_60%),linear-gradient(180deg,#0b1f52_0%,#0f2a6a_50%,#0b1f52_100%)]
      "
    >
      {/* Stars overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-90 blur-[0.2px]"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 8% 18%, rgba(190,220,255,0.9) 99%, transparent 100%),
            radial-gradient(1.2px 1.2px at 22% 30%, rgba(140,200,255,0.8) 99%, transparent 100%),
            radial-gradient(1px 1px at 35% 12%, rgba(190,220,255,0.7) 99%, transparent 100%),
            radial-gradient(1.3px 1.3px at 48% 27%, rgba(140,200,255,0.9) 99%, transparent 100%),
            radial-gradient(1px 1px at 62% 16%, rgba(190,220,255,0.8) 99%, transparent 100%),
            radial-gradient(1.2px 1.2px at 74% 34%, rgba(140,200,255,0.8) 99%, transparent 100%),
            radial-gradient(1px 1px at 88% 20%, rgba(190,220,255,0.9) 99%, transparent 100%),
            radial-gradient(1px 1px at 15% 70%, rgba(140,200,255,0.7) 99%, transparent 100%),
            radial-gradient(1.2px 1.2px at 40% 78%, rgba(190,220,255,0.8) 99%, transparent 100%),
            radial-gradient(1px 1px at 68% 74%, rgba(140,200,255,0.7) 99%, transparent 100%),
            radial-gradient(1.1px 1.1px at 85% 82%, rgba(190,220,255,0.8) 99%, transparent 100%)
          `,
        }}
      />

      {/* Center content */}
      <div className="absolute inset-0 z-[2] grid place-items-center text-center text-white px-4 font-sans">
        <div>
          <h1 className="font-bold tracking-[-0.02em] text-[clamp(36px,4vw,60px)] leading-tight">
            Your chaos, your plan
          </h1>
          <p className="mt-2 text-[clamp(13px,1.4vw,16px)] leading-snug opacity-95">
            Choose how you want Memorae to help you
            <br />
            don't lose your head.
          </p>
        </div>
      </div>

      {/* Right orb / character */}
      <div className="absolute right-[54px] bottom-[24px] w-[170px] h-[170px] z-[3]">
        {/* glow */}
        <div className="absolute -inset-[18px] rounded-full bg-[radial-gradient(circle,rgba(126,203,255,0.55),transparent_65%)] blur-[16px]" />

        {/* orb */}
        <div
          className="
            absolute inset-0 rounded-full grid place-items-center
            shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset,0_18px_40px_rgba(0,0,0,0.35)]
            bg-[radial-gradient(circle_at_25%_20%,#ffb8ff_0%,rgba(255,184,255,0)_40%),radial-gradient(circle_at_70%_75%,#7ad9ff_0%,rgba(122,217,255,0)_45%),linear-gradient(160deg,#b49bff_0%,#69d1ff_55%,#3a7bff_100%)]
          "
        >
          {/* face area */}
          <div className="relative w-[68%] h-[68%] rounded-full">
            {/* glasses */}
            <div className="absolute top-[36%] left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="relative w-[58px] h-[30px] rounded-full bg-black/45 border-[3px] border-[#00e6ff] shadow-[0_0_10px_rgba(0,230,255,0.9)]">
                <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-300/15 to-cyan-300/0" />
              </div>

              <div className="w-[10px] h-[6px] rounded-full bg-[#00e6ff] shadow-[0_0_8px_rgba(0,230,255,0.9)]" />

              <div className="relative w-[58px] h-[30px] rounded-full bg-black/45 border-[3px] border-[#00e6ff] shadow-[0_0_10px_rgba(0,230,255,0.9)]">
                <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-300/15 to-cyan-300/0" />
              </div>
            </div>

            {/* smile */}
            <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[28px] h-[12px] border-b-[3px] border-black/55 rounded-b-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
