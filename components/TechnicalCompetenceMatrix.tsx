import React from 'react';
import { Code2 } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data';

interface TechnicalCompetenceMatrixProps {
  activeSkillCategory: number;
  onCategoryChange: (index: number) => void;
}

export default function TechnicalCompetenceMatrix({ activeSkillCategory, onCategoryChange }: TechnicalCompetenceMatrixProps) {
  return (
    <section id="stack" className="space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <div className="text-xs font-mono uppercase tracking-wider text-[#FF5A1F] flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5" />
          Technical Execution
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Engineering Architecture & Competence Matrix
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl">
          Categorized technical skills balancing modern JavaScript/TypeScript application frameworks with scalable backends and commercial data logic.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {SKILLS_CATEGORIES.map((cat, idx) => {
          const Icon = cat.icon;
          const isActive = activeSkillCategory === idx;
          return (
            <button
              key={idx}
              onClick={() => onCategoryChange(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#FF5A1F] text-white shadow-sm shadow-orange-500/20'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {cat.category}
            </button>
          );
        })}
      </div>

      {/* Active Skills Display */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SKILLS_CATEGORIES[activeSkillCategory].items.map((skill, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/50 flex items-center gap-3 hover:border-slate-700 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF5A1F] to-amber-400 shrink-0"></div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
