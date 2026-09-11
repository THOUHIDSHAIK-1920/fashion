import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Calculator, Sparkles, DollarSign, RefreshCw, Check, AlertTriangle } from 'lucide-react';

export default function CostPerWearCalculator() {
  const [price, setPrice] = useState(25);
  const [wearsPerYear, setWearsPerYear] = useState(40);
  const [years, setYears] = useState(2);
  const [garmentName, setGarmentName] = useState("Thrifted Denim Jacket");

  const totalWears = wearsPerYear * years;
  const cpw = totalWears > 0 ? (price / totalWears).toFixed(2) : 0;

  // Comparison benchmarks
  const fastFashionCPW = (25 / 5).toFixed(2); // $25 worn 5 times before tearing = $5.00/wear
  const thriftCPW = cpw;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  useEffect(() => {
    if (parseFloat(cpw) < 0.50 && totalWears >= 30) {
      triggerConfetti();
    }
  }, [price, wearsPerYear, years]);

  const applyPreset = (p, w, y, name) => {
    setPrice(p);
    setWearsPerYear(w);
    setYears(y);
    setGarmentName(name);
  };

  return (
    <div style={{ padding: '2.5rem 0 3rem', backgroundColor: 'var(--bg-primary)', scrollMarginTop: '80px' }}>
      <div className="container">
        
        {/* Tool Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <div className="badge badge-ochre" style={{ marginBottom: '0.8rem' }}>
            <Calculator size={13} /> Interactive Budget Math
          </div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '0.6rem' }}>
            Cost-Per-Wear (CPW) Calculator
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            The ultimate antidote to buyer's remorse. Discover why a $20 fast-fashion top that shrinks in 3 washes actually costs <strong>10x more per wear</strong> than an $18 thrifted vintage jacket you wear for 3 years.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Controls Column */}
          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Item Name / Description:
              </label>
              <input 
                type="text" 
                value={garmentName} 
                onChange={(e) => setGarmentName(e.target.value)}
                style={{ width: '100%' }} 
              />
            </div>

            {/* Quick Presets */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                Quick Budget Presets:
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button onClick={() => applyPreset(15, 45, 2, "Thrifted Levi's Jeans")} className="btn btn-outline" style={{ padding: '0.3rem 0.7rem', fontSize: '0.78rem' }}>
                  👖 Thrifted Jeans ($15)
                </button>
                <button onClick={() => applyPreset(22, 5, 1, "Fast Fashion Party Dress")} className="btn btn-outline" style={{ padding: '0.3rem 0.7rem', fontSize: '0.78rem' }}>
                  👗 Fast-Fashion Dress ($22)
                </button>
                <button onClick={() => applyPreset(45, 60, 3, "Ethical Linen Shirt")} className="btn btn-outline" style={{ padding: '0.3rem 0.7rem', fontSize: '0.78rem' }}>
                  🌿 Budget Ethical Shirt ($45)
                </button>
              </div>
            </div>

            {/* Slider 1: Price */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Item Purchase Price:</span>
                <span style={{ color: 'var(--color-terracotta)', fontFamily: 'var(--font-mono)' }}>${price}</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="250" 
                step="5" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-terracotta)', cursor: 'pointer' }}
              />
            </div>

            {/* Slider 2: Wears Per Year */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Estimated Wears per Year:</span>
                <span style={{ color: 'var(--color-sage)', fontFamily: 'var(--font-mono)' }}>{wearsPerYear} times/yr</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="150" 
                step="2" 
                value={wearsPerYear} 
                onChange={(e) => setWearsPerYear(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-sage)', cursor: 'pointer' }}
              />
            </div>

            {/* Slider 3: Years Owned */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Years Kept & Reworn:</span>
                <span style={{ color: 'var(--bg-dark)', fontFamily: 'var(--font-mono)' }}>{years} {years === 1 ? 'year' : 'years'}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--bg-dark)', cursor: 'pointer' }}
              />
            </div>

          </div>

          {/* Results Output Box */}
          <div style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-inverse)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sand)' }}>
                Calculation Breakdown
              </span>
              <span className="badge badge-ochre">
                {totalWears} Total Wears
              </span>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.3rem' }}>
                Cost Per Wear for "{garmentName}"
              </div>
              <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: parseFloat(cpw) < 1.0 ? 'var(--color-ochre)' : '#fff' }}>
                ${cpw}
                <span style={{ fontSize: '1rem', opacity: 0.7, fontWeight: 400 }}> / wear</span>
              </div>
            </div>

            {/* Comparative Breakdown */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--color-sand)' }}>
                <Sparkles size={16} color="var(--color-ochre)" />
                <strong>Smart Budget Verdict:</strong>
              </div>

              {parseFloat(cpw) <= 0.50 ? (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#90ee90' }}>
                  <Check size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Incredible Value!</strong> Under $0.50/wear is the gold standard of slow fashion savings. You get maximum mileage for your dollar.</span>
                </div>
              ) : parseFloat(cpw) <= 1.50 ? (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#ffeb3b' }}>
                  <Check size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Solid Choice!</strong> Good cost-per-wear ratio. Rewearing this item just 10 more times will bring it into super-saver territory.</span>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#ff8a80' }}>
                  <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>High Cost Per Wear Alert:</strong> At ${cpw}/wear, this item needs more rewears to justify the upfront price tag. Consider buying secondhand or styling it into more outfits!</span>
                </div>
              )}
            </div>

            {/* Formula Reference */}
            <div style={{ fontSize: '0.8rem', opacity: 0.6, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              Formula: ${price} Purchase Price ÷ ({wearsPerYear} Wears/Yr × {years} Yrs) = ${cpw}/wear
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
