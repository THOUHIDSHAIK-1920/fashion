import React from 'react';
import { X, Clock, Tag, Bookmark, Share2, Sparkles, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ArticleModal({ article, onClose, isSaved, onToggleSave }) {
  if (!article) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(27, 36, 28, 0.65)',
      backdropFilter: 'blur(6px)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      overflowY: 'auto',
      padding: '2rem 1rem'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        width: '100%',
        maxWidth: '820px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
        position: 'relative',
        animation: 'fadeIn 0.3s ease-out'
      }}>
        
        {/* Sticky Action Bar */}
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.5rem',
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--color-border)',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <button onClick={onClose} className="btn btn-outline" style={{ padding: '0.35rem 0.8rem', fontSize: '0.82rem' }}>
            <ArrowLeft size={16} /> Back to Guides
          </button>

          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button 
              onClick={() => onToggleSave(article.id)} 
              className="btn btn-outline" 
              style={{ padding: '0.35rem 0.85rem', fontSize: '0.82rem', color: isSaved ? 'var(--color-terracotta)' : 'inherit' }}
            >
              <Bookmark size={16} fill={isSaved ? 'var(--color-terracotta)' : 'none'} />
              {isSaved ? 'Saved' : 'Save'}
            </button>
            <button onClick={onClose} style={{ padding: '0.4rem', borderRadius: '50%', background: 'var(--bg-accent)' }}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Article Cover Image Header */}
        <div style={{ position: 'relative', height: '320px' }}>
          <img 
            src={article.image} 
            alt={article.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(27,36,28,0.85))',
            padding: '2rem 1.75rem 1rem',
            color: '#fff'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-terracotta">{article.pillar}</span>
              <span className="badge badge-ochre">{article.budgetRating}</span>
            </div>
            <h1 className="font-serif" style={{ fontSize: '2.2rem', color: '#fff', lineHeight: 1.2 }}>
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article Body */}
        <div style={{ padding: '2rem 2.5rem' }}>
          
          {/* Metadata bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '1.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <div>
              By <strong style={{ color: 'var(--bg-dark)' }}>{article.author}</strong> • {article.date}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={15} /> {article.readTime}</span>
            </div>
          </div>

          {/* Subtitle */}
          <p style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-terracotta)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            {article.subtitle}
          </p>

          {/* Main Markdown Text Render */}
          <div 
            style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-main)' }}
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/^# (.*$)/gim, '<h1 style="font-size:1.8rem; margin: 1.5rem 0 1rem;">$1</h1>')
                .replace(/^## (.*$)/gim, '<h2 style="font-size:1.4rem; color: var(--color-sage); margin: 1.5rem 0 0.75rem;">$1</h2>')
                .replace(/^### (.*$)/gim, '<h3 style="font-size:1.15rem; margin: 1.2rem 0 0.5rem;">$1</h3>')
                .replace(/^> (.*$)/gim, '<blockquote style="border-left:4px solid var(--color-terracotta); padding-left:1rem; margin:1.2rem 0; font-style:italic; background:var(--bg-accent); padding: 0.75rem 1rem; border-radius: 0 8px 8px 0;">$1</blockquote>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n\n/g, '<br/><br/>')
            }}
          />

          {/* Persona Callout Footer */}
          <div style={{ backgroundColor: 'var(--bg-accent)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginTop: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-terracotta)', marginBottom: '0.4rem' }}>
              <Sparkles size={16} /> Thread & Thrift Budget Guarantee
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Did this guide help you leave with one concrete budget action today? Share it with a friend who's tired of overpriced sustainable clothing!
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
