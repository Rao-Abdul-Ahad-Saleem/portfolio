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
    title: 'Shah Alam Wholesale Arbitrage',
    badge: 'Direct-to-Consumer Commerce Pilot',
    category: 'E-Commerce Experimentation',
    timeline: 'Independent Market Pilot',
    heroSummary: 'High-margin consumer electronics pilot bridging the geographic commute barrier between Lahore’s physical wholesale hub (Shah Alam Market) and remote regional consumers.',
    metrics: [
      { label: 'Gross Margin', val: '38% Net' },
      { label: 'Fulfillment Time', val: '< 24 Hours' },
      { label: 'Return Rate', val: '< 2.4%' }
    ],
    businessProblem: 'Shah Alam Market in Lahore offers top-tier wholesale pricing on consumer electronics (AirPods, audio peripherals), but consumers outside central Lahore or in suburban cities face 2-3 hour grueling commutes, chaotic wholesale haggling, and zero return guarantees.',
    solutionStrategy: 'Built a lightweight direct-to-consumer digital acquisition channel with validated unit economics. By establishing physical wholesale sourcing ties and pairing them with digital quality verification, regional buyers received doorstep delivery at 30% below retail store prices.',
    techHighlights: [
      'Conducted iterative landing page split tests (A/B testing price elasticity and cash-on-delivery vs prepaid trust factors).',
      'Engineered an automated WhatsApp Business API order confirmation pipeline with direct GPS pin verification for courier handoff.',
      'Designed real-time inventory ledger tracking batch serials and local supplier warranty windows to eliminate dead-stock risk.',
      'Formulated customer acquisition cost (CAC) vs Lifetime Value (LTV) unit-economic model resulting in profitable 1st-order conversions.'
    ],
    stack: ['Direct E-Commerce', 'Unit Economics', 'Digital Acquisition', 'Supply Chain Routing', 'WhatsApp API', 'Customer Analytics'],
    liveUrl: '#',
    repoUrl: 'https://github.com'
  },
  {
    id: 'speak-silq',
    title: 'SpeakSilq Interactive Learning',
    badge: 'EdTech & Digital Platform',
    category: 'SaaS Product Architecture',
    timeline: 'Production Engineering Role',
    heroSummary: 'Interactive speech and language mastery platform engineered with dynamic audio streaming, modular curriculum states, and real-time pronunciation scoring.',
    metrics: [
      { label: 'Latency', val: '< 180ms Audio Render' },
      { label: 'State Sync', val: 'Redux Toolkit' },
      { label: 'Accessibility', val: 'WCAG 2.1 AA' }
    ],
    businessProblem: 'Conventional language apps offer static quizzes that fail to simulate practical verbal confidence. Users drop off within 7 days due to rigid interfaces and disconnected progress tracking.',
    solutionStrategy: 'Engineered an audio-first, conversational interface with micro-lesson modules, low-latency audio buffering, and instantaneous visual feedback loops that gamify pronunciation improvement.',
    techHighlights: [
      'Developed modular interactive audio workout components using the Web Audio API with synchronized waveform visualization.',
      'Implemented resilient optimistic UI updates with Redux Toolkit to prevent interaction lag during multi-step exercises.',
      'Constructed RESTful session orchestration endpoints ensuring zero progress loss during network interruptions.',
      'Built custom responsive styling and intuitive keyboard navigation for accessibility.'
    ],
    stack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'Web Audio API', 'Tailwind CSS', 'REST APIs'],
    liveUrl: '#',
    repoUrl: 'https://github.com'
  },
  {
    id: 'mamas-medicine',
    title: "Mama's Medicine Health-Tech",
    badge: 'Healthcare Commerce Workflow',
    category: 'Full-Stack Digital Product',
    timeline: 'Client Product Engineering',
    heroSummary: 'A dependable prescription medicine and wellness procurement platform engineered to demystify complex medical inventories for domestic caregivers.',
    metrics: [
      { label: 'Order Processing', val: 'Automated Triaging' },
      { label: 'Data Security', val: 'Encrypted Records' },
      { label: 'Mobile Conversion', val: '+44% uplift' }
    ],
    businessProblem: 'Procuring recurring chronic prescriptions in developing markets is fraught with counterfeit stock risks, erratic pharmacy inventory, and confusing chemical-to-brand generic names.',
    solutionStrategy: 'Engineered an intuitive mobile-first digital pharmacy workflow with smart generic search substitutes, prescription upload verification pipeline, and scheduled auto-refill triggers.',
    techHighlights: [
      'Built a fault-tolerant multi-file prescription scanning and upload module with client-side image downscaling prior to secure S3 storage.',
      'Implemented clean backend search indexing matching both salt compounds and consumer brand trade names.',
      'Designed a secure checkout workflow complying with medication purchase compliance requirements and digital audit trails.',
      'Created a responsive pharmacy dispatch dashboard with instant courier tracking hooks.'
    ],
    stack: ['MERN Stack', 'Express REST', 'JWT Auth', 'Multer/S3 Pipeline', 'Tailwind CSS', 'PostgreSQL / Mongo'],
    liveUrl: '#',
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
      'PostgreSQL / Neon DB',
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
