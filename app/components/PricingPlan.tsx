'use client';
import React, { useState } from "react";

function PricingPlan() {
  const [billing, setBilling] = useState("annual"); // default same as current UI

  return (
    <section className="relative w-full min-h-[760px] py-14 px-4 md:px-8 overflow-hidden bg-[#0a0f16]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(900px 380px at 50% 35%, rgba(179,54,255,0.45), transparent 60%), radial-gradient(1200px 520px at 50% 75%, rgba(255,77,170,0.30), transparent 65%)",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Toggle */}
        <div className="flex justify-center">
          <div className="flex items-center gap-1 rounded-full bg-white/10 p-1 border border-white/10 backdrop-blur">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold text-white ${
                billing === "monthly" ? "bg-white/20" : "bg-white/5"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold text-white ${
                billing === "annual" ? "bg-[#7b78ff]" : "bg-white/5"
              }`}
            >
              Annual
            </button>

            <span className="ml-1 rounded-full bg-[#20e38a] px-2 py-1 text-[10px] font-bold text-black">
              -40%
            </span>
          </div>
        </div>

        {/* Cards row (annual cards stay same) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Pro card */}
          <div
            className="
              rounded-2xl bg-[#0b0f14] border border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              p-7 min-h-[360px] flex flex-col
              transition duration-300 ease-out
              hover:-translate-y-2 hover:scale-[1.02]
              hover:shadow-[0_18px_70px_rgba(90,140,255,0.25)]
            "
          >
            <div className="flex items-center justify-between">
              <h3 className="text-white text-sm font-semibold">Pro</h3>
              <span className="rounded-md bg-[#1fe38a] px-2 py-1 text-[9px] font-bold text-black">
                5 MONTHS FREE
              </span>
            </div>

            <div className="mt-4 flex items-end gap-2 text-white">
              <div className="text-3xl font-extrabold">3.59 $</div>
              <div className="text-sm opacity-60 line-through pb-[2px]">5.99 $</div>
              <div className="text-xs opacity-70 pb-[3px]">per month</div>
            </div>

            <div className="mt-2 text-[11px] text-white/60">
              12 months for <span className="text-white/90">43.08 $</span>{" "}
              <span className="line-through">(71.94 $)</span>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-2.5">
              <div className="h-12 w-20 rounded-lg bg-white/10 flex items-center justify-center text-white/50 text-[10px]">
                demo
              </div>
              <div className="text-[11px] text-white/80 leading-tight">
                View demo of <span className="text-[#88a7ff]">Pro</span>
                <br />
                <span className="text-[#88a7ff]">Plan</span>
              </div>
            </div>

            <button
              className="
                mt-auto pt-6 w-full rounded-xl py-3.5 text-sm font-bold text-white
                bg-[#5b87ff] hover:brightness-110 transition
              "
            >
              Try for Free →
            </button>
          </div>

          {/* Supernova (Most popular) */}
          <div
            className="
              relative rounded-2xl bg-[#0b0f14] border border-[#7b78ff]
              shadow-[0_14px_60px_rgba(123,120,255,0.35)]
              p-7 pt-12 min-h-[380px] flex flex-col
              transition duration-300 ease-out
              hover:-translate-y-2 hover:scale-[1.03]
              hover:shadow-[0_22px_90px_rgba(255,79,179,0.35)]
            "
          >
            <div
              className="
                absolute top-0 left-0 right-0 h-9 rounded-t-2xl
                flex items-center justify-center text-[10px] font-bold text-white
                bg-gradient-to-r from-[#6f7dff] to-[#ff4fb3]
              "
            >
              MOST POPULAR
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-white text-sm font-semibold">Supernova</h3>
              <span className="rounded-md bg-[#1fe38a] px-2 py-1 text-[9px] font-bold text-black">
                5 MONTHS FREE
              </span>
            </div>

            <div className="mt-4 flex items-end gap-2 text-white">
              <div className="text-3xl font-extrabold">9.99 $</div>
              <div className="text-sm opacity-60 line-through pb-[2px]">16.65 $</div>
              <div className="text-xs opacity-70 pb-[3px]">per month</div>
            </div>

            <div className="mt-2 text-[11px] text-white/60">
              12 months for <span className="text-white/90">119.88 $</span>{" "}
              <span className="line-through">(200.28 $)</span>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-2.5">
              <div className="h-12 w-20 rounded-lg bg-white/10 flex items-center justify-center text-white/50 text-[10px]">
                demo
              </div>
              <div className="text-[11px] text-white/80 leading-tight">
                View demo of <span className="text-[#ff77cc]">Supernova</span>
                <br />
                <span className="text-[#ff77cc]">Plan</span>
              </div>
            </div>

            <button
              className="
                mt-auto pt-6 w-full rounded-xl py-3.5 text-sm font-bold text-white
                bg-gradient-to-r from-[#6f7dff] to-[#ff4fb3]
                hover:brightness-110 transition
              "
            >
              Try for Free →
            </button>
          </div>

          {/* Lifetime */}
          <div
            className="
              rounded-2xl bg-[#0b0f14] border border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              p-7 min-h-[360px] flex flex-col
              transition duration-300 ease-out
              hover:-translate-y-2 hover:scale-[1.02]
              hover:shadow-[0_18px_70px_rgba(255,177,0,0.25)]
            "
          >
            <div className="flex items-center justify-between">
              <h3 className="text-white text-sm font-semibold">Lifetime</h3>
              <span className="rounded-md bg-[#ffb100] px-2 py-1 text-[9px] font-bold text-black">
                ONE-TIME PAYMENT
              </span>
            </div>

            <div className="mt-4 flex items-end gap-2 text-white">
              <div className="text-3xl font-extrabold">399.00 $</div>
            </div>

            <div className="mt-2 text-[11px] text-white/60">
              Save over <span className="text-white/90">900 $</span> in 5 years
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-2.5">
              <div className="h-12 w-20 rounded-lg bg-white/10 flex items-center justify-center text-white/50 text-[10px]">
                demo
              </div>
              <div className="text-[11px] text-white/80 leading-tight">
                View demo of <span className="text-[#ff88d8]">Supernova Lifetime</span>
                <br />
                <span className="text-[#ff88d8]">Plan</span>
              </div>
            </div>

            <button
              className="
                mt-auto pt-6 w-full rounded-xl py-3.5 text-sm font-extrabold text-black
                bg-[#ffb100] hover:brightness-110 transition
              "
            >
              Activate Now →
            </button>
          </div>
        </div>

        {/* Monthly extra cards */}
        {billing === "monthly" && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[3, 5, 7].map((price) => (
              <div
                key={price}
                className="
                  rounded-2xl bg-[#0b0f14] border border-white/10
                  shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                  p-6 min-h-[220px] flex flex-col items-center justify-center
                  transition duration-300 ease-out
                  hover:-translate-y-2 hover:scale-[1.02]
                  hover:shadow-[0_18px_70px_rgba(255,79,179,0.18)]
                "
              >
                <div className="text-white text-sm font-semibold mb-3">
                  Monthly Plan
                </div>
                <div className="text-white text-4xl font-extrabold">
                  {price}$
                </div>
              </div>
            ))}
          </div>
        )}

        {/* green info bar */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[11px] text-white/80 max-w-2xl">
            <span className="inline-flex h-3 w-3 rounded-full bg-[#1fe38a]" />
            <p>
              14 days risk-free: 7 free + 7 with a money-back guarantee. Try it
              without paying. We'll refund your money if it's not for you.
            </p>
          </div>
        </div>

        {/* section title */}
        <h4 className="mt-8 text-center text-white font-semibold text-sm">
          Everything you can unlock with the{" "}
          <span className="text-[#ff4fb3]">Plan Supernova</span>
        </h4>

        {/* feature icons row */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {[
            "Unlimited reminders",
            "Memory everywhere",
            "Multi-calendar integration",
            "Memory trunk",
            "Create & manage lists",
            "Friend-to-friend reminders",
            "Long-term memory",
            "Daily briefing",
            "Image actions",
            "Full control dashboard",
            "Priority support",
          ].map((label, i) => (
            <div
              key={i}
              className="
                w-[88px] h-[68px] rounded-xl bg-[#0b0f14]
                border border-white/10 flex flex-col items-center justify-center
                text-[9px] text-white/80 text-center leading-tight
                shadow-[0_6px_18px_rgba(0,0,0,0.5)]
                transition hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(255,79,179,0.18)]
              "
            >
              <div className="mb-1 h-5 w-5 rounded-md bg-white/10" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlan;
