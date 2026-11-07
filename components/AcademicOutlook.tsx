import React from 'react';
import { Building, TrendingUp, Layers, Cpu, Target, GraduationCap } from 'lucide-react';

const PILLARS = [
  {
    icon: TrendingUp,
    iconColor: 'text-[#FF5A1F]',
    title: '1. Business Strategy & Economic Viability',
    body: 'Synthesizing undergraduate foundations in E-Commerce (unit economics, market dynamics, cash flow runway) with technical architecture—ensuring software development decisions translate directly into sustainable commercial yield.'
  },
  {
    icon: Layers,
    iconColor: 'text-amber-400',
    title: '2. Product Innovation & Market Friction',
    body: 'Deepening practical frameworks in lean validation, user behavior analysis, and rapid prototyping to dismantle physical supply friction (e.g., wholesale market arbitrage) and convert it into high-velocity digital solutions.'
  },
  {
    icon: Cpu,
    iconColor: 'text-emerald-400',
    title: '3. Autonomous Systems & Outcome-Driven Software (GaaS)',
    body: 'Pioneering outcome-driven platforms where multi-agent pipelines and predictive models execute end-to-end user goals autonomously, eliminating the manual operational overhead demanded by traditional SaaS models.'
  },
  {
    icon: Target,
    iconColor: 'text-blue-400',
    title: '4. Modern Marketing & Growth Engineering',
    body: 'Investigating customer acquisition mechanics, organic search signals, funnel friction diagnostics, and retention loops to build platforms with inherent network effects and high lifetime value.'
  }
];

export default function AcademicOutlook() {
  return (
    <section id="academic" className="space-y-8 scroll-mt-24">
      <div className="p-6 sm:p-10 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-slate-900/90 to-slate-900/80 relative overflow-hidden shadow-2xl">
        {/* Academic Crest Watermark Effect */}
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <GraduationCap className="w-64 h-64 text-amber-300" />
        </div>

        <div className="space-y-6 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Building className="w-3.5 h-3.5" />
            Graduate Studies Candidate • Digital Venture & Product Trajectory
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Master&apos;s Trajectory: Strategic Management, Innovation &amp; Intelligent Product Systems
          </h2>


          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Targeting interdisciplinary Master&apos;s programs at the intersection of <strong>Technology Management</strong>, <strong>Digital Innovation</strong>, and <strong>Intelligent Systems Engineering</strong>. My objective is to bridge full-stack engineering with executive-level strategy across four core pillars:
          </p>

          {/* The 4 Universal French University Master Pillars */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${pillar.iconColor}`} />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.body}</p>
                </div>
              );
            })}
          </div>

          {/* Jury Alignment Conclusion */}
          <div className="pt-4 border-t border-slate-800/80">
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-amber-300">The Synthesis:</strong> While my foundation in e-commerce and full-stack software development gives me the capability to architect and deploy functional digital products, graduate study provides the rigorous methodologies in business scaling, analytical decision-making, and applied AI needed to build and lead autonomous, outcome-oriented software enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
