import React from 'react';
import { Sparkles, TrendingUp, Code2, Cpu } from 'lucide-react';

const PILLARS = [
  {
    icon: TrendingUp,
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    iconColor: 'text-[#FF5A1F]',
    title: '1. Market & Supply Friction',
    body: 'Real businesses fail at the physical touchpoint—inefficient wholesale bazaars like Lahore’s Shah Alam, undocumented artisan inventories, or broken urban supply routes. I leverage formal E-Commerce training to dissect margins, channel friction, and customer acquisition realities.',
    application: 'Application: Shah Alam Direct & VIRSA Platform'
  },
  {
    icon: Code2,
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    iconColor: 'text-amber-400',
    title: '2. Full-Stack Systems Design',
    body: 'Ideas are useless without scalable implementations. I build resilient full-stack systems with Next.js, Node.js, Express, and structured databases (PostgreSQL/MongoDB). From idempotent webhook listeners to optimistic client-side UI updates, architecture must sustain traffic.',
    application: 'Application: SpeakSilq, Mama\'s Medicine & Custom APIs'
  },
  {
    icon: Cpu,
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    title: '3. Outcome Systems (GaaS)',
    body: 'As generative models commoditize simple CRUD apps, the next generation of digital products are Service-as-Software engines. They execute the underlying operational burden for the consumer rather than handing them an empty dashboard to manage.',
    application: 'Application: MIAGE 2IS Research Direction'
  }
];

export default function DualCompetenceThesis() {
  return (
    <section id="thesis" className="space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <div className="text-xs font-mono uppercase tracking-wider text-[#FF5A1F] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Strategic Foundation
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          The Dual Competence: Why E-Commerce Strategy Multiplies Technical Engineering
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
          Pure developers often build features without unit economic context. Pure business managers lack the systems architecture to construct what they visualize. My engineering trajectory connects ground-level supply reality with robust digital platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div key={pillar.title} className="p-6 rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-900/30 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className={`w-10 h-10 rounded-lg ${pillar.iconBg} border flex items-center justify-center ${pillar.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.body}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                {pillar.application}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
