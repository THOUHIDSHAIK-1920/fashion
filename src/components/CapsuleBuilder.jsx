import React, { useState } from 'react';
import { CAPSULE_ITEMS } from '../data/contentData';
import { Layers, Sparkles, Check, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CapsuleBuilder() {
  const [selectedIds, setSelectedIds] = useState([1, 2, 6, 7, 9, 12]);
  const [activeFilter, setActiveFilter] = useState('All');

  const toggleItem = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedItems = CAPSULE_ITEMS.filter(item => selectedIds.includes(item.id));

  // Math totals
  const totalThriftCost = selectedItems.reduce((acc, curr) => acc + parseInt(curr.avgThriftPrice.replace('$', '')), 0);
  const totalMallCost = selectedItems.reduce((acc, curr) => acc + parseInt(curr.fastFashionPrice.replace('$', '')), 0);
  const totalSaved = totalMallCost - totalThriftCost;

  const topsCount = selectedItems.filter(i => i.category === 'Tops').length;
  const bottomsCount = selectedItems.filter(i => i.category === 'Bottoms').length;
  const estimatedOutfits = topsCount * bottomsCount;

  const categories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Shoes'];

  const filteredItems = activeFilter === 'All' 
    ? CAPSULE_ITEMS 
    : CAPSULE_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div style={{ padding: '2.5rem 0 3rem', backgroundColor: 'var(--bg-accent)', borderBottom: '1px solid var(--color-border)', scrollMarginTop: '80px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <div className="badge badge-sage" style={{ marginBottom: '0.8rem' }}>
            <Layers size={13} /> Capsule Wardrobe Starter Kit
          </div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '0.6rem' }}>
            Interactive 15-Piece Capsule Builder
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Select items to build your personal capsule. Watch your potential outfit combinations grow while keeping total costs anchored to real secondhand prices.
          </p>
        </div>

        {/* Dashboard Stat Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Capsule Size</span>
            <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--bg-dark)' }}>
              {selectedItems.length} / {CAPSULE_ITEMS.length} <span style={{ fontSize: '0.9rem' }}>pieces</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Outfit Combinations</span>
            <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--color-sage)' }}>
              {estimatedOutfits} <span style={{ fontSize: '0.9rem' }}>outfits</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Thrifted Capsule Cost</span>
            <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-terracotta)' }}>
              ${totalThriftCost}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-ochre-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-ochre)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-ochre)', fontWeight: 700 }}>Total Money Saved</span>
            <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-ochre)' }}>
              ${totalSaved > 0 ? totalSaved : 0}
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: activeFilter === cat ? '700' : '500',
                backgroundColor: activeFilter === cat ? 'var(--bg-dark)' : 'var(--bg-surface)',
                color: activeFilter === cat ? '#fff' : 'var(--text-main)',
                border: '1px solid var(--color-border)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {filteredItems.map(item => {
            const isSelected = selectedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '2px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 4px 12px rgba(200,90,50,0.15)' : 'var(--shadow-sm)',
                  transition: 'var(--transition)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span className="badge badge-sage" style={{ fontSize: '0.7rem' }}>{item.category}</span>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    backgroundColor: isSelected ? 'var(--color-terracotta)' : 'var(--bg-accent)',
                    color: isSelected ? '#fff' : 'var(--text-light)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justify: 'center' 
                  }}>
                    <Check size={14} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.name}</h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', borderTop: '1px dashed var(--color-border)', paddingTop: '0.6rem', marginTop: '0.6rem' }}>
                  <span>Thrift Avg: <strong style={{ color: 'var(--color-terracotta)', fontFamily: 'var(--font-mono)' }}>{item.avgThriftPrice}</strong></span>
                  <span style={{ color: 'var(--text-light)', textDecoration: 'line-through', fontSize: '0.78rem' }}>Fast Fashion: {item.fastFashionPrice}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
