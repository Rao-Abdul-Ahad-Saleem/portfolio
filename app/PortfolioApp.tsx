'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '../data';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import DualCompetenceThesis from '../components/DualCompetenceThesis';
import FeaturedCaseStudies from '../components/FeaturedCaseStudies';
import TechnicalCompetenceMatrix from '../components/TechnicalCompetenceMatrix';
import AcademicOutlook from '../components/AcademicOutlook';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);
  const [contactForm, setContactForm] = useState<ContactFormState>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abdulahadsaleemt124@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formspree.io/f/meaadbod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(contactForm),
       
    });
    const result = await response.json();

    if(!response.ok){
      throw new Error(result.error || "Faild to send messagge");
    }

    setFormSubmitted(true)
    setContactForm({name: '', email: '', message: ''});

    setTimeout(()=> {
      setFormSubmitted(false);
    }, 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong');
    }finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-200 font-sans selection:bg-[#FF5A1F] selection:text-white antialiased">
      {/* Background Decorator Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#FF5A1F]/10 via-amber-500/5 to-transparent blur-3xl opacity-70"></div>
        <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[1800px] left-0 w-[600px] h-[600px] bg-orange-600/5 blur-[140px] rounded-full"></div>
      </div>

      <NavigationBar copiedEmail={copiedEmail} onCopyEmail={handleCopyEmail} />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24 space-y-28">
        <HeroSection />
        <DualCompetenceThesis />
        <FeaturedCaseStudies selectedProject={selectedProject} onSelectProject={setSelectedProject} />
        <TechnicalCompetenceMatrix activeSkillCategory={activeSkillCategory} onCategoryChange={setActiveSkillCategory} />
        <AcademicOutlook /> 
        <ContactSection
          contactForm={contactForm}
          onFormChange={setContactForm}
          formSubmitted={formSubmitted}
          onSubmit={handleFormSubmit}
          copiedEmail={copiedEmail}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      <Footer />
    </div>
  );
}
