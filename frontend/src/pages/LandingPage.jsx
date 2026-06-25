import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, Target, Sparkles, Video, Zap, TrendingUp, BarChart3, Bot, ShoppingCart, Search, Share2, Phone, Mail, MessageCircle, ChevronRight, Instagram, Facebook, Youtube, Linkedin, Menu, X, Camera, Compass, Palette, Code2, Award } from 'lucide-react';
import { TextReveal, FadeUp, ScaleIn } from '../components/TextReveal';
import '../styles/landing.css';

const REELS_DATA = [
  {
    title: 'Curls & Café Launch',
    tag: 'Brand Reel',
    instagramUrl: 'https://www.instagram.com/reel/DYhnokzz4qV/?igsh=MWp5ODd6Y25pcXJ5cg==',
    videoUrl: '/videos/CC Reel.MP4',
  },
  {
    title: 'Titan World Commercial',
    tag: 'Product Shoot',
    instagramUrl: 'https://www.instagram.com/reel/C3RgCRdPuBk/?igsh=MTk2cXhwemlya21nOA==',
    videoUrl: '/videos/Titan Reel.MP4',
  },
  {
    title: 'Blackberry Campaign',
    tag: 'Product Campaign',
    instagramUrl: 'https://www.instagram.com/reel/DAs8ZPUvW_7/?igsh=MnphdGZnMnQ4aWc1',
    videoUrl: '/videos/Blackberry Reel.MP4',
  },
  {
    title: 'Manyavar Campaign',
    tag: 'Brand Campaign',
    instagramUrl: 'https://www.instagram.com/reel/DA-NcytPTzs/?igsh=OXVqbGxsdjJ3eDB6',
    videoUrl: '/videos/Manyavar Reel.MP4',
  },
  {
    title: 'Cake & Cafe Launch',
    tag: 'Brand Promo',
    instagramUrl: 'https://www.instagram.com/reel/DZJ3ySzNOkn/?igsh=MWJ0ZXpjbTlvODF4MA==',
    videoUrl: '/videos/Cake&Cafe Reel.MP4',
  },
  {
    title: 'Root Canal Treatment',
    tag: 'Healthcare Reel',
    instagramUrl: 'https://www.instagram.com/reel/DZO5qKlx6HE/?igsh=MW9wZHZybHYwczVwOQ==',
    videoUrl: '/videos/Wisdom Denatal Care Reel.MP4',
  }
];

const PROJECTS_DATA = [
  {
    id: 0,
    filter: 'ecommerce',
    type: 'E-Commerce · Website',
    name: 'StyleCraft Fashion Store',
    desc: 'Full Shopify-powered fashion store with custom UI, dynamic product filtering, and integrated payment gateway. 9× revenue growth.',
    tags: ['Shopify', 'React', 'Payment Gateway', 'SEO'],
    laptopBg: 'linear-gradient(135deg,#0d1b3e,#1a0533)',
    laptopAccent: 'linear-gradient(90deg,#3B82F6,#06B6D4)',
    tabletBg: 'linear-gradient(135deg,#1a0533,#0b0b0f)',
    mobileBg: 'linear-gradient(160deg,#0d1b3e,#1a0533)',
    mobileAccent: 'linear-gradient(90deg,#3B82F6,#06B6D4)',
  },
  {
    id: 1,
    filter: 'app',
    type: 'Mobile App · iOS & Android',
    name: 'FreshEats Delivery App',
    desc: 'Real-time food delivery app with live order tracking, push notifications, AI-based recommendations, and loyalty rewards system.',
    tags: ['React Native', 'Node.js', 'Maps API', 'Firebase'],
    laptopBg: 'linear-gradient(135deg,#0a1a00,#051a10)',
    laptopAccent: 'linear-gradient(90deg,#22c55e,#06B6D4)',
    tabletBg: 'linear-gradient(135deg,#051a10,#0b0b0f)',
    mobileBg: 'linear-gradient(160deg,#0a1a00,#051a10)',
    mobileAccent: 'linear-gradient(90deg,#22c55e,#06B6D4)',
  },
  {
    id: 2,
    filter: 'website',
    type: 'Corporate · Website',
    name: 'PrimeProperties Realty',
    desc: 'Premium real estate platform with property listings, virtual tours, AI chatbot, and WhatsApp lead generation funnel. 312% lead growth.',
    tags: ['Next.js', 'CMS', 'WhatsApp API', 'AI Chatbot'],
    laptopBg: 'linear-gradient(135deg,#1a1000,#2d1500)',
    laptopAccent: 'linear-gradient(90deg,#F59E0B,#EF4444)',
    tabletBg: 'linear-gradient(135deg,#2d1500,#0b0b0f)',
    mobileBg: 'linear-gradient(160deg,#1a1000,#2d1500)',
    mobileAccent: 'linear-gradient(90deg,#F59E0B,#EF4444)',
  },
  {
    id: 3,
    filter: 'dashboard',
    type: 'SaaS · Dashboard',
    name: 'GrowthOS Analytics',
    desc: 'Custom multi-brand analytics dashboard aggregating Meta, Google, and Shopify data into one real-time command center.',
    tags: ['Vue.js', 'Python', 'Chart.js', 'REST API'],
    laptopBg: 'linear-gradient(135deg,#1a0030,#000d1a)',
    laptopAccent: 'linear-gradient(90deg,#8B5CF6,#3B82F6)',
    tabletBg: 'linear-gradient(135deg,#000d1a,#0b0b0f)',
    mobileBg: 'linear-gradient(160deg,#1a0030,#000d1a)',
    mobileAccent: 'linear-gradient(90deg,#8B5CF6,#3B82F6)',
  },
  {
    id: 4,
    filter: 'app',
    type: 'Mobile App · B2B',
    name: 'SalesForce CRM App',
    desc: 'Enterprise CRM mobile app for field sales teams with offline sync, geo-tagging, automated follow-up sequences, and performance analytics.',
    tags: ['Flutter', 'SQLite', 'REST API', 'Push Notify'],
    laptopBg: 'linear-gradient(135deg,#001a1a,#001230)',
    laptopAccent: 'linear-gradient(90deg,#06B6D4,#8B5CF6)',
    tabletBg: 'linear-gradient(135deg,#001230,#0b0b0f)',
    mobileBg: 'linear-gradient(160deg,#001a1a,#001230)',
    mobileAccent: 'linear-gradient(90deg,#06B6D4,#8B5CF6)',
  },
  {
    id: 5,
    filter: 'website',
    type: 'Brand · Website',
    name: 'NovaBrew Coffee Brand',
    desc: 'Cinematic brand website for a specialty coffee brand with parallax storytelling, subscription model integration, and an online store.',
    tags: ['GSAP', 'WordPress', 'WooCommerce', 'Subscriptions'],
    laptopBg: 'linear-gradient(135deg,#1a0010,#100010)',
    laptopAccent: 'linear-gradient(90deg,#EC4899,#8B5CF6)',
    tabletBg: 'linear-gradient(135deg,#100010,#0b0b0f)',
    mobileBg: 'linear-gradient(160deg,#1a0010,#100010)',
    mobileAccent: 'linear-gradient(90deg,#EC4899,#8B5CF6)',
  }
];

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProjIndex, setActiveProjIndex] = useState(0);
  const [transitionState, setTransitionState] = useState('in');
  const [isPaused, setIsPaused] = useState(false);
  const [trackWidth, setTrackWidth] = useState(1200);
  
  const transitionTimeoutRef = useRef(null);
  const dragStartRef = useRef(null);
  const touchStartRef = useRef(null);
  const trackRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId;
    let isScrolling = false;
    let timeoutId;
    const scrollSpeed = 0.8;

    const autoScroll = () => {
      if (!isScrolling) {
        carousel.scrollLeft += scrollSpeed;
        const halfWidth = carousel.scrollWidth / 2;
        if (carousel.scrollLeft >= halfWidth) {
          carousel.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    const handleScroll = () => {
      const halfWidth = carousel.scrollWidth / 2;
      if (carousel.scrollLeft >= halfWidth) {
        carousel.scrollLeft -= halfWidth;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft += halfWidth;
      }
    };

    const pauseScroll = () => {
      isScrolling = true;
      if (timeoutId) clearTimeout(timeoutId);
    };

    const resumeScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isScrolling = false;
      }, 1500);
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    carousel.addEventListener('touchstart', pauseScroll, { passive: true });
    carousel.addEventListener('touchend', resumeScroll, { passive: true });
    carousel.addEventListener('mousedown', pauseScroll, { passive: true });
    carousel.addEventListener('mouseup', resumeScroll, { passive: true });
    carousel.addEventListener('mouseenter', pauseScroll, { passive: true });
    carousel.addEventListener('mouseleave', resumeScroll, { passive: true });

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (timeoutId) clearTimeout(timeoutId);
      carousel.removeEventListener('scroll', handleScroll);
      carousel.removeEventListener('touchstart', pauseScroll);
      carousel.removeEventListener('touchend', resumeScroll);
      carousel.removeEventListener('mousedown', pauseScroll);
      carousel.removeEventListener('mouseup', resumeScroll);
      carousel.removeEventListener('mouseenter', pauseScroll);
      carousel.removeEventListener('mouseleave', resumeScroll);
    };
  }, []);

  const activeProj = PROJECTS_DATA[activeProjIndex] || PROJECTS_DATA[0];

  const tilts = [0, -2, 2, -1.5, 1.5, -1];
  const isMobileView = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  const isSmallMobileView = typeof window !== 'undefined' ? window.innerWidth <= 480 : false;
  
  const cardW = isSmallMobileView ? 155 : (isMobileView ? 167 : 340);
  const offset = Math.max(0, activeProjIndex * cardW - (trackWidth / 2 - cardW / 2));

  const applyProject = (idx) => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    setTransitionState('out');
    transitionTimeoutRef.current = setTimeout(() => {
      setActiveProjIndex(idx);
      setTransitionState('in');
    }, 280);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Reveal animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth);
      const handleResize = () => {
        if (trackRef.current) {
          setTrackWidth(trackRef.current.offsetWidth);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      applyProject((activeProjIndex + 1) % PROJECTS_DATA.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [activeProjIndex, isPaused]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="landing-container">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div 
        className="custom-cursor-ring" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Navigation */}
      <nav className={`main-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/2k02qtqc_BM%20T.png" 
                alt="BigMotion" 
                className="logo-img"
                onClick={() => scrollToSection('hero')}
              />
            </div>
            
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <a onClick={() => scrollToSection('hero')}>Home</a>
              <a onClick={() => scrollToSection('concept')}>Concept</a>
              <a onClick={() => scrollToSection('services')}>Services</a>
              <a onClick={() => scrollToSection('portfolio-mockup')}>Our Work</a>
              <a onClick={() => scrollToSection('clients')}>Clients</a>
              <a onClick={() => scrollToSection('about')}>About</a>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
            
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                backgroundColor: Math.random() > 0.5 ? 'var(--blue)' : 'var(--purple)'
              }}
            />
          ))}
        </div>
        
        <div className="hero-content">
          <div className="hero-left">
            <FadeUp delay={0}>
              <div className="hero-badge">
                <span className="badge-dot" />
                Digital Growth • AI Systems • Branding • Technology
              </div>
            </FadeUp>
            
            <h1 className="hero-title">
              <TextReveal as="span" className="hero-line">MORE THAN</TextReveal><br />
              <TextReveal as="span" className="hero-line gradient-text" delay={0.15}>MARKETING.</TextReveal><br />
              <TextReveal as="span" className="hero-line" delay={0.3}>WE BUILD</TextReveal><br />
              <TextReveal as="span" className="hero-line gradient-text" delay={0.45}>BUSINESSES IN MOTION.</TextReveal>
            </h1>
            
            <FadeUp delay={0.7}>
              <p className="hero-subtitle">
                BigMotion helps businesses build powerful digital identities that attract attention, build trust, and generate measurable growth through strategy, branding, content, technology, and AI-powered systems.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.85}>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight size={20} />
                </button>
                <button className="btn-secondary" onClick={() => scrollToSection('services')}>
                  Explore Our Services
                </button>
              </div>
              <p className="hero-trust-text">
                Trusted by ambitious brands, startups, local businesses, and growing enterprises.
              </p>
            </FadeUp>
            
            <FadeUp delay={1}>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Creative Assets</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10M+</span>
                  <span className="stat-label">Reach Generated</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Brands Scaled</span>
                </div>
              </div>
            </FadeUp>
          </div>
          
          <ScaleIn className="hero-right" delay={0.3}>
            <div className="hero-visual">
              <div className="glow-orb orb-1" />
              <div className="glow-orb orb-2" />
              <div className="floating-cards">
                <div className="float-card card-1">
                  <div className="card-label">Growth Dashboard</div>
                  <div className="card-title">BigMotion Analytics</div>
                  <div className="metric-row">
                    <span className="metric-value">+284%</span>
                    <span className="metric-change">↑ 28d growth</span>
                  </div>
                  <div className="mini-bars">
                    {[40, 55, 45, 70, 60, 85, 75, 100].map((height, i) => (
                      <div key={i} className="bar" style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
                <div className="float-card card-2">
                  <div className="card-label">Platforms</div>
                  <div className="platform-pills">
                    <span className="pill">Instagram</span>
                    <span className="pill">Meta Ads</span>
                    <span className="pill">Google</span>
                    <span className="pill">YouTube</span>
                  </div>
                </div>
                <div className="float-card card-3">
                  <div className="card-label">AI Engine</div>
                  <div className="card-title">Automating Growth</div>
                  <div className="ai-lines">
                    {[100, 75, 85, 60].map((width, i) => (
                      <div key={i} className="ai-line" style={{ width: `${width}%`, animationDelay: `${i * 0.3}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Brand Marquee */}
      <div className="marquee-section">
        <div className="section-container marquee-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2 className="section-title">
            <TextReveal as="span">TRUSTED PLATFORMS & </TextReveal>
            <TextReveal as="span" className="brand-gradient" delay={0.15}>TECHNOLOGIES</TextReveal>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We leverage the world's most powerful platforms to help businesses scale faster.
          </p>
        </div>
        <div className="marquee-track">
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="marquee-item">
                <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/6s0xn00v_Google%20Business.png" alt="Google" />
                <span>Google</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/meta/0467DF" alt="Meta" />
                <span>Meta</span>
              </div>
              <div className="marquee-item">
                <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/475sh1cs_instagram%20logo.png" alt="Instagram" />
                <span>Instagram</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" />
                <span>WhatsApp</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube" />
                <span>YouTube</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Shopify" />
                <span>Shopify</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" />
                <span>Facebook</span>
              </div>
              <div className="marquee-item">
                <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/m9tc1ulu_OpenAI%20logo.png" alt="OpenAI" />
                <span>OpenAI</span>
              </div>
              <div className="marquee-item">
                <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/uuprez1t_linkedin%20icon.png" alt="LinkedIn" />
                <span>LinkedIn</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/razorpay/008ECF" alt="Razorpay" />
                <span>Razorpay</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Our Concept */}
      <section id="concept" className="concept-section">
        <div className="section-container">
          <FadeUp>
            <span className="section-tag">OUR CONCEPT</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">BUILDING DIGITAL ECOSYSTEMS,</TextReveal><br/>
            <TextReveal as="span" className="brand-gradient" delay={0.15}>NOT JUST MARKETING CAMPAIGNS.</TextReveal>
          </h2>
          <FadeUp delay={0.3}>
            <div className="section-subtitle" style={{ maxWidth: '800px' }}>
              <p style={{ marginBottom: '16px' }}>
                Most agencies focus on individual services. We focus on building complete growth ecosystems.
              </p>
              <p style={{ marginBottom: '16px' }}>
                At BigMotion, we combine strategy, branding, content creation, technology, AI automation, and performance marketing to create systems that consistently attract customers, build authority, and drive business growth.
              </p>
              <p style={{ fontWeight: '600', color: 'var(--white)' }}>
                We don't sell services. We build growth engines.
              </p>
            </div>
          </FadeUp>
          
          <div className="pillars-grid">
            <FadeUp delay={0.1} className="pillar-card-wrap">
              <div className="pillar-card">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><Target size={32} /></div>
                <h4>Strategy</h4>
                <p>Data-driven planning that aligns every action with business goals.</p>
                <div className="pillar-arrow"><ArrowRight size={18} /></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="pillar-card-wrap">
              <div className="pillar-card">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><Palette size={32} /></div>
                <h4>Branding</h4>
                <p>Creating memorable identities that customers trust and remember.</p>
                <div className="pillar-arrow"><ArrowRight size={18} /></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.3} className="pillar-card-wrap">
              <div className="pillar-card">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><Video size={32} /></div>
                <h4>Content</h4>
                <p>High-quality content designed to attract attention and build engagement.</p>
                <div className="pillar-arrow"><ArrowRight size={18} /></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.4} className="pillar-card-wrap">
              <div className="pillar-card">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><Code2 size={32} /></div>
                <h4>Technology</h4>
                <p>Websites, apps, automations, and systems that improve productivity and customer experience.</p>
                <div className="pillar-arrow"><ArrowRight size={18} /></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.5} className="pillar-card-wrap pillar-featured-wrap">
              <div className="pillar-card featured">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><TrendingUp size={32} /></div>
                <h4>Growth</h4>
                <p>Performance-focused execution that generates measurable business outcomes.</p>
                <div className="pillar-arrow"><ArrowRight size={18} /></div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="story-section reveal">
        <div className="section-container">
          <div className="story-grid">
            <div className="story-visual reveal">
              <div className="story-image-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80" 
                  alt="BigMotion Team at Work" 
                  className="story-image"
                />
                <div className="story-image-overlay">
                  <div className="story-badge">
                    <div className="story-badge-icon">BM</div>
                    <div className="story-badge-text">
                      <span className="story-badge-label">A Digital Powerhouse</span>
                      <span className="story-badge-sub">Strategy · Creativity · AI</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-visual-glow" />
            </div>
            
            <div className="story-text reveal">
              <span className="section-tag">OUR STORY</span>
              <h2 className="section-title">
                <TextReveal as="span">FROM LOCAL ROOTS</TextReveal><br />
                <TextReveal as="span" className="brand-gradient" delay={0.15}>TO DIGITAL LEADERSHIP.</TextReveal>
              </h2>
              
              <p className="story-paragraph">
                We saw ambitious businesses struggling with limited digital visibility in a fast-moving world where attention drives growth. That led to the birth of BigMotion — a collective of MBA marketers, creative strategists, developers, content creators, and AI specialists united by one mission: to transform businesses into powerful digital brands that grow, scale, and dominate online.
              </p>
              
              <p className="story-paragraph">
                Today, we build modern digital ecosystems powered by strategy, creativity, technology, and AI to help brands become market leaders in the digital era.
              </p>
              
              <div className="story-chips">
                <span className="story-chip">STRATEGY</span>
                <span className="story-chip">BRANDING</span>
                <span className="story-chip">CONTENT</span>
                <span className="story-chip">DEVELOPMENT</span>
                <span className="story-chip">AI SYSTEMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-container">
          <FadeUp>
            <span className="section-tag">SERVICES</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">EVERYTHING YOUR BUSINESS NEEDS</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>TO SCALE DIGITALLY.</TextReveal>
          </h2>
          <FadeUp delay={0.3}>
            <p className="section-subtitle">
              Full-stack digital services engineered for growth — from brand identity to AI automation.
            </p>
          </FadeUp>
          
          <div className="services-grid">
            <ServiceCard 
              icon={<Share2 size={32} />}
              title="Digital Presence"
              description="Build a strong and professional online identity that customers trust."
              tags={['Brand Identity', 'Social Media Setup', 'Google Business Profile', 'WhatsApp Business', 'Professional Email Setup', 'Business Profiles']}
              image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80"
              delay={0.1}
            />
            <ServiceCard 
              icon={<Video size={32} />}
              title="Content Production"
              description="Content that grabs attention and drives engagement."
              tags={['Reel Production', 'Commercial Shoots', 'Product Photography', 'Influencer Collaborations', 'Video Editing', 'Creative Campaigns']}
              image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80"
              delay={0.2}
            />
            <ServiceCard 
              icon={<Code2 size={32} />}
              title="Website & App Development"
              description="Technology solutions designed around your business goals."
              tags={['Business Websites', 'E-Commerce Stores', 'Mobile Applications', 'CRM Systems', 'Custom Software', 'Landing Pages']}
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
              delay={0.3}
            />
            <ServiceCard 
              icon={<BarChart3 size={32} />}
              title="Digital Marketing"
              description="Performance-focused marketing designed to generate leads and sales."
              tags={['Meta Ads', 'Google Ads', 'Search Engine Optimization', 'Lead Generation', 'Funnel Development', 'Retargeting Campaigns']}
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              delay={0.1}
            />
            <ServiceCard 
              icon={<Bot size={32} />}
              title="AI & Automation"
              description="Modern systems that improve efficiency and productivity."
              tags={['AI Chatbots', 'CRM Automation', 'WhatsApp Automation', 'Workflow Automation', 'AI Integrations', 'Business Intelligence Dashboards']}
              image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section id="showcase" className="showcase-section reveal">
        <div className="section-container">
          <span className="section-tag">OUR WORK</span>
          <h2 className="section-title">
            <TextReveal as="span">CONTENT THAT CAPTURES</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>ATTENTION.</TextReveal>
          </h2>
          <p className="section-subtitle">
            From viral reels and commercial shoots to product campaigns and social storytelling, our content is designed to stop the scroll, build trust, and drive action.
          </p>
        </div>
        
        <div className="reel-carousel" ref={carouselRef}>
          <div className="reel-track">
            {Array.from({ length: 12 }).map((_, idx) => {
              const reel = REELS_DATA[idx % REELS_DATA.length];
              return (
                <a 
                  key={idx} 
                  href={reel.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="reel-card"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="reel-video-container">
                    <video 
                      src={reel.videoUrl} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="reel-video-element"
                    />
                    <div className="reel-video-overlay" />
                  </div>
                  <div className="reel-play"><Play size={32} /></div>
                  <div className="reel-overlay">
                    <div className="reel-tag">{reel.tag}</div>
                    <div className="reel-title">{reel.title}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Websites & Apps Showcase Section */}
      <div id="portfolio-mockup" className="reveal">
        {/* Floating ambient labels (hidden on mobile via CSS) */}
        <div className="pm-float-label pfl-1">💻 Web Design</div>
        <div className="pm-float-label pfl-2">📱 Mobile App</div>
        <div className="pm-float-label pfl-3">⚡ Fast &amp; Responsive</div>
        <div className="pm-float-label pfl-4">✅ Live Projects</div>

        {/* ── Section Header ── */}
        <div className="pm-header">
          <span className="section-tag">OUR WORK</span>
          <h2 className="section-title">
            <TextReveal as="span">WEBSITES &amp; APPS</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>WE'VE BUILT.</TextReveal>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From high-converting websites to powerful applications —
            every pixel crafted for performance.
          </p>
          {/* Filter tabs */}
          <div className="pm-tabs">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'website', label: 'Websites' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'app', label: 'Mobile Apps' },
              { id: 'dashboard', label: 'Dashboards' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`pm-tab ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(tab.id);
                  const firstVisible = PROJECTS_DATA.findIndex(p => tab.id === 'all' || p.filter === tab.id);
                  if (firstVisible >= 0) {
                    applyProject(firstVisible);
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── 3D Mockup Stage ── */}
        <div 
          className="pm-stage" 
          id="pmStage"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ══ LAPTOP ══ */}
          <div 
            className="mock-laptop" 
            id="mockLaptop"
            style={{ transform: `rotateY(${tilts[activeProjIndex] || 0}deg) translateZ(0)` }}
          >
            <div className="laptop-lid">
              <div className="laptop-screen-wrap">
                <div className={`screen-content ${transitionState}`} id="laptopScreen">
                  <div className="screen-inner">
                    {/* Browser chrome bar */}
                    <div className="sc-topbar">
                      <div className="sc-dot" style={{ background: '#ff5f57' }}></div>
                      <div className="sc-dot" style={{ background: '#febc2e' }}></div>
                      <div className="sc-dot" style={{ background: '#28c840' }}></div>
                      <div style={{ flex: 1, height: '14px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', margin: '0 8px' }}></div>
                    </div>

                    {/* Hero section with shimmer lines */}
                    <div className="sc-hero" id="laptopHero" style={{ background: activeProj.laptopBg }}>
                      {/* Accent headline bar */}
                      <div className="sc-hero-line" style={{ width: '55%', background: activeProj.laptopAccent, height: '10px' }}></div>
                      <div className="sc-hero-line" style={{ width: '80%', background: 'rgba(255,255,255,0.15)', animationDelay: '0.3s' }}></div>
                      <div className="sc-hero-line" style={{ width: '65%', background: 'rgba(255,255,255,0.1)', animationDelay: '0.6s' }}></div>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                        <div style={{ padding: '6px 14px', borderRadius: '4px', background: '#3B82F6', fontSize: '9px', color: 'white', fontFamily: "'DM Sans',sans-serif" }}>Get Started</div>
                        <div style={{ padding: '6px 14px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', fontSize: '9px', color: 'white', fontFamily: "'DM Sans',sans-serif" }}>Learn More</div>
                      </div>
                    </div>

                    {/* Content cards row */}
                    <div className="sc-cards">
                      <div className="sc-card"></div>
                      <div className="sc-card"></div>
                      <div className="sc-card"></div>
                    </div>

                    {/* Text skeleton */}
                    <div className="sc-text-lines">
                      <div className="sc-text-line" style={{ width: '90%' }}></div>
                      <div className="sc-text-line" style={{ width: '70%' }}></div>
                      <div className="sc-text-line" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
            <div className="laptop-foot"></div>
          </div>

          {/* ══ TABLET — LEFT ══ */}
          <div className="mock-tablet left" id="mockTabletL">
            <div className="tablet-body">
              <div className="tablet-screen-wrap">
                <div className={`screen-content ${transitionState}`} id="tabletScreen">
                  <div className="screen-inner">
                    <div className="sc-topbar" style={{ height: '22px', padding: '0 8px', gap: '4px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ff5f57' }}></div>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#28c840' }}></div>
                    </div>
                    <div className="sc-hero" id="tabletHero" style={{ background: activeProj.tabletBg, padding: '10px' }}>
                      <div className="sc-hero-line" style={{ width: '70%', background: activeProj.laptopAccent, height: '7px' }}></div>
                      <div className="sc-hero-line" style={{ width: '90%', background: 'rgba(255,255,255,0.12)', animationDelay: '0.2s', height: '5px' }}></div>
                      <div className="sc-hero-line" style={{ width: '75%', background: 'rgba(255,255,255,0.08)', animationDelay: '0.5s', height: '5px' }}></div>
                    </div>
                    <div className="sc-grid">
                      <div className="sc-grid-item"></div>
                      <div className="sc-grid-item"></div>
                      <div className="sc-grid-item"></div>
                      <div className="sc-grid-item"></div>
                    </div>
                    <div className="sc-nav-bar">
                      <div className="sc-nav-dot active"></div>
                      <div className="sc-nav-dot"></div>
                      <div className="sc-nav-dot"></div>
                      <div className="sc-nav-dot"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tablet-home"></div>
            </div>
          </div>

          {/* ══ TABLET — RIGHT ══ */}
          <div className="mock-tablet right" id="mockTabletR">
            <div className="tablet-body">
              <div className="tablet-screen-wrap">
                <div className="screen-content in">
                  <div className="screen-inner">
                    <div className="sc-topbar" style={{ height: '22px', padding: '0 8px', gap: '4px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ff5f57' }}></div>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#28c840' }}></div>
                    </div>
                    <div className="sc-hero" style={{ background: 'linear-gradient(135deg,#1a0533,#0b0b0f)', padding: '10px' }}>
                      <div className="sc-hero-line" style={{ width: '60%', background: 'linear-gradient(90deg,#06B6D4,#3B82F6)', height: '7px' }}></div>
                      <div className="sc-hero-line" style={{ width: '85%', background: 'rgba(255,255,255,0.12)', animationDelay: '0.3s', height: '5px' }}></div>
                      <div className="sc-hero-line" style={{ width: '70%', background: 'rgba(255,255,255,0.08)', animationDelay: '0.6s', height: '5px' }}></div>
                    </div>
                    <div className="sc-grid">
                      <div className="sc-grid-item" style={{ background: 'rgba(59,130,246,0.1)' }}></div>
                      <div className="sc-grid-item"></div>
                      <div className="sc-grid-item"></div>
                      <div className="sc-grid-item" style={{ background: 'rgba(139,92,246,0.1)' }}></div>
                    </div>
                    <div className="sc-nav-bar">
                      <div className="sc-nav-dot"></div>
                      <div className="sc-nav-dot active"></div>
                      <div className="sc-nav-dot"></div>
                      <div className="sc-nav-dot"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tablet-home"></div>
            </div>
          </div>

          {/* ══ MOBILE — LEFT ══ */}
          <div className="mock-mobile left" id="mockMobileL">
            <div className="mobile-body">
              <div className="mobile-screen-wrap">
                <div className={`screen-content ${transitionState}`} id="mobileScreen">
                  <div className="screen-inner" style={{ paddingTop: '14px' }}>
                    <div className="sc-hero" id="mobileHero" style={{ background: activeProj.mobileBg, padding: '10px', minHeight: '80px' }}>
                      <div className="sc-hero-line" style={{ width: '80%', background: activeProj.mobileAccent, height: '6px' }}></div>
                      <div className="sc-hero-line" style={{ width: '95%', background: 'rgba(255,255,255,0.1)', height: '4px', animationDelay: '0.3s' }}></div>
                      <div className="sc-hero-line" style={{ width: '70%', background: 'rgba(255,255,255,0.07)', height: '4px', animationDelay: '0.6s' }}></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '6px 8px' }}>
                      <div style={{ height: '22px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}></div>
                      <div style={{ height: '22px', borderRadius: '4px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}></div>
                      <div style={{ height: '22px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}></div>
                    </div>
                    <div className="sc-nav-bar">
                      <div className="sc-nav-dot active"></div>
                      <div className="sc-nav-dot"></div>
                      <div className="sc-nav-dot"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-chin"></div>
            </div>
          </div>

          {/* ══ MOBILE — RIGHT ══ */}
          <div className="mock-mobile right" id="mockMobileR">
            <div className="mobile-body">
              <div className="mobile-screen-wrap">
                <div className="screen-content in">
                  <div className="screen-inner" style={{ paddingTop: '14px' }}>
                    <div className="sc-hero" style={{ background: 'linear-gradient(160deg,#0a1a00,#0d0d2e)', padding: '10px', minHeight: '80px' }}>
                      <div className="sc-hero-line" style={{ width: '75%', background: 'linear-gradient(90deg,#22c55e,#06B6D4)', height: '6px' }}></div>
                      <div className="sc-hero-line" style={{ width: '90%', background: 'rgba(255,255,255,0.1)', height: '4px', animationDelay: '0.2s' }}></div>
                      <div className="sc-hero-line" style={{ width: '65%', background: 'rgba(255,255,255,0.07)', height: '4px', animationDelay: '0.5s' }}></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '6px 8px' }}>
                      <div style={{ height: '22px', borderRadius: '4px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}></div>
                      <div style={{ height: '22px', borderRadius: '4px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}></div>
                      <div style={{ height: '22px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}></div>
                    </div>
                    <div className="sc-nav-bar">
                      <div className="sc-nav-dot"></div>
                      <div className="sc-nav-dot active"></div>
                      <div className="sc-nav-dot"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-chin"></div>
            </div>
          </div>

          {/* Glow beneath devices */}
          <div className="pm-glow"></div>
        </div>

        {/* ── Project Cards Strip ── */}
        <div 
          className="pm-info-track"
          ref={trackRef}
          onMouseDown={(e) => {
            dragStartRef.current = e.clientX;
          }}
          onMouseUp={(e) => {
            if (dragStartRef.current === null) return;
            const dx = e.clientX - dragStartRef.current;
            if (Math.abs(dx) > 40) {
              const nextIdx = dx < 0 
                ? Math.min(activeProjIndex + 1, PROJECTS_DATA.length - 1) 
                : Math.max(activeProjIndex - 1, 0);
              applyProject(nextIdx);
            }
            dragStartRef.current = null;
          }}
          onTouchStart={(e) => {
            touchStartRef.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartRef.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartRef.current;
            if (Math.abs(dx) > 40) {
              const nextIdx = dx < 0 
                ? Math.min(activeProjIndex + 1, PROJECTS_DATA.length - 1) 
                : Math.max(activeProjIndex - 1, 0);
              applyProject(nextIdx);
            }
            touchStartRef.current = null;
          }}
        >
          <div 
            className="pm-info-inner" 
            id="pmInfoInner"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {PROJECTS_DATA.map((project, idx) => {
              const isMatch = activeFilter === 'all' || project.filter === activeFilter;
              return (
                <div
                  key={project.id}
                  className={`pm-project-card ${activeProjIndex === idx ? 'active' : ''}`}
                  style={{
                    opacity: isMatch ? 1 : 0.3,
                    pointerEvents: isMatch ? 'auto' : 'none'
                  }}
                  onClick={() => {
                    if (isMatch) applyProject(idx);
                  }}
                >
                  <div className="ppc-type">{project.type}</div>
                  <div className="ppc-name">{project.name}</div>
                  <div className="ppc-desc">{project.desc}</div>
                  <div className="ppc-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="ppc-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Dot Navigation ── */}
        <div className="pm-nav-dots" id="pmDots">
          {PROJECTS_DATA.map((project, idx) => (
            <button
              key={project.id}
              className={`pm-dot ${activeProjIndex === idx ? 'active' : ''}`}
              onClick={() => applyProject(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Ecosystem */}
      <section id="ecosystem" className="ecosystem-section">
        <div className="section-container">
          <FadeUp>
            <span className="section-tag">DIGITAL ECOSYSTEM</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">CONNECTED SYSTEMS.</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>SMARTER GROWTH.</TextReveal>
          </h2>
          <FadeUp delay={0.3}>
            <p className="section-subtitle">
              Every successful business operates through connected systems. We integrate marketing, sales, communication, analytics, automation, and customer engagement into one powerful ecosystem.
            </p>
          </FadeUp>
          
          <ScaleIn delay={0.4}>
            <div className="ecosystem-visual">
              <div className="eco-rings">
                <div className="eco-ring ring-1" />
                <div className="eco-ring ring-2" />
                <div className="eco-ring ring-3" />
              </div>
              <div className="eco-connection-lines">
                <svg viewBox="0 0 600 600" className="eco-svg-lines">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#e88dff" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <line x1="300" y1="300" x2="300" y2="50" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <line x1="300" y1="300" x2="490" y2="130" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <line x1="300" y1="300" x2="550" y2="300" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <line x1="300" y1="300" x2="490" y2="470" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <line x1="300" y1="300" x2="300" y2="550" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <line x1="300" y1="300" x2="110" y2="470" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <line x1="300" y1="300" x2="50" y2="300" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <line x1="300" y1="300" x2="110" y2="130" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4"/>
                </svg>
              </div>
              <div className="eco-hub">
                <div className="eco-hub-inner">
                  <span className="eco-hub-text">BigMotion</span>
                  <span className="eco-hub-sub">CORE</span>
                </div>
              </div>
              <div className="eco-node node-1">
                <div className="eco-node-img">
                  <img src="https://cdn.simpleicons.org/meta/0467DF" alt="Meta" />
                </div>
                <span>Meta Ads</span>
              </div>
              <div className="eco-node node-2">
                <div className="eco-node-img">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/6s0xn00v_Google%20Business.png" alt="Google" />
                </div>
                <span>Google</span>
              </div>
              <div className="eco-node node-3">
                <div className="eco-node-img">
                  <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" />
                </div>
                <span>WhatsApp</span>
              </div>
              <div className="eco-node node-4">
                <div className="eco-node-img">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/475sh1cs_instagram%20logo.png" alt="Instagram" />
                </div>
                <span>Instagram</span>
              </div>
              <div className="eco-node node-5">
                <div className="eco-node-img">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/m9tc1ulu_OpenAI%20logo.png" alt="AI" />
                </div>
                <span>AI Auto.</span>
              </div>
              <div className="eco-node node-6">
                <div className="eco-node-img">
                  <img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Shopify" />
                </div>
                <span>E-Comm.</span>
              </div>
              <div className="eco-node node-7">
                <div className="eco-node-img eco-node-icon-bg">
                  <BarChart3 size={20} />
                </div>
                <span>CRM</span>
              </div>
              <div className="eco-node node-8">
                <div className="eco-node-img">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/krfg2rzo_Google%20Map%20Icon.png" alt="SEO" />
                </div>
                <span>SEO</span>
              </div>
            </div>
          </ScaleIn>

        </div>
      </section>




      {/* Metrics */}
      <section className="metrics-section reveal" style={{ padding: '140px 60px' }}>
        <div className="section-container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <FadeUp>
            <span className="section-tag">RESULTS</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">REAL GROWTH.</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>REAL IMPACT.</TextReveal>
          </h2>
        </div>
        <div className="metrics-grid">
          <MetricCard icon={<Code2 size={40} />} value="500+" label="Projects Delivered" />
          <MetricCard icon={<Sparkles size={40} />} value="100+" label="Brands Transformed" />
          <MetricCard icon={<TrendingUp size={40} />} value="10M+" label="Audience Reach Generated" />
          <MetricCard icon={<Award size={40} />} value="95%" label="Client Retention Rate" />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section reveal">
        <div className="section-container">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="section-title">
            <TextReveal as="span">BUSINESSES</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>IN MOTION.</TextReveal>
          </h2>
          <p className="section-subtitle">
            Hear from businesses that partnered with BigMotion to transform their digital presence and accelerate growth.
          </p>
          
          <div className="testimonials-grid">
            <TestimonialCard 
              text="BigMotion didn't just run ads — they rebuilt our entire digital presence. Within 3 months we went from 2k to 45k followers and our leads tripled."
              name="Rahul Kapoor"
              business="FreshEats — Food Brand"
              result="📈 +312% lead growth in 90 days"
              initials="RK"
            />
            <TestimonialCard 
              text="The website they built for us is incredible — fast, beautiful, and converts. Our online store revenue went from ₹2L to ₹18L/month in 6 months."
              name="Priya Sharma"
              business="StyleCraft — Fashion E-Commerce"
              result="💰 9x revenue growth in 6 months"
              initials="PS"
            />
            <TestimonialCard 
              text="Their AI automation system saved us 40+ hours per week. The WhatsApp bot alone handles 200+ inquiries a day. Pure magic for our real estate business."
              name="Arjun Joshi"
              business="PrimeProperties — Real Estate"
              result="⚡ 200+ daily automated inquiries"
              initials="AJ"
            />
          </div>
        </div>
      </section>

      {/* Clients & Brands */}
      <section id="clients" className="clients-section reveal">
        <div className="section-container">
          <span className="section-tag">OUR CLIENTS</span>
          <h2 className="section-title">
            <TextReveal as="span">TRUSTED BY</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>GROWING BRANDS.</TextReveal>
          </h2>
          <p className="section-subtitle">
            From local startups and established businesses to ambitious entrepreneurs, we partner with brands that are ready to grow.
          </p>
        </div>
        
        <div className="clients-carousel">
          <div className="clients-track">
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                <div className="client-logo-card">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/dib5e2zt_Titan%20world%20logo.jpg" alt="Titan World" />
                </div>
                <div className="client-logo-card">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/wl077orw_manyavar-logo.png" alt="Manyavar" />
                </div>
                <div className="client-logo-card">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/0pigp1fj_BLACKBERRY%20logo.jpg" alt="Blackberrys" />
                </div>
                <div className="client-logo-card">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/sfwc0076_Titan%20Eye%2B%20logo.jpg" alt="Titan Eye+" />
                </div>
                <div className="client-logo-card">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/8qpt8nhl_Cake%26Cafe.png" alt="Cake and Cafe" />
                </div>
                <div className="client-logo-card">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/95smo24n_Curls%26Cafe%20Logo.jpg" alt="Curls & Café" />
                </div>
                <div className="client-logo-card">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/2a3cq62c_Bluewhale%20Brand%20Name.svg" alt="BlueWhale Publications" className="logo-light" />
                </div>
                <div className="client-logo-card">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/qcyoj6k1_HAirDresser%20logo.jpg" alt="Hairdresser" />
                </div>
                <div className="client-logo-card">
                  <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/9dzwk0xo_Wisdom%20dental%20logo.jpg" alt="Wisdom Dental Care" />
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="clients-fade-left" />
          <div className="clients-fade-right" />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section reveal">
        <div className="section-container">
          <span className="section-tag">PLANS</span>
          <h2 className="section-title">
            <TextReveal as="span">FLEXIBLE SOLUTIONS FOR EVERY</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>STAGE OF GROWTH.</TextReveal>
          </h2>
          <p className="section-subtitle">
            Retainer packages engineered to match your stage of growth. No surprises — just results.
          </p>
          
          <div className="pricing-grid">
            <PricingCard 
              tier="Tier 01"
              name="STARTER"
              price="₹15K"
              period="/month"
              description="For businesses beginning their digital journey."
              features={[
                'Social Media Setup & Management',
                'Google Business Optimization',
                '4 Reels / Month',
                'Basic Meta Ads Management',
                'Monthly Performance Report',
                'WhatsApp Business Setup'
              ]}
              buttonText="Get Started"
              outlined
            />
            <PricingCard 
              tier="Tier 02"
              name="GROWTH"
              price="₹35K"
              period="/month"
              description="For businesses looking to scale visibility and customer acquisition."
              features={[
                'Everything in Starter',
                'Custom Website Development',
                '8 Reels + Ad Creatives/Month',
                'Meta + Google Ads',
                'SEO & Lead Generation',
                'AI Chatbot Integration',
                'CRM Setup & Automation',
                'Bi-weekly Strategy Calls'
              ]}
              buttonText="Start Growing →"
              popular
            />
            <PricingCard 
              tier="Tier 03"
              name="MOMENTUM"
              price="₹75K"
              period="/month"
              description="For brands seeking complete digital transformation and accelerated growth."
              features={[
                'Everything in Growth',
                'Mobile App Development',
                'Full E-Commerce System',
                'AI Growth Automation Suite',
                'Influencer Campaign Management',
                'Dedicated Growth Manager',
                'Custom Analytics Dashboard',
                'Weekly Strategy Sessions',
                'Priority 24/7 Support'
              ]}
              buttonText="Claim Momentum"
              outlined
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery-section">
        <div className="section-container">
          <FadeUp>
            <span className="section-tag">BEHIND THE SCENES</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">THE WORK BEHIND</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>THE GROWTH.</TextReveal>
          </h2>
          <FadeUp delay={0.3}>
            <p className="section-subtitle">
              A glimpse into our creative process, strategy sessions, production shoots, development work, and campaign execution.
            </p>
          </FadeUp>
          
          <div className="gallery-grid">
            <FadeUp delay={0.1} className="gallery-item-wrap gallery-tall">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Studio" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">Studio</span>
                  <h4>Product Shoot Studio</h4>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="gallery-item-wrap">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80" alt="Camera" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">Production</span>
                  <h4>Reel Production</h4>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.3} className="gallery-item-wrap">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Dev Lab" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">Development</span>
                  <h4>Dev Lab</h4>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.4} className="gallery-item-wrap gallery-tall">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Strategy" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">Strategy</span>
                  <h4>Client Sessions</h4>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="gallery-item-wrap">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80" alt="Editing" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">Post Production</span>
                  <h4>Editing Suite</h4>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.25} className="gallery-item-wrap">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80" alt="Drone" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">Cinematic</span>
                  <h4>Drone Shoots</h4>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section reveal">
        <div className="section-container">
          <div className="about-content">
            <div className="about-left">
              <span className="section-tag">ABOUT BIGMOTION</span>
              <h2 className="section-title">
                <TextReveal as="span">THE TEAM BEHIND</TextReveal><br />
                <TextReveal as="span" className="brand-gradient" delay={0.15}>THE MOTION.</TextReveal>
              </h2>
              <p className="section-subtitle">
                BigMotion is powered by a diverse team of MBA marketers, creative strategists, developers, content creators, designers, and AI specialists. Together, we combine business thinking, creativity, and technology to help brands unlock their full digital potential.
              </p>
              
              <div className="about-mv-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                marginTop: '40px',
                width: '100%'
              }}>
                <div className="about-mv-card" style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '32px 28px',
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                    marginBottom: '20px'
                  }}>
                    <Target size={22} />
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: 'var(--white)' }}>
                    Our Mission
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--gray)' }}>
                    To empower businesses with innovative digital systems that create sustainable growth.
                  </p>
                </div>

                <div className="about-mv-card" style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '32px 28px',
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(232, 141, 255, 0.1)',
                    border: '1px solid rgba(232, 141, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--purple)',
                    marginBottom: '20px'
                  }}>
                    <Sparkles size={22} />
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: 'var(--white)' }}>
                    Our Vision
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--gray)' }}>
                    To become the most trusted digital growth partner for ambitious businesses across India and beyond.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="about-right">
              <div className="team-label">Our Team</div>
              <div className="team-grid">
                <TeamMember 
                  name="Aniket Raj" 
                  role="Marketeer" 
                  url="https://www.linkedin.com/in/aniket-raj-829008284/" 
                  image="/images/Aniket Raj Picture.png"
                />
                <TeamMember 
                  name="Pratik Raj" 
                  role="Developer" 
                  url="https://ipratikkraj.github.io/Pratik-Portfolio/" 
                  image="/images/Pratik Picture.jpeg"
                />
                <TeamMember 
                  name="Shivam Sharma" 
                  role="Researcher" 
                  url="https://www.linkedin.com/in/shivam-sharma-511035305/"
                />
                <TeamMember 
                  name="Akas Oraon" 
                  role="Creative Head" 
                  url="https://www.linkedin.com/in/akash-oraon-027b85414/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="final-cta-section reveal" style={{ padding: '120px 60px', background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)', position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="section-container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            <TextReveal as="span">READY TO MOVE YOUR</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>BUSINESS FORWARD?</TextReveal>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '750px', marginBottom: '40px', margin: '0 auto 40px' }}>
            Whether you're launching, growing, or scaling, BigMotion provides the strategy, technology, and execution needed to build a powerful digital presence and drive real business growth.
          </p>
          <div className="cta-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              <span>Book A Free Consultation</span>
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              Let's Talk Growth
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section reveal">
        <div className="section-container">
          <div className="contact-content">
            <div className="contact-left">
              <span className="section-tag">CONTACT US</span>
              <h2 className="contact-title">
                LET'S BUILD<br />
                <span className="brand-gradient">SOMETHING BIG.</span>
              </h2>
              <p className="contact-subtitle">
                Tell us about your business, goals, and challenges. We'll help you create a roadmap for digital growth.
              </p>
              
              <div className="contact-channels">
                <a href="tel:+919572115666" className="channel-button">
                  <Phone size={24} />
                  <div className="channel-info">
                    <span className="channel-label">Call Us</span>
                    <span className="channel-value">+91 95721 15666</span>
                  </div>
                </a>
                <a href="https://wa.me/919572115666" className="channel-button">
                  <MessageCircle size={24} />
                  <div className="channel-info">
                    <span className="channel-label">WhatsApp</span>
                    <span className="channel-value">Chat with us instantly</span>
                  </div>
                </a>
                <a href="mailto:bigmotionofficials@gmail.com" className="channel-button">
                  <Mail size={24} />
                  <div className="channel-info">
                    <span className="channel-label">Email</span>
                    <span className="channel-value">bigmotionofficials@gmail.com</span>
                  </div>
                </a>
                <div className="channel-button" style={{ cursor: 'default' }}>
                  <Compass size={24} style={{ color: 'var(--blue)' }} />
                  <div className="channel-info">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">Ramgarh, Jharkhand, India</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">
              <img 
                src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/2k02qtqc_BM%20T.png" 
                alt="BigMotion" 
                className="footer-logo"
              />
              <p className="footer-tagline" style={{ fontWeight: '700', fontSize: '18px', color: 'var(--white)', marginBottom: '8px' }}>
                Growth In Motion.
              </p>
              <p className="footer-keywords" style={{ fontSize: '12px', color: 'var(--gray)', marginBottom: '8px', letterSpacing: '0.5px' }}>
                Strategy • Branding • Content • Technology • AI • Growth
              </p>
              <p className="footer-sub-tagline" style={{ fontSize: '14px', color: 'var(--white)', fontWeight: '600', marginBottom: '20px' }}>
                Turning Attention Into Business Growth. 🚀
              </p>
              <div className="footer-socials">
                <a href="#" className="social-link"><Instagram size={20} /></a>
                <a href="#" className="social-link"><Facebook size={20} /></a>
                <a href="#" className="social-link"><Youtube size={20} /></a>
                <a href="#" className="social-link"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#services">Digital Presence</a>
                <a href="#services">Content Production</a>
                <a href="#services">Development</a>
                <a href="#services">Marketing</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a onClick={() => scrollToSection('about')}>About Us</a>
                <a onClick={() => scrollToSection('testimonials')}>Testimonials</a>
                <a onClick={() => scrollToSection('pricing')}>Pricing</a>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <a href="tel:+919572115666">+91 95721 15666</a>
                <a href="mailto:bigmotionofficials@gmail.com">bigmotionofficials@gmail.com</a>
                <a href="https://wa.me/919572115666">WhatsApp Support</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 BigMotion. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Component Helpers
const ServiceCard = ({ icon, title, description, tags, image, delay = 0 }) => (
  <FadeUp delay={delay} className="service-card-wrap">
    <div className="service-card">
      <div className="service-card-bg" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="service-card-content">
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="service-tags">
          {tags.map((tag, i) => (
            <span key={i} className="service-tag">{tag}</span>
          ))}
        </div>
        <div className="service-arrow"><ArrowRight size={18} /></div>
      </div>
    </div>
  </FadeUp>
);



const MetricCard = ({ icon, value, label }) => (
  <div className="metric-card reveal">
    <div className="metric-icon">{icon}</div>
    <div className="metric-value">{value}</div>
    <div className="metric-label">{label}</div>
  </div>
);

const TestimonialCard = ({ text, name, business, result, initials }) => (
  <div className="testimonial-card reveal">
    <div className="stars">★★★★★</div>
    <p className="testimonial-text">{text}</p>
    <div className="testimonial-person">
      <div className="avatar">{initials}</div>
      <div>
        <div className="testimonial-name">{name}</div>
        <div className="testimonial-business">{business}</div>
      </div>
    </div>
    <div className="testimonial-result">{result}</div>
  </div>
);

const PricingCard = ({ tier, name, price, period, description, features, buttonText, popular, outlined }) => (
  <div className={`pricing-card reveal ${popular ? 'popular' : ''}`}>
    {popular && <div className="popular-badge">MOST POPULAR</div>}
    <div className="pricing-tier">{tier}</div>
    <div className="pricing-name">{name}</div>
    <div className="pricing-price">
      <span className="price-value">{price}</span>
      <span className="price-period">{period}</span>
    </div>
    <p className="pricing-description">{description}</p>
    <div className="pricing-divider" />
    <ul className="pricing-features">
      {features.map((feature, i) => (
        <li key={i}><ChevronRight size={16} /> {feature}</li>
      ))}
    </ul>
    <button className={`pricing-button ${outlined ? 'outlined' : 'solid'}`}>
      {buttonText}
    </button>
  </div>
);

const EcoNode = ({ icon, label, position }) => (
  <div className={`eco-node ${position}`}>
    <div className="eco-node-icon">{icon}</div>
    <span>{label}</span>
  </div>
);

const ValueItem = ({ icon, title, description }) => (
  <div className="value-item">
    <div className="value-icon">{icon}</div>
    <div className="value-text">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const TeamMember = ({ name, role, url, image }) => {
  const Card = url ? 'a' : 'div';
  return (
    <Card 
      href={url} 
      target={url ? "_blank" : undefined} 
      rel={url ? "noopener noreferrer" : undefined} 
      className="team-member"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: url ? 'pointer' : 'default' }}
    >
      <div className="team-avatar" style={{ overflow: 'hidden' }}>
        {image ? (
          <img 
            src={image} 
            alt={name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          />
        ) : (
          name.split(' ').map(n => n[0]).join('')
        )}
      </div>
      <div className="team-name">{name}</div>
      <div className="team-role">{role}</div>
    </Card>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    'Digital Presence Setup',
    'Content Production',
    'Website / App Development',
    'Performance Marketing',
    'AI & Automation',
    'Full Growth Package'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.service) {
      alert('Please select a service.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll get back to you soon.');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-row">
        <div className="form-field">
          <label>Your Name</label>
          <input 
            type="text" 
            placeholder="Rahul Sharma" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div className="form-field">
          <label>Business Name</label>
          <input 
            type="text" 
            placeholder="Your Brand" 
            value={formData.business}
            onChange={(e) => setFormData({...formData, business: e.target.value})}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="rahul@yourbrand.com" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div className="form-field">
          <label>Phone Number</label>
          <input 
            type="tel" 
            placeholder="+91 99999 88888" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>
      <div className="form-field" ref={dropdownRef}>
        <label>What Do You Need?</label>
        <div className="custom-select-container">
          <button 
            type="button" 
            className={`custom-select-trigger ${isDropdownOpen ? 'open' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{formData.service || 'Select a service...'}</span>
            <ChevronRight 
              size={16} 
              className="arrow-icon" 
              style={{ 
                transform: isDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)', 
                transition: 'transform 0.2s ease',
                color: 'var(--gray)'
              }} 
            />
          </button>
          
          {isDropdownOpen && (
            <div className="custom-select-options">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`custom-select-option ${formData.service === service ? 'selected' : ''}`}
                  onClick={() => {
                    setFormData({...formData, service: service});
                    setIsDropdownOpen(false);
                  }}
                >
                  {service}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-field">
        <label>Tell Us About Your Business</label>
        <textarea 
          rows="4" 
          placeholder="Brief us on your business, goals, and challenges..." 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>
      <button type="submit" className="form-submit">
        SEND MESSAGE — LET'S GROW <ChevronRight size={20} />
      </button>
    </form>
  );
};

// Helper Functions
const getRandomColor = () => {
  const colors = ['#1a0533', '#0d3b1e', '#1a1a0d', '#001a2e', '#1a0020', '#0a1a00', '#0d1b3e', '#1a0d2e', '#2d1500'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getReelTag = (index) => {
  const tags = ['Brand Reel', 'Product Shoot', 'Meta Ad', 'Instagram', 'Influencer', 'Before/After'];
  return tags[index % tags.length];
};

const getReelTitle = (index) => {
  const titles = ['Launch Campaign', 'E-Commerce Ad', 'Lead Generation', 'Viral Reel', 'Collab Campaign', 'Brand Transform'];
  return titles[index % titles.length];
};

export default LandingPage;