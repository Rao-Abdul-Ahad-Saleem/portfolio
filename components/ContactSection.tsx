import React from 'react';
import { Mail, ExternalLink, FileText, CheckCircle2, Send } from 'lucide-react';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  contactForm: ContactFormState;
  onFormChange: (form: ContactFormState) => void;
  formSubmitted: boolean;
  onSubmit: (e: React.FormEvent) => void;
  copiedEmail: boolean;
  onCopyEmail: () => void;
  isSubmitting?: boolean;
  submitError?: string | null;
}

export default function ContactSection({
  contactForm,
  onFormChange,
  formSubmitted,
  onSubmit,
  copiedEmail,
  onCopyEmail,
  isSubmitting,
  submitError
}: ContactSectionProps) {
  return (
    <section id="contact" className="space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <div className="text-xs font-mono uppercase tracking-wider text-[#FF5A1F] flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5" />
          Direct Communication
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Get in Touch or Review Full Dossier
        </h2>
        <p className="text-sm text-slate-400 max-w-xl">
          Currently preparing for Fall 2027 graduate admissions across interdisciplinary master's programs in digital innovation, business management, and technology systems, while exploring collaborative digital product engineering initiatives.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Left Info Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-slate-400">Direct Contact</div>
              <div className="text-sm font-semibold text-white">Abdul Ahad Saleem</div>
              <div className="text-xs text-slate-400 font-mono">Lahore, Graduate Applicant</div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <button
                onClick={onCopyEmail}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between border border-slate-700/60 transition-colors"
              >
                <span className="truncate">ahadsaleemt124@gmail.com</span>
                <span className="text-[10px] text-[#FF5A1F] font-bold ml-2 shrink-0">
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </span>
              </button>

              <a
                href="https://www.linkedin.com/in/abdul-ahad-saleem-41162922b/"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-xs font-medium text-slate-200 flex items-center justify-between border border-slate-700/60 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  LinkedIn Profile
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://github.com/Rao-Abdul-Ahad-Saleem"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-xs font-medium text-slate-200 flex items-center justify-between border border-slate-700/60 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  GitHub Repositories
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Études en France Badge */}
          <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/30 text-xs text-slate-400 flex items-center gap-3">
            <FileText className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Academic Dossier, Transcripts & Statement of Purpose available upon request.</span>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="md:col-span-3">
          <form
            onSubmit={onSubmit}
            className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g., Prof. Sarah Jenkins"
                  value={contactForm.name}
                  onChange={(e) => onFormChange({ ...contactForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#FF5A1F] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="contact@domain.com"
                  value={contactForm.email}
                  onChange={(e) => onFormChange({ ...contactForm, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#FF5A1F] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Message / Inquiry</label>
              <textarea
                rows={4}
                name="message"
                required
                placeholder="Regarding graduate application review, technical inquiry, or digital product collaboration..."
                value={contactForm.message}
                onChange={(e) => onFormChange({ ...contactForm, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#FF5A1F] transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formSubmitted || isSubmitting}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FF5A1F] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 transition-all disabled:opacity-50"
            >
              {formSubmitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  Message Dispatched! Thank You.
                </>
              ) : isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      Transmitting Inquiry...
                </>
              ) : (
                <>
                <Send className="w-4 h-4" />
      Transmit Direct Inquiry
                </>
              )}
            </button>
            {submitError && (
              <p className="text-[11px] font-mono text-red-400 text-center mt-1">
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
