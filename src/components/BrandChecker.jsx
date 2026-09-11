import React, { useState } from 'react';
import { BRAND_DATABASE } from '../data/contentData';
import { ShieldCheck, Search, CheckCircle, AlertTriangle, ArrowRight, ExternalLink } from 'lucide-react';

export default function BrandChecker() {
  const [query, setQuery] = useState('');

  const filteredBrands = BRAND_DATABASE.filter(brand => 
    brand.name.toLowerCase().includes(query.toLowerCase()) ||
    brand.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '2.5rem 0 3rem', backgroundColor: 'var(--bg-primary)', scrollMarginTop: '80px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <div className="badge badge-sage" style={{ marginBottom: '0.8rem' }}>
            <ShieldCheck size={13} /> Transparent Brand Audits
          </div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '0.6rem' }}>
            Brand Sustainability & Budget Checker
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Is your favorite brand actually sustainable, or just greenwashing? Search popular brands to get raw ratings on price, labor, and realistic alternatives.
          </p>

          <div style={{ position: 'relative', marginTop: '1.5rem', maxWidth: '420px', margin: '1.5rem auto 0' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input 
              type="text" 
              placeholder="Search Shein, H&M, Quince, Pact, Patagonia..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ width: '100%', paddingLeft: '2.5rem', borderRadius: 'var(--radius-full)' }}
            />
          </div>
        </div>

        {/* Brand Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
          {filteredBrands.map((brand, idx) => (
            <div 
              key={idx}
              style={{ 
                backgroundColor: 'var(--bg-surface)', 
                borderRadius: 'var(--radius-lg)', 
                padding: '1.75rem', 
                border: '1px solid var(--color-border)', 
                boxShadow: 'var(--shadow-sm)' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>{brand.name}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{brand.type}</span>
                </div>
                <span className="badge badge-ochre">{brand.budgetRating}</span>
              </div>

              {/* Score Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', margin: '1.2rem 0' }}>
                <ScoreBar label="Sustainability" score={brand.sustainabilityScore} />
                <ScoreBar label="Labor Transparency" score={brand.laborScore} />
                <ScoreBar label="Garment Durability" score={brand.qualityScore} />
              </div>

              {/* Verdict */}
              <div style={{ backgroundColor: 'var(--bg-accent)', padding: '0.9rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                <strong>Verdict:</strong> {brand.verdict}
              </div>

              {/* Better Alternative */}
              <div style={{ borderTop: '1px border var(--color-border)', paddingTop: '0.75rem', fontSize: '0.85rem', color: 'var(--color-sage)' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
                  <CheckCircle size={15} color="var(--color-sage)" /> Better Budget Alternative:
                </strong>
                <span style={{ color: 'var(--text-main)' }}>{brand.betterAlternative}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

function ScoreBar({ label, score }) {
  let color = 'var(--color-terracotta)';
  if (score >= 75) color = 'var(--color-sage)';
  else if (score >= 50) color = 'var(--color-ochre)';

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '0.2rem', fontWeight: 600 }}>
        <span>{label}</span>
        <span>{score} / 100</span>
      </div>
      <div style={{ height: '6px', backgroundColor: 'var(--bg-accent)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
        <div style={{ width: `${score}%`, height: '100%', backgroundColor: color, borderRadius: 'var(--radius-full)' }} />
      </div>
    </div>
  );
}
