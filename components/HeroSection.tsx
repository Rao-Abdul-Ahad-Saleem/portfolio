import React from 'react';
import { ArrowRight, Compass, GraduationCap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-4 sm:pt-14 space-y-8">
      {/* Status Pill */}
      {/* <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono shadow-sm">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span>Candidate: Master in Information Systems, Digital Innovation & Product Engineering • Études en France</span>
      </div> */}

      {/* Main Headline */}
      <div className="space-y-4 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
          Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-orange-400 to-amber-300">E-Commerce Strategy</span> with Full-Stack Software Architecture.
        </h1>
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
          Software is shifting from static SaaS subscriptions toward <strong className="text-white font-semibold">autonomous, outcome-driven systems (GaaS)</strong>. Users no longer want complex software that demands extra workforce to operate—they demand software that directly closes the commercial loop.
        </p>
      </div>

      {/* Secondary Subtitle with Concrete Thesis */}
      <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm max-w-3xl flex items-start gap-3.5">
        <div className="p-2 rounded-lg bg-orange-500/10 text-[#FF5A1F] shrink-0 mt-0.5">
          <Compass className="w-5 h-5" />
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Synthesizing a <strong>Bachelor’s in E-Commerce (CGPA 3.50)</strong> with hands-on <strong>Full-Stack Software Engineering</strong>. From engineering digital platforms for Pakistani craft preservation (VIRSA) and testing real-world wholesale electronic arbitrage (Shah Alam Market) to building health-tech portals (Mama's Medicine) and learning engines (SpeakSilq).
        </p>
      </div>

      {/* Action CTAs & Credentials Bar */}
      <div className="pt-2 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF5A1F] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-orange-600/25 transition-all group"
        >
          Explore Case Studies
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#academic"
          className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/80 hover:border-slate-500 text-slate-200 font-medium text-sm flex items-center gap-2 transition-all hover:bg-slate-800"
        >
          <GraduationCap className="w-4 h-4 text-amber-400" />
          Academic Alignment & Graduate Vision
        </a>
      </div>

      {/* Metric Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
        <div className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Academic Standing</div>
          <div className="text-base font-bold text-white mt-1">BS E-Commerce</div>
          <div className="text-xs text-amber-400 font-mono">CGPA 3.50 / 4.00</div>
        </div>
        <div className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Core Engineering</div>
          <div className="text-base font-bold text-white mt-1">Full-Stack MERN</div>
          <div className="text-xs text-slate-400 font-mono">Next.js & TypeScript</div>
        </div>
        <div className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Product Scope</div>
          <div className="text-base font-bold text-white mt-1">Wholesale to D2C</div>
          <div className="text-xs text-[#FF5A1F] font-mono">Arbitrage & Platforms</div>
        </div>
        <div className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Target Focus</div>
          <div className="text-base font-bold text-white mt-1">Graduate Studies</div>
          <div className="text-xs text-emerald-400 font-mono">Digital Innovation &amp; Tech Systems • Fall 2027</div>
        </div>
      </div>
    </section>
  );
}
