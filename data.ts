import { ShoppingBag, Code2, Database, Cpu } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  badge: string;
  category: string;
  timeline: string;
  heroSummary: string;
  metrics: { label: string; val: string }[];
  businessProblem: string;
  solutionStrategy: string;
  techHighlights: string[];
  stack: string[];
  liveUrl: string;
  repoUrl: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'virsa',
    title: 'VIRSA E-Commerce Platform',
    badge: 'Artisan Commerce Digitization',
    category: 'Full-Stack Platform',
    timeline: 'Product Capstone & Commercial Engine',
    heroSummary: 'End-to-end multi-vendor marketplace modernizing indigenous Pakistani artisan crafts by transforming fragmented, informal cataloging into structured digital inventory.',
    metrics: [
      { label: 'Catalog Scalability', val: '1,000+ SKUs' },
      { label: 'Payment Gateway', val: 'Stripe + Webhooks' },
      { label: 'Architecture', val: 'MERN Stack' }
    ],
    businessProblem: 'Indigenous artisans across traditional clusters face severe market isolation and middlemen exploitation. Without digital infrastructure, their high-margin craft products remain trapped in local bazaars without pricing transparency or global distribution channels.',
    solutionStrategy: 'Engineered an accessible vendor onboarding portal with automated image optimization, real-time localized currency conversion, and direct-to-artisan commission settlement algorithms.',
    techHighlights: [
      'Engineered dynamic category trees with nested sub-collections in MongoDB for non-standardized handmade goods.',
      'Implemented transactional webhooks with Stripe to reconcile order states reliably under fluctuating network conditions.',
      'Configured Cloudinary image pipeline with automated WebP compression, dropping page payload by 62% for 3G mobile users.',
      'Built a decoupled admin moderation dashboard with role-based access control (RBAC) for artisan verification.'
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Cloudinary', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com'
  },
  {
    id: 'shah-alam-arbitrage',
    title: 'Shah Alam Wholesale Arbitrage & Unit Economics Post-Mortem',
    badge: 'E-Commerce Pilot',
    category: 'E-Commerce Experimentation',
    timeline: 'Direct-to-Consumer Arbitrage',
    heroSummary: 'Direct-to-consumer commerce pilot bridging Lahore’s wholesale hubs with remote buyers, testing conversational conversion pipelines and diagnosing suburban last-mile Cash-on-Delivery (COD) failure points.',
    metrics: [
      { label: 'Gross Margin', val: '38%' },
      { label: 'Daily Volume', val: '6–8 Orders' },
      { label: 'Return Rate (RTO)', val: '~50%' }
    ],
    businessProblem: 'Wholesale markets like Shah Alam offer deep pricing advantages that non-metropolitan buyers cannot access due to commute constraints. However, serving suburban Pakistan via Cash-on-Delivery (COD) creates severe operational risk: intermittent mobile cellular coverage prevents couriers from confirming locations, while fulfillment transit delays trigger buyer cancellation and doorstep refusals.',
    solutionStrategy: 'Engineered a rapid conversational acquisition pipeline via targeted Meta Ads funneled straight into WhatsApp Business for real-time customer qualification, objection handling, and address collection. Sourced inventory just-in-time from Shah Alam wholesale suppliers to preserve a 38% gross product margin without tying up upfront capital in bulk warehousing.',
    techHighlights: [
      'Campaign & Pipeline Design: Deployed targeted Meta ad sets optimized for conversational click-to-WhatsApp conversions, capturing verified purchase intent without the friction of a multi-step web checkout.',
      'Logistics Routing Infrastructure: Integrated multi-courier dispatch using PostEx for suburban Cash-on-Delivery collections alongside Pakistan Post for peripheral regional shipping coverage.',
      'Forensic Post-Mortem Analysis: Diagnosed how high gross margin (38%) was completely absorbed by reverse logistics costs on a ~50% return rate caused by courier routing latencies and rural telecommunication blackouts.',
      'Venture Architecture Insight: Demonstrated why consumer acquisition is ineffective without real-time pre-dispatch confirmation algorithms and deep courier API reconciliation—driving my focus toward autonomous verification systems.'
    ],
    stack: [
      'Meta Ads Manager',
      'WhatsApp Business API',
      'PostEx Logistics',
      'Pakistan Post',
      'COD Unit Economics Modeling',
      'Reverse Logistics (RTO) Auditing'
    ],
    liveUrl: '#',
    repoUrl: 'https://github.com'
  },
  {
    id: 'speak-silq',
    title: 'SpeakSilq: AI-Driven Heritage Language Web Platform',
    badge: 'Production Digital Product',
    category: 'EdTech Web Platform',
    timeline: 'Client Project • Engineering Team Member',
    heroSummary: 'Responsive web platform supporting 28+ regional and heritage languages, featuring an AI-assisted curriculum replication pipeline, interactive study flashcards, and automated quiz evaluation engines.',
    metrics: [
      { label: 'Catalog Depth', val: '28+ Languages' },
      { label: 'Lesson Design', val: '10–15 Min Bites' },
      { label: 'Platform Scope', val: 'Responsive Web' }
    ],
    businessProblem: 'Mainstream language learning platforms consistently neglect regional, low-resource, and dialectal languages (Dari, Pashto, Punjabi, Kurdish, Sindhi), creating an unserved market of diaspora youth seeking connection to their roots. However, scaling human curriculum development across dozens of minor languages is prohibitively slow and expensive.',
    solutionStrategy: 'Collaborated as a core engineering team member under the team manager on a client contract to architect and deploy the dedicated web platform. Leveraged AI-accelerated development workflows (including Replit Agent prototyping) and designed an automated course replication pipeline: translating and structuring foundational lesson modules programmatically to bootstrap complete curriculum tracks in new languages in hours rather than months.',
    techHighlights: [
      'Automated Curriculum Pipeline: Engineered systemic logic to ingest existing validated course modules and utilize LLM transformations to programmatically duplicate entire language tracks, dramatically reducing time-to-market for 28+ regional dialects.',
      'Pedagogical Interactive Flow: Built responsive web flashcard decks with state-managed review queues and synchronized MCQ placement tests to enforce active recall and gamified retention mechanics.',
      'Full-Stack Web System: Developed frontend interfaces in React.js paired with Node.js and Express.js REST APIs, backed by a relational SQL schema configured for lesson hierarchies, user streaks, and progression tracking.',
      'Post-Deployment Dialect Analysis: Evaluated live community feedback (including diaspora discussions on Reddit), identifying acoustic limitations where generic AI voice synthesis lacks localized regional nuance—formulating technical insights on phonetic fine-tuning.'
    ],
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL / Relational SQL',
      'Replit Agent (Workflow Acceleration)',
      'LLM Curriculum Orchestration',
      'Tailwind CSS'
    ],
    liveUrl: 'https://speaksilq.com',
    repoUrl: 'https://github.com'
  },
  {
    id: 'soul-sighted',
    title: 'Soul Sighted: AI-Powered Relational Astrology Platform',
    badge: 'Production Digital Product',
    category: 'Headless Digital Architecture',
    timeline: 'Client Migration • Engineering Team Member',
    heroSummary: 'High-performance Next.js migration and AI integration for an astrology platform analyzing parent-child dynamics, replacing rigid Webflow limitations with custom dynamic frontend architecture and Xano backend APIs.',
    metrics: [
      { label: 'Architecture', val: 'Next.js + Xano' },
      { label: 'AI Engine', val: 'Parent-Child Dynamics' },
      { label: 'System Migration', val: 'No-Code → Modern Stack' }
    ],
    businessProblem: 'The client initially prototyped the platform using Webflow connected to Xano. While functional for static presentation, Webflow created severe bottlenecks when attempting to deliver complex, multi-variable dynamic user interfaces, interactive astrological chart generation, and personalized computational reporting for clients.',
    solutionStrategy: 'Collaborated directly under the engineering team manager on a client consulting engagement to rebuild the platform architecture. Migrated the entire presentation layer from Webflow to a custom, responsive Next.js frontend while retaining and optimizing Xano for scalable relational database records and REST endpoints. Developed and integrated a specialized external AI service to process complex birth data and generate personalized parent-child relational dynamic reports.',
    techHighlights: [
      'No-Code to Code Migration: Decoupled the monolithic Webflow frontend and re-architected it into a modular Next.js application, drastically improving dynamic rendering capabilities, load performance, and UI state responsiveness.',
      'Headless Backend Orchestration: Integrated complex RESTful API workflows with Xano BaaS, managing authenticated user sessions, relational chart entries, and dynamic content feeds with structured JSON payloads.',
      'Astrological AI Service Integration: Engineered the integration pipeline for an external AI computation service that evaluates astrological inputs and outputs nuanced, personalized relationship analyses for parenting dynamics.',
      'Client Consultation & Problem Resolution: Resolved deep-seated CMS data-binding limitations by architecting a modern headless web system that gave the client full control over customized interactive user journeys.'
    ],
    stack: [
      'Next.js',
      'React.js',
      'Xano (Backend & Database)',
      'External AI Service Integration',
      'RESTful API Orchestration',
      'Tailwind CSS',
      'Headless Architecture'
    ],
    liveUrl: 'https://soul-sighted.com',
    repoUrl: 'https://github.com'
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: 'Product & Commerce Strategy',
    icon: ShoppingBag,
    items: [
      'E-Commerce Unit Economics (CAC/LTV)',
      'Wholesale-to-Digital Arbitrage',
      'Digital Supply Chain & Inventory Schemas',
      'Outcome-Driven Software (GaaS)',
      'Product Requirement Documentation (PRD)',
      'Payment Gateway Integration (Stripe)'
    ]
  },
  {
    category: 'Frontend & Architecture',
    icon: Code2,
    items: [
      'Next.js 14 / App Router',
      'React.js (Hooks, Context, Patterns)',
      'TypeScript',
      'Tailwind CSS & Modern UI Tokens',
      'State Management (Redux Toolkit, Zustand)',
      'Web Performance & Core Web Vitals'
    ]
  },
  {
    category: 'Backend & Data Systems',
    icon: Database,
    items: [
      'Node.js & Express.js',
      'RESTful Microservices & Webhooks',
      'PostgreSQL / Relational SQL',
      'MongoDB & Mongoose Schema Design',
      'Xano (No-Code/Low-Code Backend Logic)',
      'Prisma ORM & Connection Pooling'
    ]
  },
  {
    category: 'DevOps & Tooling',
    icon: Cpu,
    items: [
      'Docker & Containerized Micro-apps',
      'Git & Automated CI/CD Pipelines',
      'Postman API Testing & Mocking',
      'Vercel & Cloudflare Edge Deployments',
      'Linux VPS Administration',
      'AWS S3 Asset Management'
    ]
  }
];