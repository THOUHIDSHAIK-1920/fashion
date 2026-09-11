import React from 'react';
import { Shirt, Heart, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenNewsletter }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-inverse)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '3rem', marginBottom: '2rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Shirt size={20} />
              </div>
              <span className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                THREAD & THRIFT
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-sand)', lineHeight: '1.6', marginBottom: '1.25rem', maxWidth: '360px' }}>
              Sustainable style that doesn't cost a fortune. Warm, practical, non-preachy guidance for real budgets, real thrift finds, and lasting care.
            </p>

            <button onClick={onOpenNewsletter} className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
              <Sparkles size={14} /> Get Free Thrifting Checklist
            </button>
          </div>

          {/* Pillar Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Content Pillars
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--color-sand)' }}>
              <li><button onClick={() => setActiveTab('Start Here')} style={{ color: 'inherit' }}>Start Here Roadmap</button></li>
              <li><button onClick={() => setActiveTab('Thrift & Secondhand')} style={{ color: 'inherit' }}>Thrifting & Apps</button></li>
              <li><button onClick={() => setActiveTab('Buy Better')} style={{ color: 'inherit' }}>Budget Ethical Brands</button></li>
              <li><button onClick={() => setActiveTab('Make It Last')} style={{ color: 'inherit' }}>Mending & Care</button></li>
              <li><button onClick={() => setActiveTab('Guides & Explainers')} style={{ color: 'inherit' }}>Greenwash Glossary</button></li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Budget Tools
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--color-sand)' }}>
              <li><button onClick={() => setActiveTab('calculator')} style={{ color: 'var(--color-ochre)' }}>Cost-Per-Wear Math</button></li>
              <li><button onClick={() => setActiveTab('capsule')} style={{ color: 'var(--color-sage)' }}>15-Piece Capsule Tool</button></li>
              <li><button onClick={() => setActiveTab('brands')} style={{ color: 'inherit' }}>Brand Audit Database</button></li>
              <li><button onClick={() => setActiveTab('saved')} style={{ color: 'inherit' }}>Saved Bookmarks</button></li>
            </ul>
          </div>

          {/* Persona Focus */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Our Promise
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-sand)', lineHeight: '1.5' }}>
              Every article is budget-anchored. No lecturing, no gatekeeping, and no $200 'basic' tees.
            </p>
          </div>

        </div>

        {/* Bottom copyright & Scroll to top */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--color-sand)' }}>
          <div>
            © 2026 Thread & Thrift • Crafted for real-world incomes with <Heart size={13} color="var(--color-terracotta)" style={{ display: 'inline', verticalAlign: 'middle' }} />
          </div>
          <button onClick={scrollToTop} className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
