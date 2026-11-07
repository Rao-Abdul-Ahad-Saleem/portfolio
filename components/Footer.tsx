import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-8 relative z-10 text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span>Designed with Next.js architecture • Prepared for Graduate Studies Candidacy Review</span>
        </div>
        <div>
          © 2026-2027 Abdul Ahad Saleem. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
