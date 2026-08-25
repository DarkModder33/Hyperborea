'use client';

import { useState } from 'react';
import { ArrowRight, Zap, Shield, LineChart } from 'lucide-react';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00ff9f] to-[#a855f7] text-lg font-bold text-black">
              H
            </div>
            <span className="text-2xl font-semibold tracking-tight">Hyperion</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="transition hover:text-[#00ff9f]">Services</a>
            <a href="#intelligence" className="transition hover:text-[#00ff9f]">Intelligence</a>
            <a href="#pricing" className="transition hover:text-[#00ff9f]">Pricing</a>
            <button
              onClick={() => setChatOpen(true)}
              className="flex items-center gap-2 rounded-full bg-[#00ff9f] px-6 py-2 font-semibold text-black transition hover:bg-white"
            >
              Ask Hyperion AI <Zap className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#00ff9f_0.5px,transparent_1px)] opacity-10 [background-size:50px_50px]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00ff9f]/30 px-4 py-2">
            <span className="font-mono text-sm text-[#00ff9f]">LIVE AI ORACLE ONLINE</span>
          </div>
          <h1 className="mb-6 text-6xl font-bold tracking-tighter glow-green md:text-8xl">
            Intelligence.
            <br />
            Execution.
            <br />
            <span className="bg-gradient-to-r from-[#00ff9f] via-purple-400 to-[#a855f7] bg-clip-text text-transparent">
              Hyperion
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400 md:text-2xl">
            AI-powered market intelligence plus elite tech services.
            Built for builders who need results, not clutter.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href="#services"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-semibold text-black transition hover:bg-[#00ff9f]"
            >
              Book a service <ArrowRight className="transition group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setChatOpen(true)}
              className="rounded-2xl border border-[#a855f7] px-10 py-5 text-lg font-semibold glow-purple transition hover:bg-white/5"
            >
              Open Intelligence Hub
            </button>
          </div>
          <p className="mt-20 text-sm text-gray-500">
            Simulation-first trading tools · Remote IT execution · Greater Philadelphia + worldwide
          </p>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">Two engines. One platform.</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="card-hover rounded-3xl border border-white/10 bg-zinc-900/50 p-10">
              <Shield className="mb-8 h-12 w-12 text-[#00ff9f]" />
              <h3 className="mb-4 text-3xl font-semibold">Tech Execution</h3>
              <p className="mb-6 text-gray-400">
                Websites, device repair, software customization, and remote IT.
                Fast scoping. Clear pricing. Work that actually ships.
              </p>
              <a href="mailto:contact@tradehax.net" className="text-sm font-medium text-[#00ff9f]">
                Email contact@tradehax.net →
              </a>
            </article>
            <article id="intelligence" className="card-hover rounded-3xl border border-white/10 bg-zinc-900/50 p-10">
              <LineChart className="mb-8 h-12 w-12 text-[#a855f7]" />
              <h3 className="mb-4 text-3xl font-semibold">AI Intelligence</h3>
              <p className="mb-6 text-gray-400">
                Simulation-based scanners and market insights. No brokerage.
                No live trade execution. Education and research first.
              </p>
              <button onClick={() => setChatOpen(true)} className="text-sm font-medium text-[#a855f7]">
                Preview the Oracle →
              </button>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold">Simple starting prices</h2>
          <p className="mb-12 text-gray-400">Get paid work live in week one. Productize the rest.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 p-8 text-left">
              <p className="text-sm uppercase tracking-widest text-[#00ff9f]">Services</p>
              <p className="mt-3 text-3xl font-semibold">From $199</p>
              <p className="mt-3 text-gray-400">Website builds, repairs, and custom software scoped per job.</p>
            </div>
            <div className="rounded-3xl border border-[#a855f7]/40 p-8 text-left">
              <p className="text-sm uppercase tracking-widest text-[#a855f7]">Intelligence</p>
              <p className="mt-3 text-3xl font-semibold">$19 / month</p>
              <p className="mt-3 text-gray-400">Scanner access and AI research notes. Simulation only.</p>
            </div>
          </div>
        </div>
      </section>

      {chatOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6">
          <div className="w-full max-w-lg rounded-3xl border border-[#00ff9f]/30 bg-zinc-900 p-8">
            <h3 className="mb-6 flex items-center gap-3 text-2xl">
              Hyperion AI Oracle
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">PREVIEW</span>
            </h3>
            <div className="mb-6 h-48 rounded-2xl bg-black/50 p-6 text-gray-400">
              Ask about a website build, a repair, or a market research scenario. This preview is not live trading advice.
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="w-full rounded-2xl border border-white/30 py-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
