import React from 'react';
import { Shirt, Bookmark, Mail, Search, Sparkles, Calculator, Layers, ShieldCheck } from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  savedCount, 
  onOpenNewsletter, 
  activePersona, 
  setActivePersona,
  searchQuery,
  setSearchQuery
}) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(252, 249, 242, 0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--color-border)' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-inverse)', padding: '0.4rem 1rem', fontSize: '0.82rem', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} color="var(--color-ochre)" />
            <strong>Budget-Anchored Slow Fashion:</strong> Real prices, real thrift finds, zero preachiness.
          </span>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <span style={{ opacity: 0.8 }}>Read for your target budget:</span>
            <button 
              onClick={() => setActivePersona('reforming-fast-fashion')}
              style={{
                background: activePersona === 'reforming-fast-fashion' ? 'var(--color-terracotta)' : 'rgba(255,255,255,0.15)',
                color: '#fff',
                padding: '0.15rem 0.6rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: activePersona === 'reforming-fast-fashion' ? '700' : '500'
              }}
            >
              Fast Fashion Switcher
            </button>
            <button 
              onClick={() => setActivePersona('broke-ethical-shopper')}
              style={{
                background: activePersona === 'broke-ethical-shopper' ? 'var(--color-sage)' : 'rgba(255,255,255,0.15)',
                color: '#fff',
                padding: '0.15rem 0.6rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: activePersona === 'broke-ethical-shopper' ? '700' : '500'
              }}
            >
              Budget Eco Shopper
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
        {/* Brand Logo */}
        <button onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <Shirt size={22} />
          </div>
          <div>
            <span className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'block', color: 'var(--bg-dark)' }}>
              THREAD & THRIFT
            </span>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-terracotta)', fontWeight: 700 }}>
              Slow Fashion • Real Budget
            </span>
          </div>
        </button>

        {/* Search & Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input 
              type="text"
              placeholder="Search posts, apps, mend tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '2.2rem', width: '220px', fontSize: '0.85rem', height: '38px', borderRadius: 'var(--radius-full)' }}
            />
          </div>

          <button 
            onClick={() => setActiveTab('saved')} 
            className="btn btn-outline" 
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem', position: 'relative' }}
          >
            <Bookmark size={16} />
            <span>Saved</span>
            {savedCount > 0 && (
              <span style={{ backgroundColor: 'var(--color-terracotta)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, borderRadius: '50%', width: '18px', height: '18px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: '0.2rem' }}>
                {savedCount}
              </span>
            )}
          </button>

          <button 
            onClick={onOpenNewsletter} 
            className="btn btn-primary"
            style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
          >
            <Mail size={16} />
            <span>Free Guide</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--bg-accent)' }}>
        <div className="container" style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', padding: '0.4rem 1.5rem' }}>
          <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')}>All Pillars</NavButton>
          <NavButton active={activeTab === 'Start Here'} onClick={() => setActiveTab('Start Here')}>🚩 Start Here</NavButton>
          <NavButton active={activeTab === 'Thrift & Secondhand'} onClick={() => setActiveTab('Thrift & Secondhand')}>🛍️ Thrift & Secondhand</NavButton>
          <NavButton active={activeTab === 'Buy Better'} onClick={() => setActiveTab('Buy Better')}>🌱 Buy Better</NavButton>
          <NavButton active={activeTab === 'Make It Last'} onClick={() => setActiveTab('Make It Last')}>🪡 Make It Last</NavButton>
          <NavButton active={activeTab === 'Guides & Explainers'} onClick={() => setActiveTab('Guides & Explainers')}>📖 Guides & Myth-Busting</NavButton>
          <NavButton active={activeTab === 'calculator'} onClick={() => setActiveTab('calculator')} highlight="terracotta">
            <Calculator size={14} style={{ marginRight: '4px' }} /> Cost-Per-Wear Math
          </NavButton>
          <NavButton active={activeTab === 'capsule'} onClick={() => setActiveTab('capsule')} highlight="sage">
            <Layers size={14} style={{ marginRight: '4px' }} /> 15-Piece Capsule Tool
          </NavButton>
          <NavButton active={activeTab === 'brands'} onClick={() => setActiveTab('brands')}>
            <ShieldCheck size={14} style={{ marginRight: '4px' }} /> Brand Checker
          </NavButton>
        </div>
      </nav>
    </header>
  );
}

function NavButton({ children, active, onClick, highlight }) {
  let style = {
    padding: '0.4rem 0.9rem',
    borderRadius: 'var(--radius-full)',
    fontSize: '0.85rem',
    fontWeight: active ? '700' : '500',
    color: active ? '#fff' : 'var(--text-main)',
    backgroundColor: active ? 'var(--bg-dark)' : 'transparent',
    whiteSpace: 'nowrap',
    transition: 'var(--transition)'
  };

  if (highlight === 'terracotta' && !active) {
    style.color = 'var(--color-terracotta)';
    style.fontWeight = '700';
  } else if (highlight === 'sage' && !active) {
    style.color = 'var(--color-sage)';
    style.fontWeight = '700';
  }

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
