import React from 'react';
import { Clock, Tag, Bookmark, ArrowRight, Sparkles } from 'lucide-react';

export default function ArticleCard({ article, onSelect, isSaved, onToggleSave }) {
  return (
    <article 
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'var(--transition)',
        position: 'relative'
      }}
      className="hover-card"
    >
      {/* Image Container */}
      <div 
        onClick={() => onSelect(article)} 
        style={{ position: 'relative', height: '190px', cursor: 'pointer', overflow: 'hidden' }}
      >
        <img 
          src={article.image} 
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <span className="badge badge-terracotta">{article.pillar}</span>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onToggleSave(article.id); }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isSaved ? 'var(--color-terracotta)' : 'var(--text-muted)',
            boxShadow: 'var(--shadow-sm)'
          }}
          title={isSaved ? 'Remove from saved' : 'Save article'}
        >
          <Bookmark size={16} fill={isSaved ? 'var(--color-terracotta)' : 'none'} />
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        <div style={{ display: 'flex', gap: '0.8rem', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={13} /> {article.readTime}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Tag size={13} /> {article.budgetRating}</span>
        </div>

        <h3 
          onClick={() => onSelect(article)} 
          style={{ fontSize: '1.15rem', marginBottom: '0.5rem', cursor: 'pointer', lineHeight: '1.3' }}
        >
          {article.title}
        </h3>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {article.summary}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', marginTop: 'auto' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{article.date}</span>
          <button 
            onClick={() => onSelect(article)} 
            style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-terracotta)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            Read Guide <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </article>
  );
}
