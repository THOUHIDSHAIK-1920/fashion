import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Mail, CheckCircle2, Download, Sparkles } from 'lucide-react';

export default function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(27, 36, 28, 0.7)',
      backdropFilter: 'blur(5px)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        width: '100%',
        maxWidth: '520px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: '2.25rem',
        border: '1px solid var(--color-border)',
        position: 'relative',
        animation: 'fadeIn 0.3s ease-out'
      }}>
        
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '16px', right: '16px', padding: '0.4rem', borderRadius: '50%', background: 'var(--bg-accent)' }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div className="badge badge-terracotta" style={{ marginBottom: '1rem' }}>
              <Sparkles size={12} /> Free Printable Download
            </div>

            <h2 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}>
              The Budget Slow-Fashion Starter Bundle
            </h2>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Get our <strong>Pocket Thrifting Fabric Checklist</strong> and <strong>15-Piece Capsule Wardrobe Matrix</strong> delivered straight to your inbox. Zero spam, un-subscribe anytime.
            </p>

            <div style={{ backgroundColor: 'var(--bg-accent)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--color-sage)" /> 30-Second Touch-Test Fabric Guide
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--color-sage)" /> Vintage Sizing Measurement Sheet
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-sage)" /> 15-Piece Outfit Combination Matrix
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <input 
                type="email" 
                placeholder="Enter your email address..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%' }}
              />

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Download size={16} /> Get Free Printable Toolkit
              </button>
            </form>

            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block', textAlign: 'center', marginTop: '0.8rem' }}>
              Join 14,000+ budget-conscious slow fashion shoppers.
            </span>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: '56px', height: '56px', backgroundColor: 'var(--color-sage-light)', color: 'var(--color-sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>You're All Set!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              We've sent the printable <strong>Thrifting Checklist & Capsule Matrix</strong> to <strong>{email}</strong>.
            </p>

            <button onClick={onClose} className="btn btn-sage" style={{ width: '100%' }}>
              Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
