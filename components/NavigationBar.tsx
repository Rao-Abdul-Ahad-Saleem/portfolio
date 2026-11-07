import React from 'react';
import { Mail, GraduationCap } from 'lucide-react';

interface NavigationBarProps {
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

export default function NavigationBar({ copiedEmail, onCopyEmail }: NavigationBarProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0B0F17]/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5A1F] to-amber-500 flex items-center justify-center font-bold text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-[#FF5A1F] transition-colors">
              Abdul Ahad Saleem
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Product Engineer & E-Commerce Technologist
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-slate-300">
          <a href="#thesis" className="hover:text-[#FF5A1F] transition-colors">Philosophy</a>
          <a href="#projects" className="hover:text-[#FF5A1F] transition-colors">Case Studies</a>
          <a href="#stack" className="hover:text-[#FF5A1F] transition-colors">Tech Matrix</a>
          <a href="#academic" className="hover:text-[#FF5A1F] transition-colors flex items-center gap-1 text-amber-400">
            <GraduationCap className="w-3.5 h-3.5" />
            Master's Vision
          </a>
          <a href="#contact" className="hover:text-[#FF5A1F] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onCopyEmail}
            className="text-xs font-mono px-3 py-1.5 rounded-md border border-slate-700 bg-slate-900/60 hover:border-slate-500 text-slate-300 flex items-center gap-1.5 transition-all active:scale-95"
            title="Copy Email Address"
          >
            <Mail className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span className="hidden sm:inline">{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
          </button>
          <a
            href="#contact"
            className="text-xs font-semibold px-3.5 py-1.5 rounded-md bg-[#FF5A1F] hover:bg-[#ff6c37] text-white shadow-sm shadow-orange-500/20 transition-all active:scale-95"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
