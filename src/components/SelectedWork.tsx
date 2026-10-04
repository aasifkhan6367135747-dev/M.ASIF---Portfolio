import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ExternalLink, Share2, Search, Check, Layers, ChevronLeft, ChevronRight, Globe, ShoppingCart, Rocket, RefreshCw, Sparkles } from 'lucide-react';
import { WORK_PROJECTS } from '../data/portfolioData';
import { ProjectItem, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface SelectedWorkProps {
  onOpenInquiry?: () => void;
  onOpenCaseStudy?: (project: ProjectItem) => void;
  onOpenLiveDemo?: (project: ProjectItem) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onOpenInquiry,
  onOpenCaseStudy,
  onOpenLiveDemo,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [initialModalTab, setInitialModalTab] = useState<'details' | 'demo'>('details');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const dragMoved = useRef(false);

  // 15+ Industry & Service Categories
  const categories = [
    'All',
    'Business Websites',
    'Fashion & Luxury',
    'Dental',
    'Real Estate & Architecture',
    'Fitness & Gym',
    'Restaurant & Cafe',
    'Website Redesign',
    'Law Firm',
    'Salon & Spa',
    'Construction & Trade',
    'SaaS & Startups',
    'Hotel Websites',
    'Education & Coaching',
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredProjects = WORK_PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === 'All' ||
      project.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      activeCategory.toLowerCase().includes(project.category.toLowerCase());

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const checkScrollBounds = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const firstCard = carouselRef.current.querySelector('[data-project-card]') as HTMLElement;
    if (firstCard && firstCard.offsetWidth > 0) {
      const cardStep = firstCard.offsetWidth + 24;
      const idx = Math.round(scrollLeft / cardStep);
      setCurrentIndex(Math.max(0, Math.min(idx, filteredProjects.length - 1)));
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    checkScrollBounds();
    el.addEventListener('scroll', checkScrollBounds, { passive: true });
    window.addEventListener('resize', checkScrollBounds);
    return () => {
      el.removeEventListener('scroll', checkScrollBounds);
      window.removeEventListener('resize', checkScrollBounds);
    };
  }, [filteredProjects]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setCurrentIndex(0);
      setCanScrollLeft(false);
    }
  }, [activeCategory, searchQuery]);

  const handleProjectScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const firstCard = container.querySelector('[data-project-card]') as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 380;
    const scrollAmount = window.innerWidth >= 1024 ? cardWidth : cardWidth;
    const target = direction === 'left' ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    container.scrollTo({
      left: target,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleProjectScroll('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleProjectScroll('right');
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    dragMoved.current = false;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftStart.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > 6) {
      dragMoved.current = true;
    }
    carouselRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    setTimeout(() => {
      dragMoved.current = false;
    }, 60);
  };

  const handleShare = (e: React.MouseEvent, project: ProjectItem) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: `${project.title} — M.ASIF Portfolio`,
        text: project.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
      setCopiedId(project.id);
      setTimeout(() => setCopiedId(null), 2000);
    } else {
      setCopiedId(project.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="work" className="py-24 md:py-32 bg-[#08090B] relative border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">
              <span>Portfolio & Demos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Explore custom websites, online stores, and live concept demos built for modern businesses.
            </p>
          </div>

          {/* Search Field near filters */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by industry or service..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#121418]/90 border border-white/10 text-white placeholder:text-zinc-500 text-xs focus:outline-none focus:border-cyan-400/60 backdrop-blur-xl transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Categories Bar with Horizontal Scroll */}
        <div className="relative mb-10 flex items-center">
          <button
            onClick={() => handleScroll('left')}
            className="hidden md:flex p-2 rounded-xl bg-[#15171C]/90 border border-white/10 text-zinc-400 hover:text-white backdrop-blur-md mr-2 z-10 transition-all hover:scale-105 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto py-2 px-1 scroll-smooth no-scrollbar w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-[#7C5CFF] text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40'
                    : 'bg-[#121418]/80 text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border border-white/10 backdrop-blur-xl'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleScroll('right')}
            className="hidden md:flex p-2 rounded-xl bg-[#15171C]/90 border border-white/10 text-zinc-400 hover:text-white backdrop-blur-md ml-2 z-10 transition-all hover:scale-105 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Medium-Sized, Premium, Balanced Project Cards */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center rounded-3xl bg-[#121418]/60 border border-white/10 backdrop-blur-md">
            <p className="text-sm text-zinc-400">No projects found matching your search. Try resetting filters.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-cyan-400 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="relative w-full">
            {/* Horizontal Project Carousel Track */}
            <div
              ref={carouselRef}
              tabIndex={0}
              role="region"
              aria-label="Selected work projects carousel - use left and right arrow keys to browse"
              onKeyDown={handleKeyDown}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className={`flex flex-nowrap gap-6 overflow-x-auto overflow-y-hidden py-4 px-1 scroll-smooth w-full select-none ${
                isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
              } focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400/50 rounded-3xl`}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y',
              }}
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  data-project-card="true"
                  onClick={() => {
                    if (dragMoved.current) return;
                    if (onOpenCaseStudy) {
                      onOpenCaseStudy(project);
                    } else {
                      setSelectedProject(project);
                      setInitialModalTab('details');
                    }
                  }}
                  className="group cursor-pointer rounded-3xl bg-[#121418]/90 border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-2xl relative shrink-0 grow-0 snap-start w-[84%] sm:w-[75%] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] min-w-[280px]"
                >
                  {/* Subtle Liquid Glass Top Line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />

                  {/* Compact Visual Preview Canvas */}
                  <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-[#181a20] via-[#121418] to-[#0a0b0d] border-b border-white/10 p-5 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-[11px] font-mono text-zinc-400 ml-2">{project.number}</span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Clean Central UI Canvas Graphic */}
                    <div className="my-auto p-4 rounded-2xl bg-black/40 border border-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
                      <h4 className="text-xs font-bold text-white font-display truncate">
                        {project.title.split('—')[0]}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Ambient accent color */}
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity"
                      style={{
                        background: `radial-gradient(circle at 60% 40%, ${project.accentColor} 0%, transparent 60%)`
                      }}
                    />
                  </div>

                  {/* Card Content & Action Bar */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium text-cyan-400">
                          {project.industry}
                        </span>
                        <button
                          onClick={(e) => handleShare(e, project)}
                          className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                          title="Share project"
                        >
                          {copiedId === project.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Share2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      <h3 className="text-lg font-bold text-white tracking-tight font-display group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Services Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.services.slice(0, 3).map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-zinc-300 font-mono">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: View Project Details & Direct Live Demo button */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                        <span>View Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenLiveDemo) {
                            onOpenLiveDemo(project);
                          } else {
                            setSelectedProject(project);
                            setInitialModalTab('demo');
                          }
                        }}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 flex items-center gap-1 transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls: Left & Right Arrows + Position Indicator */}
            {filteredProjects.length > 1 && (
              <div className="mt-8 flex items-center justify-between sm:justify-center gap-4">
                <button
                  onClick={() => handleProjectScroll('left')}
                  disabled={!canScrollLeft}
                  className="p-3 rounded-full bg-[#121418]/90 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-400/50 hover:bg-[#181a20] hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:pointer-events-none disabled:hover:scale-100 backdrop-blur-xl group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                </button>

                <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121418]/60 border border-white/10 backdrop-blur-md text-xs font-mono text-zinc-400 shadow-sm">
                  <span className="text-cyan-400 font-semibold">{currentIndex + 1}</span>
                  <span className="text-zinc-600">/</span>
                  <span>{filteredProjects.length} Projects</span>
                  <span className="hidden sm:inline text-zinc-600">·</span>
                  <span className="hidden sm:inline text-[11px] text-zinc-400">Swipe or use arrows</span>
                </div>

                <button
                  onClick={() => handleProjectScroll('right')}
                  disabled={!canScrollRight}
                  className="p-3 rounded-full bg-[#121418]/90 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-400/50 hover:bg-[#181a20] hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:pointer-events-none disabled:hover:scale-100 backdrop-blur-xl group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                  aria-label="Next projects"
                >
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Unified Project Details & Live Demo Modal */}
      <ProjectModal
        project={selectedProject}
        initialTab={initialModalTab}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={onOpenInquiry || (() => {})}
      />
    </section>
  );
};
