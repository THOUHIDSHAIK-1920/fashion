import React from 'react';
import { ArrowRight, Sparkles, Tag, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ cornerstoneArticle, onSelectArticle, setActiveTab }) {
  return (
    <section style={{ padding: '2.5rem 0 2rem', backgroundColor: 'var(--bg-accent)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Mission & Persona Anchor */}
          <div>
            <div className="badge badge-terracotta" style={{ marginBottom: '1rem' }}>
              <Sparkles size={12} /> Real Budget Sustainable Style
            </div>
            
            <h1 style={{ fontSize: '2.75rem', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Look great. Ditch fast fashion. <br/>
              <span style={{ color: 'var(--color-terracotta)', fontStyle: 'italic' }}>Keep your savings.</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Sustainable fashion shouldn't mean buying $200 organic linen t-shirts. 
              We offer practical thrifting tactics, 20-minute repair hacks, and transparent cost-per-wear formulas for real-world incomes.
            </p>

            {/* Core Promises List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={18} color="var(--color-sage)" />
                <span><strong>Budget-Anchored:</strong> Every guide includes price checks & cost-per-wear formulas.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={18} color="var(--color-sage)" />
                <span><strong>Non-Preachy Guarantee:</strong> Actionable steps to do one thing differently today.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={18} color="var(--color-sage)" />
                <span><strong>Zero Luxury Guilt:</strong> Using what you already own comes first.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onSelectArticle(cornerstoneArticle)} 
                className="btn btn-primary"
              >
                Read Cornerstone Guide <ArrowRight size={18} />
              </button>
              
              <button 
                onClick={() => setActiveTab('calculator')} 
                className="btn btn-outline"
              >
                Try Cost-Per-Wear Calculator
              </button>
            </div>
          </div>

          {/* Right Column: Featured Pillar Card */}
          <div 
            onClick={() => onSelectArticle(cornerstoneArticle)}
            style={{ 
              backgroundColor: 'var(--bg-surface)', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
            className="hover-card"
          >
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <img 
                src={cornerstoneArticle.image} 
                alt={cornerstoneArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className="badge badge-terracotta" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                CORNERSTONE PILLAR
              </span>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {cornerstoneArticle.readTime}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Tag size={14} /> {cornerstoneArticle.budgetRating}</span>
              </div>

              <h2 style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>
                {cornerstoneArticle.title}
              </h2>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {cornerstoneArticle.summary}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-sage)' }}>By {cornerstoneArticle.author}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-terracotta)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                  Read Article →
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
