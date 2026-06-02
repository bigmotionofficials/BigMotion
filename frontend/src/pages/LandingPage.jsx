import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, Target, Sparkles, Video, Zap, TrendingUp, BarChart3, Bot, ShoppingCart, Search, Share2, Phone, Mail, MessageCircle, ChevronRight, Instagram, Facebook, Youtube, Linkedin, Menu, X, Camera, Lightbulb, Rocket, Compass, Palette, Code2, Award } from 'lucide-react';
import { TextReveal, FadeUp, ScaleIn } from '../components/TextReveal';
import '../styles/landing.css';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
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
              <a onClick={() => scrollToSection('clients')}>Clients</a>
              <a onClick={() => scrollToSection('process')}>Process</a>
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
                AI-Powered Digital Agency
              </div>
            </FadeUp>
            
            <h1 className="hero-title">
              <TextReveal as="span" className="hero-line">MORE THAN</TextReveal><br />
              <TextReveal as="span" className="hero-line gradient-text" delay={0.15}>MARKETING.</TextReveal><br />
              <TextReveal as="span" className="hero-line" delay={0.3}>WE BUILD</TextReveal><br />
              <TextReveal as="span" className="hero-line" delay={0.45}>GROWTH SYSTEMS.</TextReveal>
            </h1>
            
            <FadeUp delay={0.7}>
              <p className="hero-subtitle">
                BigMotion helps businesses build powerful digital identities that attract 
                attention, build trust, and generate real growth through strategy, branding, 
                content, technology, and AI-powered systems.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.85}>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                  <span>Book Free Consultation</span>
                  <ArrowRight size={20} />
                </button>
                <button className="btn-secondary" onClick={() => scrollToSection('services')}>
                  Explore Services
                </button>
              </div>
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
        <div className="marquee-label">Tools & Platforms We Work With</div>
        <div className="marquee-track">
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" />
                <span>Facebook</span>
              </div>
              <div className="marquee-item">
                <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/475sh1cs_instagram%20logo.png" alt="Instagram" />
                <span>Instagram</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp Business" />
                <span>WhatsApp Business</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/meta/0467DF" alt="Meta Ads" />
                <span>Meta Ads</span>
              </div>
              <div className="marquee-item">
                <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/6s0xn00v_Google%20Business.png" alt="Google Business" />
                <span>Google Business</span>
              </div>
              <div className="marquee-item">
                <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/krfg2rzo_Google%20Map%20Icon.png" alt="Google Maps" />
                <span>Google Maps</span>
              </div>
              <div className="marquee-item">
                <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/uuprez1t_linkedin%20icon.png" alt="LinkedIn" />
                <span>LinkedIn</span>
              </div>
              <div className="marquee-item">
                <img src="https://customer-assets.emergentagent.com/job_growth-engine-283/artifacts/m9tc1ulu_OpenAI%20logo.png" alt="OpenAI" />
                <span>OpenAI</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/anthropic/D4A27F" alt="Anthropic" />
                <span>Anthropic</span>
              </div>
              <div className="marquee-item">
                <img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Shopify" />
                <span>Shopify</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Our Concept */}
      <section id="concept" className="concept-section">
        <div className="section-container">
          <FadeUp>
            <span className="section-tag">◆ Our Concept</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">NOT JUST AN</TextReveal><br/>
            <TextReveal as="span" className="brand-gradient" delay={0.15}>AGENCY.</TextReveal>
          </h2>
          <FadeUp delay={0.3}>
            <p className="section-subtitle">
              We combine marketing, technology, AI, branding, and content systems to help 
              businesses dominate digitally. BigMotion is your complete transformation partner.
            </p>
          </FadeUp>
          
          <div className="pillars-grid">
            <FadeUp delay={0.1} className="pillar-card-wrap">
              <div className="pillar-card">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><Target size={32} /></div>
                <h4>Strategy</h4>
                <p>Data-driven growth roadmaps tailored to your market and ambitions.</p>
                <div className="pillar-arrow"><ArrowRight size={18} /></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="pillar-card-wrap">
              <div className="pillar-card">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><Sparkles size={32} /></div>
                <h4>Branding</h4>
                <p>Premium identities that command attention and build lasting trust.</p>
                <div className="pillar-arrow"><ArrowRight size={18} /></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.3} className="pillar-card-wrap">
              <div className="pillar-card">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><Video size={32} /></div>
                <h4>Content</h4>
                <p>Cinematic content production — reels, ads, campaigns that convert.</p>
                <div className="pillar-arrow"><ArrowRight size={18} /></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.4} className="pillar-card-wrap">
              <div className="pillar-card">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><Zap size={32} /></div>
                <h4>Technology</h4>
                <p>Websites, apps, CRMs, and AI automation systems that scale.</p>
                <div className="pillar-arrow"><ArrowRight size={18} /></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.5} className="pillar-card-wrap pillar-featured-wrap">
              <div className="pillar-card featured">
                <div className="pillar-glow"></div>
                <div className="pillar-icon"><TrendingUp size={32} /></div>
                <h4>Growth</h4>
                <p>End-to-end growth systems — funnels, analytics, ads, and conversion optimization working as one unified engine.</p>
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
              <span className="section-tag">◆ Our Story · Since 2024</span>
              <h2 className="story-title">
                FROM LOCAL ROOTS<br />
                <span className="story-title-italic">TO DIGITAL POWER.</span>
              </h2>
              
              <p className="story-paragraph">
                We saw ambitious businesses struggling with limited digital visibility in a 
                fast-moving world where attention drives growth. That led to the birth of 
                BigMotion — a collective of MBA marketers, creative strategists, developers, 
                content creators, and AI specialists united by one mission: to transform 
                businesses into powerful digital brands that grow, scale, and dominate online.
              </p>
              
              <p className="story-paragraph">
                Today, we build modern digital ecosystems powered by strategy, creativity, 
                technology, and AI to help brands become market leaders in the digital era.
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

      {/* Services */}
      <section id="services" className="services-section">
        <div className="section-container">
          <FadeUp>
            <span className="section-tag">◆ Services</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">EVERYTHING YOU</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>NEED TO DOMINATE.</TextReveal>
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
              description="Complete online identity setup — branding, social profiles, Google Business, and WhatsApp Business to make your business undeniable."
              tags={['Branding', 'Social Setup', 'Google Business', 'WhatsApp']}
              image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80"
              delay={0.1}
            />
            <ServiceCard 
              icon={<Video size={32} />}
              title="Content Production"
              description="Cinematic reels, product shoots, ad creatives, and influencer campaigns that stop the scroll and drive action."
              tags={['Reels', 'Product Shoots', 'Ad Creatives', 'Influencer']}
              image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80"
              delay={0.2}
            />
            <ServiceCard 
              icon={<Code2 size={32} />}
              title="Development"
              description="High-performance websites, e-commerce stores, mobile apps, AI systems, and custom CRM dashboards built to convert."
              tags={['Websites', 'E-Commerce', 'Mobile Apps', 'AI Systems']}
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
              delay={0.3}
            />
            <ServiceCard 
              icon={<BarChart3 size={32} />}
              title="Performance Marketing"
              description="Data-driven Meta Ads, Google Ads, SEO, and precision lead generation systems that turn clicks into customers."
              tags={['Meta Ads', 'Google Ads', 'SEO', 'Lead Generation']}
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              delay={0.1}
            />
            <ServiceCard 
              icon={<Bot size={32} />}
              title="AI & Automation"
              description="Smart automation pipelines, AI chatbots, CRM integrations, and intelligent funnels that work 24/7 to grow your business."
              tags={['Automation', 'AI Bots', 'CRM', 'Funnels']}
              image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
              delay={0.2}
            />
            <ServiceCard 
              icon={<TrendingUp size={32} />}
              title="Business Growth"
              description="Complete growth ecosystems — analytics dashboards, conversion optimization, A/B testing, and strategic consulting."
              tags={['Analytics', 'Conversion', 'A/B Testing', 'Strategy']}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section id="showcase" className="showcase-section reveal">
        <div className="section-container">
          <span className="section-tag">Content Showcase</span>
          <h2 className="section-title">CONTENT THAT<br />CONVERTS.</h2>
          <p className="section-subtitle">
            Cinematic content built for attention, engagement, and results across every platform.
          </p>
        </div>
        
        <div className="reel-carousel">
          <div className="reel-track">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="reel-card">
                <div className="reel-gradient" style={{ 
                  background: `linear-gradient(135deg, ${getRandomColor()}, #0b0b0f, ${getRandomColor()})` 
                }} />
                <div className="reel-play"><Play size={32} /></div>
                <div className="reel-overlay">
                  <div className="reel-tag">{getReelTag(i)}</div>
                  <div className="reel-title">{getReelTitle(i)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="ecosystem-section">
        <div className="section-container">
          <FadeUp>
            <span className="section-tag">◆ Digital Ecosystem</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">EVERYTHING</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>CONNECTED.</TextReveal>
          </h2>
          <FadeUp delay={0.3}>
            <p className="section-subtitle">
              One unified digital ecosystem powering every channel of your growth.
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

      {/* Process */}
      <section id="process" className="process-section">
        <div className="section-container">
          <FadeUp>
            <span className="section-tag">◆ Our Process</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">HOW WE BUILD</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>WINNERS.</TextReveal>
          </h2>
          <FadeUp delay={0.3}>
            <p className="section-subtitle">
              A proven 5-step roadmap that transforms ambitious brands into market leaders.
            </p>
          </FadeUp>
          
          <div className="process-timeline">
            <div className="process-line"></div>
            <FadeUp delay={0.1}>
              <div className="process-card">
                <div className="process-card-num">01</div>
                <div className="process-card-icon">
                  <Compass size={28} />
                </div>
                <h3>Discovery</h3>
                <p>Deep-dive into your business, market, competition, and audience to map the real opportunity.</p>
                <div className="process-card-glow"></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="process-card">
                <div className="process-card-num">02</div>
                <div className="process-card-icon">
                  <Lightbulb size={28} />
                </div>
                <h3>Strategy</h3>
                <p>Craft a precise growth roadmap — every channel, asset, and campaign planned for maximum ROI.</p>
                <div className="process-card-glow"></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="process-card">
                <div className="process-card-num">03</div>
                <div className="process-card-icon">
                  <Palette size={28} />
                </div>
                <h3>Creation</h3>
                <p>Content production, brand development, website/app builds — everything crafted to perfection.</p>
                <div className="process-card-glow"></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="process-card">
                <div className="process-card-num">04</div>
                <div className="process-card-icon">
                  <Rocket size={28} />
                </div>
                <h3>Launch</h3>
                <p>Simultaneous deployment of campaigns, systems, and platforms for maximum market impact.</p>
                <div className="process-card-glow"></div>
              </div>
            </FadeUp>
            <FadeUp delay={0.5}>
              <div className="process-card">
                <div className="process-card-num">05</div>
                <div className="process-card-icon">
                  <Award size={28} />
                </div>
                <h3>Scale</h3>
                <p>Continuous optimization, A/B testing, and growth hacking to compound results over time.</p>
                <div className="process-card-glow"></div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="metrics-section reveal">
        <div className="metrics-grid">
          <MetricCard icon={<TrendingUp size={40} />} value="10M+" label="Reach Generated" />
          <MetricCard icon={<Video size={40} />} value="200+" label="Creative Assets" />
          <MetricCard icon={<Bot size={40} />} value="AI" label="Powered Systems" />
          <MetricCard icon={<BarChart3 size={40} />} value="50+" label="Brands Scaled" />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section reveal">
        <div className="section-container">
          <span className="section-tag">Client Results</span>
          <h2 className="section-title">REAL GROWTH.<br />REAL WORDS.</h2>
          
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
          <span className="section-tag">◆ Trusted By Leading Brands</span>
          <h2 className="section-title">CLIENTS WHO<br />TRUST OUR <span className="story-title-italic">MOTION.</span></h2>
          <p className="section-subtitle">
            From national retail giants to passionate local brands — we've helped shape 
            digital presence and growth for businesses across every industry.
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
          <span className="section-tag">Investment</span>
          <h2 className="section-title">CHOOSE YOUR<br />GROWTH TIER.</h2>
          <p className="section-subtitle">
            Retainer packages engineered to match your stage of growth. No surprises — just results.
          </p>
          
          <div className="pricing-grid">
            <PricingCard 
              tier="Tier 01"
              name="STARTER"
              price="₹15K"
              period="/month"
              description="For small businesses building their digital foundation."
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
              description="For scaling brands ready to dominate their market."
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
              name="DOMINANCE"
              price="₹75K"
              period="/month"
              description="Full-scale digital ecosystem for serious market leaders."
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
              buttonText="Claim Dominance"
              outlined
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery-section">
        <div className="section-container">
          <FadeUp>
            <span className="section-tag">◆ Behind The Scenes</span>
          </FadeUp>
          <h2 className="section-title">
            <TextReveal as="span">THE STUDIO</TextReveal><br />
            <TextReveal as="span" className="brand-gradient" delay={0.15}>IN ACTION.</TextReveal>
          </h2>
          <FadeUp delay={0.3}>
            <p className="section-subtitle">
              A glimpse into the creative process — where ideas become campaigns and brands become legacies.
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
            <FadeUp delay={0.35} className="gallery-item-wrap gallery-tall">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b8?w=600&q=80" alt="Creative" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">Creative</span>
                  <h4>Direction Lab</h4>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.45} className="gallery-item-wrap">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Analytics" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">Analytics</span>
                  <h4>Campaign Metrics</h4>
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
              <span className="section-tag">About BigMotion</span>
              <h2 className="section-title">BUILT BY<br />OBSESSED<br />BUILDERS.</h2>
              <p className="section-subtitle">
                We're not just marketers. We're a team of strategists, creators, engineers, 
                and growth architects united by one goal — making your business impossible to ignore.
              </p>
              
              <div className="values-list">
                <ValueItem 
                  icon={<Target size={32} />}
                  title="Mission-Driven"
                  description="We measure our success by your growth — every campaign, every asset, every system is built with your business outcome as the north star."
                />
                <ValueItem 
                  icon={<BarChart3 size={32} />}
                  title="Data Over Guesswork"
                  description="Every decision is backed by analytics, A/B testing, and market intelligence — not gut feelings."
                />
                <ValueItem 
                  icon={<Zap size={32} />}
                  title="Speed & Precision"
                  description="We move fast and we move right. Premium quality at startup velocity."
                />
              </div>
            </div>
            
            <div className="about-right">
              <div className="team-label">Our Team</div>
              <div className="team-grid">
                <TeamMember name="Aryan Shah" role="Founder & CEO" />
                <TeamMember name="Neha Patel" role="Creative Director" />
                <TeamMember name="Karan Dev" role="Tech Lead" />
                <TeamMember name="Sana Khan" role="Growth Strategist" />
                <TeamMember name="Raj Verma" role="AI Engineer" />
                <TeamMember name="Aisha Nair" role="Content Head" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section reveal">
        <div className="section-container">
          <div className="contact-content">
            <div className="contact-left">
              <span className="section-tag">Contact</span>
              <h2 className="contact-title">
                LET'S BUILD YOUR<br />
                <span className="gradient-text">DIGITAL GROWTH</span><br />
                ENGINE.
              </h2>
              <p className="contact-subtitle">
                Schedule a free consultation and let's map out exactly how BigMotion can scale your business.
              </p>
              
              <div className="contact-channels">
                <a href="tel:+919876543210" className="channel-button">
                  <Phone size={24} />
                  <div className="channel-info">
                    <span className="channel-label">Call Us</span>
                    <span className="channel-value">+91 98765 43210</span>
                  </div>
                </a>
                <a href="https://wa.me/919876543210" className="channel-button">
                  <MessageCircle size={24} />
                  <div className="channel-info">
                    <span className="channel-label">WhatsApp</span>
                    <span className="channel-value">Chat with us instantly</span>
                  </div>
                </a>
                <a href="mailto:hello@bigmotion.agency" className="channel-button">
                  <Mail size={24} />
                  <div className="channel-info">
                    <span className="channel-label">Email</span>
                    <span className="channel-value">hello@bigmotion.agency</span>
                  </div>
                </a>
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
              <p className="footer-tagline">Vision Into Momentum</p>
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
                <a onClick={() => scrollToSection('process')}>Our Process</a>
                <a onClick={() => scrollToSection('testimonials')}>Testimonials</a>
                <a onClick={() => scrollToSection('pricing')}>Pricing</a>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <a href="tel:+919876543210">+91 98765 43210</a>
                <a href="mailto:hello@bigmotion.agency">hello@bigmotion.agency</a>
                <a href="https://wa.me/919876543210">WhatsApp Support</a>
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

const ProcessStep = ({ number, title, description }) => (
  <div className="process-step reveal">
    <div className="step-number">{number}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
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

const TeamMember = ({ name, role }) => (
  <div className="team-member">
    <div className="team-avatar">
      {name.split(' ').map(n => n[0]).join('')}
    </div>
    <div className="team-name">{name}</div>
    <div className="team-role">{role}</div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll get back to you soon.');
  };

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
      <div className="form-field">
        <label>What Do You Need?</label>
        <select 
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
          required
        >
          <option value="">Select a service...</option>
          <option>Digital Presence Setup</option>
          <option>Content Production</option>
          <option>Website / App Development</option>
          <option>Performance Marketing</option>
          <option>AI & Automation</option>
          <option>Full Growth Package</option>
        </select>
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