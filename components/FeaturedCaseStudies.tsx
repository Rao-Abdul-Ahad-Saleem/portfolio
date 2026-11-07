import React from 'react';
import { Layers, ChevronRight, X, Terminal, Target, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data';

interface FeaturedCaseStudiesProps {
  selectedProject: Project | null;
  onSelectProject: (project: Project | null) => void;
}

export default function FeaturedCaseStudies({ selectedProject, onSelectProject }: FeaturedCaseStudiesProps) {
  return (
    <>
      <section id="projects" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF5A1F] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Interactive Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Products & Strategic Platforms Built
            </h2>
            <p className="text-sm text-slate-400">
              Click any case study to open the deep-dive architecture, business logic, and tech stack details.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500">
            Showing 4 Key Production & Pilot Deliverables
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/90 hover:border-orange-500/50 transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Glow corner */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#FF5A1F]/10 rounded-full blur-2xl group-hover:bg-[#FF5A1F]/20 transition-all"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-slate-800/90 text-amber-400 border border-slate-700">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1">
                    Deep Dive
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#FF5A1F] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {proj.heroSummary}
                </p>

                {/* Quick Metric Pills */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {proj.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 rounded bg-slate-950/60 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 font-mono truncate">{m.label}</div>
                      <div className="text-xs font-bold text-slate-200 mt-0.5">{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                  {proj.stack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {tech}
                    </span>
                  ))}
                  {proj.stack.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{proj.stack.length - 4} more
                    </span>
                  )}
                </div>

                <button className="text-[#FF5A1F] font-medium text-xs flex items-center gap-1 group-hover:underline">
                  Inspect
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL: PROJECT DEEP DIVE */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/80 backdrop-blur-sm animate-fadeIn mb-0 mt-20">
          <div
            className="bg-[#0D121F] border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8   "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => onSelectProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close details modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FF5A1F]/10 text-[#FF5A1F] border border-orange-500/20 font-semibold">
                  {selectedProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">{selectedProject.timeline}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-300">
                {selectedProject.heroSummary}
              </p>
            </div>

            {/* Metric Row */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs font-mono text-slate-400">{m.label}</div>
                  <div className="text-base sm:text-lg font-bold text-[#FF5A1F]">{m.val}</div>
                </div>
              ))}
            </div>

            {/* Problem vs Strategy */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  Market Inefficiency / Friction
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedProject.businessProblem}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Commercial & Product Strategy
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedProject.solutionStrategy}
                </p>
              </div>
            </div>

            {/* Technical Implementation Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                Engineering Decisions & Implementation Notes
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.techHighlights.map((point, index) => (
                  <li key={index} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] mt-1.5 shrink-0"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Tech Stack Tags */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-slate-400">Complete Technology Stack:</div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Case Study Dossier • Abdul Ahad Saleem
              </span>
              <button
                onClick={() => onSelectProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      

      
    </>
  );
}
