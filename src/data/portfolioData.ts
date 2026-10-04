import { ProjectItem, WorkflowStage, FaqItem, ServiceDetail } from '../types/portfolio';

export const PERSONAL_INFO = {
  brandName: 'M.ASIF',
  fullName: 'M. Asif',
  role: 'Web Developer & UI/UX Designer',
  tagline: 'Digital experiences built to perform.',
  heroHeadline: 'Modern websites built for growing businesses.',
  heroSupporting: 'Fast, responsive websites designed to turn attention into growth.',
  supportingPhrase: 'Fast, responsive websites designed to turn attention into growth.',
  location: 'India · Serving Global Clients',
  specialization: 'WordPress · WooCommerce · Responsive Web Design',
  focus: 'Design · Performance · User Experience',
  availability: 'Available for new projects',
  email: 'aasifkhan6367135747@gmail.com',
  whatsappNumber: '+91 8005 854 848',
  whatsappUrl: 'https://wa.me/918005854848?text=Hi%20M.ASIF%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.',
};

export const ABOUT_SPECIALIZATIONS = [
  { label: 'WordPress & Elementor Pro', desc: 'Custom theme builds with visual client management' },
  { label: 'WooCommerce & E-Commerce', desc: 'Secure payment flows, product variations & smooth carts' },
  { label: 'Business Websites', desc: 'Credibility, service clarity & high-converting lead pipelines' },
  { label: 'Landing Pages', desc: 'Focused campaign pages built to maximize ad ROI' },
  { label: 'Website Redesign', desc: 'Modernizing outdated templates with zero SEO loss' },
  { label: 'Responsive Web Design', desc: 'Flawless execution from 360px phones to 4K displays' },
  { label: 'Performance & Speed', desc: 'Sub-second paint times, clean code & asset caching' },
  { label: 'Basic On-Page SEO', desc: 'Semantic hierarchy, Schema.org rich tags & social cards' },
  { label: 'UI/UX Design', desc: 'Intuitive user journeys, readable typography & visual balance' },
  { label: 'Custom Development', desc: 'Clean HTML5, modern CSS3 & lightweight JavaScript' },
];

export const WORK_PROJECTS: ProjectItem[] = [
  {
    id: 'luxury-fashion-store',
    number: '01',
    title: 'Aura Atelier — Luxury Apparel & Goods',
    category: 'Fashion & Luxury',
    industry: 'Fashion & E-Commerce',
    shortDescription: 'Minimalist high-fashion online boutique built for effortless browsing, swift checkout, and tactile product imagery.',
    services: ['WooCommerce', 'UI/UX Design', 'Custom Responsive Theme', 'Speed Optimization'],
    objective: 'Create an editorial, distraction-free shopping experience for a high-end apparel label, reducing cart abandonment on mobile devices.',
    whatWasBuilt: 'A custom WooCommerce store with lookbook navigation, instant drawer cart, dynamic size/color swatches, and Stripe express checkout.',
    features: [
      'Interactive Product Catalog with instant collection filters',
      'Dynamic Size & Color Variant Pickers with real-time stock status',
      'Slide-over Mini Cart with Free Shipping threshold progress bar',
      'Stripe & PayPal Express 1-click checkout flow',
      'Curated Editorial Lookbook with direct product links'
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Modern CSS', 'JavaScript'],
    responsiveApproach: 'Engineered sticky bottom purchase actions on handheld screens, with fluid typography that never breaks across small viewports.',
    performanceConsiderations: 'Next-gen WebP image compression with blur-up preloading, achieving sub-1.2s Largest Contentful Paint.',
    seoConsiderations: 'Product schema structured data, breadcrumb trail markup, and optimized social share OpenGraph tags.',
    conversionStrategy: 'Eliminated multi-page checkout hurdles down to a streamlined 2-step process, lifting mobile completion rates.',
    deliverables: ['Custom WooCommerce Website', 'Admin Inventory Guide', 'Payment Gateway Integration', '30-Day Support'],
    accentColor: '#C5A880',
    demoUrl: 'https://demo.aurafashion.masif.dev',
    featured: true
  },
  {
    id: 'modern-dental-clinic',
    number: '02',
    title: 'Veritas Dental & Orthodontic Specialists',
    category: 'Dental',
    industry: 'Healthcare & Medical',
    shortDescription: 'Trustworthy, calm clinical digital presence designed to eliminate patient anxiety and streamline consultation bookings.',
    services: ['WordPress Development', 'Appointment Engine', 'UI/UX Design', 'Local SEO'],
    objective: 'Transform local search traffic into booked appointments with an approachable, credentialed clinic presence.',
    whatWasBuilt: 'A comprehensive medical clinic portal featuring online appointment scheduling, doctor verification profiles, treatment pricing, and Google Maps sync.',
    features: [
      'Integrated Online Patient Consultation Scheduler',
      'Doctor & Specialist Bios with Medical Council credentials',
      'Before & After Smile Makeover Interactive Slider',
      'Transparent Treatment Cost Breakdown & Insurance FAQ',
      'Click-to-Call Emergency Dental Hotline in sticky header'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Booking Engine API', 'CSS Grid', 'Schema.org'],
    responsiveApproach: 'Thumb-friendly floating appointment trigger on mobile viewports for quick emergency bookings.',
    performanceConsiderations: 'Clean DOM tree without bulky third-party scripts, loading in under 1 second on mobile networks.',
    seoConsiderations: 'Complete LocalBusiness and Physician Schema.org markup for Google Maps and local search packs.',
    conversionStrategy: 'Placed reassurance markers (sanitization, credentials, transparent pricing) directly adjacent to booking triggers.',
    deliverables: ['Responsive Clinic Website', 'Appointment Management Setup', 'Local SEO Optimization', 'Patient Form Routing'],
    accentColor: '#38BDF8',
    demoUrl: 'https://demo.veritasdental.masif.dev',
    featured: true
  },
  {
    id: 'premium-real-estate',
    number: '03',
    title: 'Monolith Architectural Residences',
    category: 'Real Estate & Architecture',
    industry: 'Real Estate',
    shortDescription: 'Cinematic property portal showcasing premium residences with interactive floorplans and direct broker inquiry channels.',
    services: ['Website Development', 'Property Filter UI', 'Responsive Design', 'Interactive Maps'],
    objective: 'Present multi-million dollar architectural homes with visual grandeur while providing fast property searches for high-net-worth buyers.',
    whatWasBuilt: 'A dark-mode architectural real estate platform with faceted search by location, bedrooms, and price, complete with agent WhatsApp chat.',
    features: [
      'Faceted Property Search & Instant Filter by Price, Location, and Style',
      'Full-Bleed High-Res Architectural Photo Gallery with Virtual Tours',
      'Interactive Floorplan Viewer with dimension callouts',
      'Integrated Financial Mortgage Estimator',
      'Direct WhatsApp and Private Viewing Scheduling Desk'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Custom JavaScript', 'Tailwind CSS', 'Map Integration'],
    responsiveApproach: 'Full-bleed imagery scaled dynamically with swipeable mobile carousels and sticky agent contact cards.',
    performanceConsiderations: 'Aggressive image optimization with AVIF format support, reducing gallery payload by over 75%.',
    seoConsiderations: 'RealEstateListing schema tags, neighborhood guides, and optimized meta descriptions for prime property terms.',
    conversionStrategy: 'Multiple lead avenues: Download PDF Brochure, Schedule Viewing, or Instant WhatsApp Chat.',
    deliverables: ['Custom Real Estate Portal', 'Search & Filter Engine', 'Agent Profile Cards', 'Brochure Generator'],
    accentColor: '#E2B887',
    demoUrl: 'https://demo.monolithrealty.masif.dev',
    featured: true
  },
  {
    id: 'boutique-fitness-gym',
    number: '04',
    title: 'Apex Athletic Club & Combat Gym',
    category: 'Fitness & Gym',
    industry: 'Gym & Fitness',
    shortDescription: 'High-energy fitness club web experience highlighting training disciplines, weekly class schedules, and trial pass registration.',
    services: ['WordPress Development', 'Timetable Engine', 'Mobile UX', 'Membership Tiers'],
    objective: 'Drive recurring gym memberships and capture local trial pass leads through a bold, athletic digital presence.',
    whatWasBuilt: 'A kinetic, high-contrast fitness website with day-by-day filterable class timetables, coach credentials, and free trial pass intake.',
    features: [
      'Interactive Weekly Class Schedule (HIIT, Boxing, Strength, Yoga)',
      'Coach Profiles with certifications and 1-on-1 consultation booking',
      'Transparent 3-Tier Membership Comparison Table',
      'Free 1-Day Trial Pass Lead Funnel with SMS confirmation hook',
      'Facility Tour & Equipment Overview'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Custom CSS', 'Responsive Grid', 'Fast JavaScript'],
    responsiveApproach: 'Touch-optimized timetable filter buttons meeting 48px touch guidelines for seamless mobile navigation.',
    performanceConsiderations: 'Minimal CSS bundle with hardware-accelerated animations for butter-smooth 60fps scrolling.',
    seoConsiderations: 'ExerciseGym Schema markup, trainer profiles, and local keyword integration.',
    conversionStrategy: 'Prominent 1-Day Free Pass incentive positioned after social proof and facility showcases.',
    deliverables: ['Gym Website', 'Interactive Timetable', 'Trial Pass Funnel', 'Membership Comparison Matrix'],
    accentColor: '#35D07F',
    demoUrl: 'https://demo.apexgym.masif.dev',
    featured: true
  },
  {
    id: 'culinary-restaurant',
    number: '05',
    title: 'Botanica Bistro & Tasting Cellar',
    category: 'Restaurant & Cafe',
    industry: 'Restaurant & Hospitality',
    shortDescription: 'Atmospheric culinary showcase featuring categorized tasting menus, dietary tags, and seamless online table reservation integration.',
    services: ['Menu Engineering', 'Table Reservations', 'Mobile-First Design', 'Speed Optimization'],
    objective: 'Replace clunky PDF menus with a responsive, appetizing digital dining experience that drives evening table reservations.',
    whatWasBuilt: 'A dark culinary website with tabbed food and wine menus, dietary filtering (Vegan, Gluten-Free), and OpenTable / custom booking integration.',
    features: [
      'Categorized Responsive Menu with Dietary Badges & Wine Pairings',
      'Real-Time Table Reservation Booking Calendar',
      'Atmospheric Gallery of Signature Dishes & Dining Room Ambience',
      'Chef Provenance and Seasonal Ingredient Sourcing Narrative',
      'One-Tap Google Maps Directions and Operating Hours Header'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Reservation Hook', 'CSS Grid', 'Schema FoodEstablishment'],
    responsiveApproach: 'High-contrast mobile readability for patrons checking menus in low-light restaurant environments.',
    performanceConsiderations: '0.6-second initial menu load time, eliminating the need for slow PDF downloads.',
    seoConsiderations: 'Structured Restaurant Schema with full menu item prices, hours, and reservation URLs.',
    conversionStrategy: 'Persistent "Reserve a Table" button on mobile, allowing guests to complete a booking in 3 quick taps.',
    deliverables: ['Digital Restaurant Website', 'Responsive Menu System', 'Table Reservation Setup', 'Google Maps Sync'],
    accentColor: '#E09F3E',
    demoUrl: 'https://demo.botanicabistro.masif.dev',
    featured: true
  },
  {
    id: 'creative-studio-redesign',
    number: '06',
    title: 'Kroma Digital Studio Redesign',
    category: 'Website Redesign',
    industry: 'Creative Agency',
    shortDescription: 'Complete overhaul of an outdated agency website, elevating their portfolio from a slow generic template to an award-worthy digital stage.',
    services: ['Complete Redesign', 'Elementor Pro Migration', 'Interaction Design', 'Speed Optimization'],
    objective: 'Rebuild a sluggish 5-year-old agency portfolio into a high-performance modern showroom that commands premium contract rates.',
    whatWasBuilt: 'A complete architectural rebuild featuring smooth scroll case studies, interactive project pitch drawer, and clean SVG client ribbons.',
    features: [
      'Interactive Case Study Showcase with live client deployment links',
      'Client Testimonial Audio/Quote Transcripts',
      'Creative Capability Matrix with clear service deliverables',
      'Sticky Project Pitch Bar on Mobile Viewports',
      'Modern Liquid Glass Panels with subtle depth'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Custom Modern CSS', 'Vanilla JS', 'SVG Architecture'],
    responsiveApproach: 'Streamlined mobile navigation eliminating complex sub-menus in favor of a clean, gesture-friendly drawer.',
    performanceConsiderations: 'Reduced page weight by 74% and improved load time from 5.2s down to 1.3s on mobile cellular data.',
    seoConsiderations: 'Preserved all legacy URLs with strict 301 redirects, protecting established search rankings.',
    conversionStrategy: 'Streamlined project discovery form allowing prospective clients to submit budgets and briefs effortlessly.',
    deliverables: ['Complete Website Overhaul', 'SEO 301 Redirect Map', 'Performance Optimization', 'Client Handover Training'],
    accentColor: '#7C5CFF',
    demoUrl: 'https://demo.kromastudio.masif.dev',
    featured: true
  },
  {
    id: 'law-firm-portal',
    number: '07',
    title: 'Sterling & Croft Legal Advocates',
    category: 'Law Firm',
    industry: 'Legal Services',
    shortDescription: 'Authoritative legal representation portal featuring practice areas, advocate profiles, and confidential consultation intake.',
    services: ['Business Website', 'Confidential Form Setup', 'SSL Security Hardening', 'Local SEO'],
    objective: 'Establish unquestioned institutional credibility and convert high-stakes legal inquiries through a dignified digital presence.',
    whatWasBuilt: 'A clean corporate legal website showcasing attorney bar admissions, practice area guides, case outcomes, and encrypted client intake.',
    features: [
      'Practice Area Breakdown (Corporate Law, M&A, Civil Disputes, Family Law)',
      'Senior Advocate & Partner Profiles with bar council registration details',
      'Confidential Case Evaluation Request Form with automated NDA notice',
      'Legal FAQ & Regulatory Compliance Notice repository',
      'Direct Emergency Legal Hotline Dial'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Secure SSL Intake', 'Legal Schema', 'CSS3'],
    responsiveApproach: 'Clean single-column layout on mobile, maintaining serious typographic gravitas and readable line lengths.',
    performanceConsiderations: 'Zero extraneous libraries; clean, swift rendering designed for corporate decision-makers.',
    seoConsiderations: 'Attorney and LegalService Schema.org markup for regional law searches.',
    conversionStrategy: 'Risk-reversal statements emphasizing attorney-client privilege beside every consultation form.',
    deliverables: ['Corporate Legal Website', 'Confidential Lead Intake', 'Attorney Profiles', 'Security Hardening'],
    accentColor: '#6366F1',
    demoUrl: 'https://demo.sterlingcroft.masif.dev',
    featured: false
  },
  {
    id: 'salon-spa-experience',
    number: '08',
    title: 'Lumière Hair Studio & Aesthetics Spa',
    category: 'Salon & Spa',
    industry: 'Salon & Spa',
    shortDescription: 'Chic beauty salon website featuring transparent service menus, stylist portfolios, and automated appointment bookings.',
    services: ['WordPress Development', 'Appointment Engine', 'UI/UX Design', 'Instagram Feed Sync'],
    objective: 'Eliminate missed phone calls by empowering clients to book hair and spa appointments online 24/7.',
    whatWasBuilt: 'An elegant, pastel-toned beauty salon website with treatment menus, pricing, stylist schedules, and Instagram gallery integration.',
    features: [
      'Comprehensive Service Menu with duration, pricing, and treatment details',
      'Stylist & Aesthetician Portfolio Showcase with specialty tags',
      'Online Appointment Scheduling System with SMS booking reminders',
      'Client Transformation Before & After Gallery',
      'Live Instagram Grid Sync showcasing daily studio work'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Salon Booking Engine', 'Instagram API', 'CSS Grid'],
    responsiveApproach: 'Thumb-friendly booking calendar designed for quick appointment selection on smartphones.',
    performanceConsiderations: 'Optimized image gallery with progressive WebP loading to keep mobile load speeds instantaneous.',
    seoConsiderations: 'BeautySalon Schema.org integration and local city search optimization.',
    conversionStrategy: 'Direct "Book an Appointment" floating button always visible on mobile viewports.',
    deliverables: ['Salon & Spa Website', 'Automated Booking System', 'Stylist Portfolios', 'Social Integration'],
    accentColor: '#F472B6',
    demoUrl: 'https://demo.lumieresalon.masif.dev',
    featured: false
  },
  {
    id: 'construction-contractor',
    number: '09',
    title: 'Titan Structural & Civil Contractors',
    category: 'Construction & Trade',
    industry: 'Construction & Trade',
    shortDescription: 'Commercial contracting website showcasing completed infrastructure builds, safety certifications, and tender RFP intake.',
    services: ['Business Website', 'Project Portfolio', 'RFP Form Integration', 'Speed Tuning'],
    objective: 'Win government and commercial construction tenders by demonstrating fleet scale, safety standards, and project experience.',
    whatWasBuilt: 'A rugged, professional contractor website with filtered completed project case studies, equipment matrices, and tender document upload.',
    features: [
      'Completed Infrastructure & Commercial Build Case Studies',
      'Tender Document & Architectural RFP Upload Module',
      'ISO Safety Standards, Certifications, and Insurance Badges',
      'Heavy Equipment Fleet & Engineering Capacity Matrix',
      'Client Reference Letters and Past Project Testimonials'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'RFP Intake Engine', 'Tailwind', 'Speed Optimization'],
    responsiveApproach: 'Responsive card layouts that adapt gracefully from rugged field tablets to executive desktop screens.',
    performanceConsiderations: 'Aggressively compressed architectural photos ensuring rapid field loading on construction site connections.',
    seoConsiderations: 'GeneralContractor schema markup and commercial engineering keyword targeting.',
    conversionStrategy: 'Dedicated "Request a Tender Bid" workflow capturing detailed project blueprints and timelines.',
    deliverables: ['Commercial Construction Website', 'RFP Upload Funnel', 'Project Portfolio Engine', 'Safety Verification Badges'],
    accentColor: '#F59E0B',
    demoUrl: 'https://demo.titancontractors.masif.dev',
    featured: false
  },
  {
    id: 'saas-landing-page',
    number: '10',
    title: 'FlowSync Cloud Workflow Platform',
    category: 'SaaS & Startups',
    industry: 'Technology / SaaS',
    shortDescription: 'High-converting software landing page featuring interactive feature tours, transparent pricing tiers, and trial signups.',
    services: ['Landing Page Design', 'Interactive UI Mockups', 'Conversion Optimization', 'Analytics Setup'],
    objective: 'Maximize conversion of developer and enterprise traffic into free trial signups for a B2B cloud workflow tool.',
    whatWasBuilt: 'A dark-mode tech landing page with interactive product tour hotspots, pricing tier toggles (monthly vs annual), and customer proof marquee.',
    features: [
      'Interactive Product Feature Tour with screen hotspot tooltips',
      'Transparent 3-Tier SaaS Pricing Table with annual discount toggle',
      'Customer Logo Marquee & Enterprise Trust Bar',
      'Interactive ROI Calculator demonstrating team hours saved',
      'Instant Free Trial Signup Form with Google Workspace sign-in hook'
    ],
    technologies: ['Modern HTML5', 'Elementor / Custom CSS', 'Analytics Hooks', 'SVG Architecture'],
    responsiveApproach: 'Streamlined single-column pricing tables and collapsible feature breakdowns on mobile.',
    performanceConsiderations: 'Sub-second first contentful paint with pure SVG iconography and zero unnecessary JavaScript frameworks.',
    seoConsiderations: 'SoftwareApplication schema tags and competitor alternative keyword optimization.',
    conversionStrategy: 'Placed multiple risk-free trial calls-to-action ("No credit card required") at strategic scroll depths.',
    deliverables: ['High-Converting SaaS Landing Page', 'Pricing Table Calculator', 'Analytics & Pixel Setup', 'Speed Audit Pass'],
    accentColor: '#8B5CF6',
    demoUrl: 'https://demo.flowsync.masif.dev',
    featured: false
  },
  {
    id: 'hotel-tourism-resort',
    number: '11',
    title: 'Azure Coastline Boutique Resort',
    category: 'Hotel Websites',
    industry: 'Hotel & Hospitality',
    shortDescription: 'Scenic luxury hospitality platform highlighting villa suites, coastal amenities, and direct reservation perks.',
    services: ['WordPress Development', 'Direct Booking Engine', 'Visual Storytelling', 'Speed Optimization'],
    objective: 'Reduce costly third-party OTA commission fees by incentivizing direct traveler reservations on the official resort website.',
    whatWasBuilt: 'A visually breathtaking resort website with suite comparison grids, direct date & guest selectors, and curated guest itineraries.',
    features: [
      'Room & Villa Showcase with square-meter specs, bed types, and views',
      'Direct Booking Date & Guest Query Form with instant rate lookup',
      'Curated Experiences Showcase (Yacht charters, spa packages, dining)',
      'Exclusive Direct-Booking Perks Banner (Free airport transfer + late checkout)',
      'Interactive Resort Property Map & Local Attraction Guide'
    ],
    technologies: ['WordPress', 'WooCommerce Bookings / Elementor', 'CSS Flexbox', 'Fast JS'],
    responsiveApproach: 'Fluid mobile gallery with touch-friendly swipe gestures for travelers browsing on vacation.',
    performanceConsiderations: 'Optimized cinematic video background and responsive srcset images that adapt to network bandwidth.',
    seoConsiderations: 'Hotel and LodgingBusiness Schema with room rates, coordinates, and TripAdvisor review badges.',
    conversionStrategy: 'Highlighted immediate savings and complimentary perks available exclusively when booking direct.',
    deliverables: ['Luxury Resort Website', 'Direct Booking Integration', 'Suite Catalog', 'Concierge Guide'],
    accentColor: '#4DA3FF',
    demoUrl: 'https://demo.azureresort.masif.dev',
    featured: false
  },
  {
    id: 'education-coaching-academy',
    number: '12',
    title: 'Horizon Coding & Design Academy',
    category: 'Education & Coaching',
    industry: 'Education',
    shortDescription: 'Course syllabus platform featuring cohort schedules, instructor credentials, and student enrollment intake.',
    services: ['Business Website', 'Course Curriculum UI', 'Student Enrollment Funnel', 'SEO Setup'],
    objective: 'Drive cohort admissions for an intensive design and coding academy through clear syllabi and student success proof.',
    whatWasBuilt: 'An energetic educational portal with module-by-module curriculum breakdowns, upcoming batch timers, and downloadable brochures.',
    features: [
      'Interactive Course Curriculum & Project Breakdown by week',
      'Batch Timings, Seat Counters, and Upcoming Cohort Dates',
      'Instructor Credentials & Industry Background Showcase',
      'Student Portfolio Showcase & Alumni Career Placement Metrics',
      'Direct Student Enrollment Application & Syllabus PDF Download'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'LMS / Form Integration', 'SEO Schema'],
    responsiveApproach: 'Collapsible curriculum accordions on mobile for effortless syllabus scanning on mobile devices.',
    performanceConsiderations: 'Lightweight build ensuring lightning-fast access for students browsing on campus cellular connections.',
    seoConsiderations: 'Course and EducationalOrganization Schema with curriculum ratings and upcoming intake dates.',
    conversionStrategy: 'Low-friction "Download Detailed Syllabus" lead capture capturing prospective student emails.',
    deliverables: ['Academy Website', 'Course Syllabus Architecture', 'Enrollment Intake Funnel', 'Alumni Portfolio Hub'],
    accentColor: '#FB923C',
    demoUrl: 'https://demo.horizonacademy.masif.dev',
    featured: false
  }
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 1,
    number: '01',
    title: 'Requirements',
    shortDescription: 'Understanding your business, audience, and core objectives.',
    clientProvides: [
      'Business background & primary commercial goal',
      'Target customer demographic & geographical location',
      'Existing branding, logo files, and content assets (if available)',
      'Reference websites you like (aesthetic, layout, tone)'
    ],
    deliverables: [
      'Clear project scope agreement',
      'Feature specification document',
      'Content & assets inventory checklist'
    ],
    icon: 'requirements'
  },
  {
    step: 2,
    number: '02',
    title: 'Planning',
    shortDescription: 'Structuring pages, navigation, and user conversion journeys.',
    clientProvides: [
      'Review and feedback on proposed page sitemap',
      'Confirmation of required navigation items & key action buttons',
      'Draft text/copy for essential pages'
    ],
    deliverables: [
      'Complete sitemap architecture',
      'Wireframe structural blueprints',
      'Conversion flow diagram'
    ],
    icon: 'planning'
  },
  {
    step: 3,
    number: '03',
    title: 'Website Design',
    shortDescription: 'Crafting the custom visual direction and high-fidelity interface.',
    clientProvides: [
      'Feedback on homepage design concept',
      'Approval of typography, color palette, and styling direction',
      'Confirmation of high-res photos and brand imagery'
    ],
    deliverables: [
      'High-fidelity visual design concepts',
      'Desktop and mobile layout mockups',
      'Harmonized design system (buttons, cards, typography)'
    ],
    icon: 'design'
  },
  {
    step: 4,
    number: '04',
    title: 'Development',
    shortDescription: 'Building clean code, responsive layouts, and integrated functionality.',
    clientProvides: [
      'Review access to private staging environment',
      'Confirmation of payment gateway, WhatsApp, or booking account details (if applicable)',
      'Feedback on interactive elements and live forms'
    ],
    deliverables: [
      'Fully functional WordPress / custom code build on staging',
      'E-commerce cart, booking calendars, and contact forms integrated',
      'Flawless responsive behavior across mobile, tablet, and desktop'
    ],
    icon: 'development'
  },
  {
    step: 5,
    number: '05',
    title: 'Delivery',
    shortDescription: 'Rigorous testing, domain connection, launch, and client handover.',
    clientProvides: [
      'Domain registrar / hosting DNS access or guidance for connection',
      'Final test submission through live forms',
      'Final project sign-off'
    ],
    deliverables: [
      'Live website deployment with active SSL encryption',
      '100% administrator login credentials & full ownership',
      'Personalized video tutorial explaining how to edit text and photos',
      '30 days of post-launch technical support'
    ],
    icon: 'delivery'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'What types of websites do you build?',
    answer: 'I build modern business websites, custom WooCommerce e-commerce stores, high-converting landing pages, medical and dental clinic websites, real estate portals, restaurant menus, and complete website redesigns. Every site is built with clean typography, responsive mobile design, and performance-focused code.',
    category: 'Capabilities'
  },
  {
    question: 'Do you work with businesses outside India?',
    answer: 'Yes! Over 60% of my clients are international businesses across the United States, United Kingdom, Canada, Australia, UAE, Europe, and Asia. We collaborate smoothly through email and WhatsApp with regular progress updates and staging previews.',
    category: 'Working Together'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. If your current website looks outdated, loads slowly, or breaks on mobile phones, I can completely modernize it. We preserve your existing domain, company emails, and Google SEO rankings while upgrading your brand to a modern, high-converting design.',
    category: 'Redesign'
  },
  {
    question: 'Can you build an e-commerce store?',
    answer: 'Yes. I build complete online stores using WooCommerce on WordPress. Your store includes product catalogs, variations (sizes, colors), a slide-out cart, automated order notifications, and integration with Stripe, PayPal, Razorpay, or local payment gateways.',
    category: 'E-commerce'
  },
  {
    question: 'Will my website be mobile responsive?',
    answer: 'Every website I build is mobile-first. I test thoroughly on actual iPhones, Android smartphones, iPads, laptops, and ultra-wide desktop monitors to ensure text is legible, buttons have comfortable touch targets, and there is zero horizontal scrolling.',
    category: 'Technical'
  },
  {
    question: 'Can I edit my website after delivery?',
    answer: 'Yes! That is a core benefit of working with WordPress and Elementor Pro. You get an intuitive visual interface where you can easily change text, swap photos, add new blog posts, or create products without writing code. I also include a personalized video walkthrough showing you exactly how.',
    category: 'Handover & Ownership'
  },
  {
    question: 'Do you provide website maintenance?',
    answer: 'Yes. Every project includes 30 days of complimentary support after launch. For ongoing peace of mind, I also provide monthly website maintenance covering WordPress core & plugin updates, automated cloud backups, security monitoring, and regular content adjustments.',
    category: 'Support'
  },
  {
    question: 'Can you integrate payments, booking systems and forms?',
    answer: 'Yes. I frequently integrate custom appointment booking calendars, lead generation inquiry forms with instant email alerts, direct WhatsApp click-to-chat triggers, Google Maps location markers, and secure payment processing.',
    category: 'Features'
  },
  {
    question: 'What do you need from me before starting?',
    answer: 'To get started, we need a brief overview of your business, your target customers, your logo (if available), and any preferred text or photos. If you don’t have final copy or photos yet, I can structure the site with professional placeholders and guide you on what to provide.',
    category: 'Getting Started'
  },
  {
    question: 'How does the project process work?',
    answer: 'We follow a simple 5-step roadmap: 1. Requirements (understanding goals & assets), 2. Planning (sitemap & structure), 3. Website Design (visual concepts & review), 4. Development (clean code & features on staging), and 5. Delivery (testing, launch, and handover training).',
    category: 'Process'
  },
  {
    question: 'Can I request custom functionality?',
    answer: 'Yes. Whether you need a dynamic property search filter, a multi-currency switch, an interactive quotation calculator, or specialized booking logic, I engineer custom solutions tailored to your business model.',
    category: 'Customization'
  },
  {
    question: 'How do you handle revisions?',
    answer: 'Revisions are built into the workflow during the Design and Development phases. We review the staging link together and adjust typography, colors, layout spacing, and content until the website accurately reflects your brand vision.',
    category: 'Revisions'
  }
];

export const TARGET_INDUSTRIES = [
  'Fashion & Clothing',
  'E-commerce & Retail',
  'Restaurant & Cafe',
  'Hotel & Hospitality',
  'Fitness & Gym',
  'Healthcare & Medical',
  'Dental Clinic',
  'Salon & Spa',
  'Real Estate & Architecture',
  'Construction & Contracting',
  'Interior Design',
  'Education & Coaching',
  'Consulting & Advisory',
  'Finance & Wealth Management',
  'Legal Services',
  'Technology / SaaS',
  'Marketing & Creative Agency',
  'Automotive & Detailing',
  'Travel & Tourism',
  'Photography & Media',
  'Personal Brand / Portfolio',
  'Professional Services',
  'Local Business',
  'Other'
];

export const CORE_SERVICES: ServiceDetail[] = [
  {
    number: '01',
    categoryLabel: 'Business Presence',
    title: 'Business Website Development',
    shortDescription: 'Professional corporate and company websites engineered to establish instant credibility, communicate value clearly, and convert qualified visitors into inquiries.',
    valueProp: 'Transform your digital presence from a generic placeholder into an authoritative business asset that wins client confidence on first click.',
    whatItIncludes: [
      'Custom responsive architecture built with WordPress & Elementor Pro',
      'Clear information hierarchy for services, team, mission, and client proof',
      'High-converting inquiry forms with instant email notifications',
      'Interactive location maps, FAQ accordions, and trust badging'
    ],
    features: [
      'Direct WhatsApp click-to-chat integration',
      'Fully editable layout with visual client CMS',
      'Basic On-Page SEO meta setup and Google Search Console readiness',
      'Ultra-fast loading speed with Core Web Vitals optimization'
    ],
    deliverables: [
      'Full responsive multi-page website or high-impact one-page platform',
      'Client administration login with full ownership and zero monthly lock-in',
      'Pre-launch cross-browser and mobile device QA verification',
      'Personalized video walkthrough demonstrating how to update text and photos'
    ],
    whatClientReceives: [
      'Production-ready website deployed to your custom domain',
      '100% administrator credentials and source ownership',
      '30 days of post-launch technical support and bug fixes'
    ],
    clientResponsibilities: [
      'Provide company logo, brand color preferences, and imagery',
      'Provide copy/text for company background and service descriptions (or approve drafts)',
      'Provide domain registrar and web hosting access credentials'
    ],
    workflow: [
      'Discovery & requirements audit',
      'Sitemap and wireframe structure planning',
      'Visual design mockup and client review',
      'WordPress implementation on private staging server',
      'Quality checklist review and final live domain launch'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Modern CSS', 'JavaScript', 'HTML5'],
    idealFor: 'Growing businesses, B2B firms, consultants, local service contractors, and professional practices seeking an authoritative digital presence.'
  },
  {
    number: '02',
    categoryLabel: 'Commerce & Sales',
    title: 'WooCommerce & E-Commerce',
    shortDescription: 'Custom online retail stores designed for frictionless purchasing, intuitive product discovery, fast checkout flows, and automated inventory management.',
    valueProp: 'Maximize store conversion rates with smooth mobile carts, clear variant pickers, and rock-solid payment processing.',
    whatItIncludes: [
      'Complete WooCommerce installation and custom visual theme harmonization',
      'Product catalog configuration with variable options (sizes, colors, packages)',
      'Slide-over AJAX mini cart with free shipping progress indicators',
      'Secure payment gateway setup (Stripe, PayPal, Razorpay, or local providers)'
    ],
    features: [
      'Dynamic inventory management and low-stock alerts',
      'Automated customer invoice and order confirmation emails',
      'Coupon codes, discount rules, and promotional banners',
      'Mobile-optimized 1-click checkout experience'
    ],
    deliverables: [
      'Fully operational online store ready to receive customer orders',
      'Product import and setup template for effortless future inventory additions',
      'Payment gateway sandbox testing verification',
      'Step-by-step video training on order fulfillment and refund processing'
    ],
    whatClientReceives: [
      'Complete e-commerce platform with zero ongoing percentage platform cut',
      'Admin dashboard for managing orders, inventory, and customers',
      '30 days of dedicated post-launch store support'
    ],
    clientResponsibilities: [
      'Provide product titles, descriptions, pricing, variations, and high-resolution photos',
      'Provide active merchant account credentials for Stripe, PayPal, or local gateway',
      'Provide store shipping rates, tax rules, and return policy text'
    ],
    workflow: [
      'Store catalog architecture & taxonomy definition',
      'Product page & cart user flow visual prototyping',
      'WooCommerce development and gateway staging integration',
      'Payment checkout test transactions and mobile testing',
      'Live store launch and handover training'
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Stripe API', 'PayPal'],
    idealFor: 'Retail brands, boutique fashion labels, merchandise creators, and direct-to-consumer businesses wanting scalable sales without Shopify fees.'
  },
  {
    number: '03',
    categoryLabel: 'Campaigns & ROI',
    title: 'Landing Page Design',
    shortDescription: 'Focused, single-purpose landing pages designed specifically for paid ad campaigns (Google Ads, Meta Ads) to maximize lead conversion and return on investment.',
    valueProp: 'Turn expensive ad clicks into actual paying clients with persuasive visual hierarchy, fast mobile loading, and clear action triggers.',
    whatItIncludes: [
      'Singular goal conversion architecture with distraction-free layout',
      'Persuasive hero section with strong value proposition and immediate CTA',
      'Social proof integration: client reviews, statistics, and trust badges',
      'Sticky conversion buttons and multi-step micro inquiry forms'
    ],
    features: [
      'Sub-second page load times to minimize bounce rates on mobile traffic',
      'Meta Pixel and Google Tag Manager conversion event tracking ready',
      'A/B test-ready component structure for headline and CTA experiments',
      'Automated lead routing to email or CRM webhook'
    ],
    deliverables: [
      'High-performance standalone campaign landing page',
      'Dedicated thank-you page with conversion event triggers',
      'Mobile-optimized touch action testing across iOS and Android',
      'Integration with Google Analytics and advertising tracking pixels'
    ],
    whatClientReceives: [
      'Turnkey landing page ready to connect directly to ad campaigns',
      'Form submission delivery directly to your inbox or sales pipeline',
      '30 days of post-launch conversion monitoring'
    ],
    clientResponsibilities: [
      'Share advertising campaign target audience and core offer',
      'Provide product/service photos, testimonials, and brand assets',
      'Provide ad tracking IDs or analytics access if available'
    ],
    workflow: [
      'Offer analysis & audience intent breakdown',
      'Wireframing the conversion funnel & copywriting hierarchy',
      'High-fidelity visual design and interactive preview',
      'Speed optimization & tracking tag implementation',
      'Ad campaign readiness testing and live publish'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Tailwind/CSS', 'Google Tag Manager'],
    idealFor: 'Product launches, marketing agencies, service professionals, lead-gen campaigns, and businesses running paid advertising.'
  },
  {
    number: '04',
    categoryLabel: 'Modernization',
    title: 'Website Redesign',
    shortDescription: 'Modernize an outdated, slow, or broken website with modern design aesthetics, mobile responsiveness, and clean code while preserving existing Google SEO rankings.',
    valueProp: 'Upgrade your digital brand image and regain lost customers without risking your established search engine rankings or business URLs.',
    whatItIncludes: [
      'Comprehensive content and URL audit to ensure 301 redirects protect SEO',
      'Complete visual overhaul with modern dark or clean light design aesthetics',
      'Elimination of bloated, obsolete plugins and outdated page builders',
      'Rebuilt layout on clean, maintainable modern WordPress & Elementor Pro'
    ],
    features: [
      'Preservation of all established page permalinks and ranking keywords',
      'Dramatic improvement in mobile responsiveness and user experience',
      'Drastic reduction in page load speed and unnecessary database queries',
      'Zero downtime migration from old design to new live version'
    ],
    deliverables: [
      'Fully redesigned website hosted on private staging until approved',
      '301 redirect mapping audit verifying zero broken 404 links',
      'Before & After speed benchmark comparison report',
      'Seamless live switchover with zero disruption to active business emails'
    ],
    whatClientReceives: [
      'Modern, refreshed website that matches your current business stature',
      'Preserved Google domain authority and ranking history',
      'Full admin access with clean, organized backend'
    ],
    clientResponsibilities: [
      'Share existing website admin login and domain DNS management',
      'Indicate what content must remain and what sections should be retired',
      'Provide updated brand photography or service offerings'
    ],
    workflow: [
      'Current site audit, analytics review & URL mapping',
      'Modernized visual concept presentation',
      'Staging reconstruction with zero interference to existing site',
      'SEO validation and client approval walkthrough',
      'Live DNS switchover and post-launch ranking verification'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Modern CSS', '301 SEO Redirects'],
    idealFor: 'Established businesses with websites built 3-7 years ago that no longer reflect their quality, look cluttered on phones, or load too slowly.'
  },
  {
    number: '05',
    categoryLabel: 'Speed & UX',
    title: 'Performance & Speed Optimization',
    shortDescription: 'Advanced speed engineering and asset optimization to pass Google Core Web Vitals, slash load times, and improve mobile search engine ranking.',
    valueProp: 'Every second of delay costs leads. Turn slow, sluggish pages into instant-loading platforms that retain visitors.',
    whatItIncludes: [
      'Complete waterfall analysis of server response time, TTFB, and heavy scripts',
      'Next-gen WebP image compression with responsive srcset generation',
      'Critical CSS generation, script deferral, and non-blocking font loading',
      'Server-side caching configuration, Gzip/Brotli compression, and CDN setup'
    ],
    features: [
      'Core Web Vitals compliance (LCP, FID/INP, CLS)',
      'Database cleanup, revision pruning, and query optimization',
      'Elimination of render-blocking JavaScript and unnecessary external fonts',
      '90+ score target on Google PageSpeed Insights for mobile and desktop'
    ],
    deliverables: [
      'Optimized production website with verified sub-1.5s load times',
      'Comprehensive before & after PageSpeed and GTmetrix diagnostic report',
      'Configured caching and asset delivery layer for automated future maintenance',
      'Best practice guidelines for maintaining speed when uploading new photos'
    ],
    whatClientReceives: [
      'Noticeably snappier browsing experience for every prospective client',
      'Lower mobile bounce rates and higher ad quality scores',
      'Cleaned database with verified integrity backup'
    ],
    clientResponsibilities: [
      'Provide hosting server access (cPanel, Cloudways, Hostinger, etc.)',
      'Temporary website admin access for diagnostic profiling',
      'Confirmation of third-party tracking scripts that must remain active'
    ],
    workflow: [
      'Initial baseline speed benchmark and bottleneck diagnostic',
      'Full staging backup creation before touching live code',
      'Asset compression, code deferral, and caching engine deployment',
      'Cross-page visual integrity testing across multiple devices',
      'Final performance verification and client report delivery'
    ],
    technologies: ['Cloudflare CDN', 'WebP Encoding', 'Asset Minification', 'Server Caching'],
    idealFor: 'Websites suffering from high bounce rates, slow mobile loading times, or businesses looking to boost Google organic search visibility.'
  },
  {
    number: '06',
    categoryLabel: 'Peace of Mind',
    title: 'Maintenance & Ongoing Support',
    shortDescription: 'Reliable monthly website care covering security hardening, WordPress core & plugin updates, automated cloud backups, and regular content updates.',
    valueProp: 'Never worry about your website breaking, getting hacked, or showing outdated company details while you focus on running your business.',
    whatItIncludes: [
      'Scheduled weekly updates for WordPress core, themes, and plugins on staging first',
      'Automated daily and weekly off-site cloud backups with 1-click restore capability',
      '24/7 uptime monitoring with immediate downtime alert response',
      'Malware scanning, brute-force firewall protection, and spam prevention'
    ],
    features: [
      'Dedicated monthly hours for text updates, photo replacements, and banner changes',
      'Priority emergency response for any unexpected site issues or payment errors',
      'Monthly health report detailing updates performed, speed status, and backups',
      'Direct WhatsApp and email channel for quick technical questions'
    ],
    deliverables: [
      'Continuous uptime and bulletproof security maintenance',
      'Off-site cloud storage of all encrypted site archives',
      'Monthly maintenance summary report delivered to your email',
      'Guaranteed rapid response window during business hours'
    ],
    whatClientReceives: [
      'Complete peace of mind knowing your digital storefront is actively monitored',
      'On-demand web developer in your corner for fast updates without hiring full-time',
      'Flexible month-to-month arrangement with no lock-in contracts'
    ],
    clientResponsibilities: [
      'Provide timely notification when company service details or team changes occur',
      'Keep hosting and domain subscriptions active with your registrar'
    ],
    workflow: [
      'Initial security audit and clean backup baseline creation',
      'Installation of monitoring and automated cloud backup agents',
      'Scheduled weekly update cycles with visual inspection',
      'Monthly client progress reports and content tweak fulfillment'
    ],
    technologies: ['UpdraftPlus Cloud', 'Wordfence Security', 'UptimeRobot', 'WP Engine/Hostinger'],
    idealFor: 'Busy business owners, dental practices, online store operators, and professionals who want their website running reliably without technical headaches.'
  }
];

export const CREDIBILITY_PILLARS = [
  { label: 'WordPress & Elementor Pro', desc: 'Custom tailored layouts' },
  { label: 'WooCommerce Specialists', desc: 'High-converting stores' },
  { label: 'Mobile-First Architecture', desc: 'Flawless across all screens' },
  { label: 'Sub-Second Loading', desc: 'Core Web Vitals optimized' },
  { label: '100% Client Ownership', desc: 'Zero proprietary lock-in' }
];

export const WORK_WITH_ME_PILLARS = [
  {
    title: 'Direct 1-on-1 Communication',
    desc: 'You collaborate directly with the senior specialist writing your code and designing your layout, with zero account manager telephone game.'
  },
  {
    title: 'Milestone Transparency',
    desc: 'You receive structured private staging links at each stage — from initial wireframes to fully functional preview before anything goes live.'
  },
  {
    title: 'Mobile-First Precision',
    desc: 'Every layout, typography scale, and button touch target is verified on real physical smartphones and tablets before delivery.'
  },
  {
    title: 'Complete Post-Launch Handover',
    desc: 'You receive full admin rights, hosting access, and a custom video walkthrough teaching you how to make content edits effortlessly.'
  }
];
