import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ArticleCard from './components/ArticleCard';
import ArticleModal from './components/ArticleModal';
import CostPerWearCalculator from './components/CostPerWearCalculator';
import CapsuleBuilder from './components/CapsuleBuilder';
import BrandChecker from './components/BrandChecker';
import NewsletterModal from './components/NewsletterModal';
import Footer from './components/Footer';
import { ARTICLES } from './data/contentData';
import { Sparkles, Bookmark, Filter, Search, Layers, Calculator, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activePersona, setActivePersona] = useState('reforming-fast-fashion');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  
  // Saved Articles local storage
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = localStorage.getItem('thread_thrift_saved');
      return stored ? JSON.parse(stored) : ['thrift-beginners-guide', 'hand-sewing-repairs-basics'];
    } catch {
      return ['thrift-beginners-guide', 'hand-sewing-repairs-basics'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('thread_thrift_saved', JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds]);

  const toggleSaveArticle = (id) => {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter(item => item !== id));
    } else {
      setSavedIds([...savedIds, id]);
    }
  };

  const cornerstoneArticle = ARTICLES.find(a => a.isCornerstone) || ARTICLES[0];

  // Filtering Articles
  const filteredArticles = ARTICLES.filter(article => {
    // 1. Pillar tab filter
    if (activeTab !== 'home' && activeTab !== 'saved' && activeTab !== 'calculator' && activeTab !== 'capsule' && activeTab !== 'brands') {
      if (article.pillar !== activeTab) return false;
    }
    // 2. Saved tab filter
    if (activeTab === 'saved') {
      if (!savedIds.includes(article.id)) return false;
    }
    // 3. Search query filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = article.title.toLowerCase().includes(q);
      const matchSummary = article.summary.toLowerCase().includes(q);
      const matchPillar = article.pillar.toLowerCase().includes(q);
      if (!matchTitle && !matchSummary && !matchPillar) return false;
    }
    return true;
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedIds.length}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
        activePersona={activePersona}
        setActivePersona={setActivePersona}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main style={{ flexGrow: 1 }}>
        
        {/* Render Interactive Tools when directly targeted */}
        {activeTab === 'calculator' && <CostPerWearCalculator />}
        {activeTab === 'capsule' && <CapsuleBuilder />}
        {activeTab === 'brands' && <BrandChecker />}

        {/* Hero Section displayed on Home Page */}
        {activeTab === 'home' && !searchQuery && (
          <>
            <HeroSection 
              cornerstoneArticle={cornerstoneArticle}
              onSelectArticle={setSelectedArticle}
              setActiveTab={setActiveTab}
            />

            {/* Quick Access Tools Feature Cards */}
            <section style={{ padding: '2rem 0', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--color-border)' }}>
              <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                  
                  <div 
                    onClick={() => setActiveTab('calculator')}
                    style={{ backgroundColor: 'var(--bg-surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', cursor: 'pointer' }}
                    className="hover-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-terracotta)', fontWeight: 700, marginBottom: '0.4rem' }}>
                      <Calculator size={20} /> Cost-Per-Wear Math
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Calculate the real cost of your clothes before buying.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveTab('capsule')}
                    style={{ backgroundColor: 'var(--bg-surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', cursor: 'pointer' }}
                    className="hover-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-sage)', fontWeight: 700, marginBottom: '0.4rem' }}>
                      <Layers size={20} /> 15-Piece Capsule Builder
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Mix & match 15 budget pieces to unlock 30+ outfit options.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveTab('brands')}
                    style={{ backgroundColor: 'var(--bg-surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', cursor: 'pointer' }}
                    className="hover-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-ochre)', fontWeight: 700, marginBottom: '0.4rem' }}>
                      <ShieldCheck size={20} /> Brand Sustainability Checker
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Audit Shein, Quince, Pact, and fast-fashion greenwashing.
                    </p>
                  </div>

                </div>
              </div>
            </section>
          </>
        )}

        {/* Articles Section Grid */}
        {activeTab !== 'calculator' && activeTab !== 'capsule' && activeTab !== 'brands' && (
          <section style={{ padding: '3rem 0', backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
              
              {/* Section Title Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '2rem' }}>
                    {activeTab === 'home' ? 'Latest Guides & Articles' : activeTab === 'saved' ? 'Saved Bookmarks' : activeTab}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    {activeTab === 'saved' ? 'Your personal reading list for offline thrifting & mending tactics.' : 'Every guide includes budget benchmarks, cost-per-wear math, and zero preachiness.'}
                  </p>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Showing <strong>{filteredArticles.length}</strong> {filteredArticles.length === 1 ? 'guide' : 'guides'}
                </div>
              </div>

              {/* Empty state for Saved */}
              {activeTab === 'saved' && filteredArticles.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                  <Bookmark size={36} color="var(--color-terracotta)" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>No saved guides yet</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Click the bookmark icon on any article to save it to your reading list.</p>
                  <button onClick={() => setActiveTab('home')} className="btn btn-primary">Browse All Articles</button>
                </div>
              )}

              {/* Articles Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
                {filteredArticles.map(article => (
                  <ArticleCard 
                    key={article.id}
                    article={article}
                    onSelect={setSelectedArticle}
                    isSaved={savedIds.includes(article.id)}
                    onToggleSave={toggleSaveArticle}
                  />
                ))}
              </div>

            </div>
          </section>
        )}

      </main>

      {/* Article Full Reader Modal */}
      <ArticleModal 
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        isSaved={selectedArticle ? savedIds.includes(selectedArticle.id) : false}
        onToggleSave={toggleSaveArticle}
      />

      {/* Free Printable Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
      />

    </div>
  );
}
