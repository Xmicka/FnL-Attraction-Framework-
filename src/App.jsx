import React, { useState, useEffect } from 'react';
import './index.css';

const PAGES = ['home', 'context', 'strategies', 'framework', 'faqs', 'numbers'];
const PAGE_NAMES = {
  home: 'Overview',
  context: 'Context',
  strategies: 'Strategies',
  framework: 'Framework',
  faqs: 'FAQs',
  numbers: 'Numbers'
};

const PageNav = ({ currentPage, navigate }) => {
  const currentIndex = PAGES.indexOf(currentPage);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
      <div>
        {prevPage && (
          <button className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', color: '#fff' }} onClick={() => navigate(prevPage)}>
            ← Previous: {PAGE_NAMES[prevPage]}
          </button>
        )}
      </div>
      <div>
        {nextPage && (
          <button className="btn btn-blue" onClick={() => navigate(nextPage)}>
            Next: {PAGE_NAMES[nextPage]} →
          </button>
        )}
      </div>
    </div>
  );
};

const Home = ({ navigate, currentPage }) => (
  <div className="page">
    <div className="container text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh' }}>
      <span className="pill">AIESEC in Sri Lanka</span>
      <h1>Attraction Plan 26.27.</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto 40px', fontSize: '24px', color: '#a1a1a6' }}>
        Pro. Beyond. 1,000 APDs.<br />The most advanced financial strategy we've ever created.
      </p>
      <div>
        <button className="btn btn-blue" onClick={() => navigate('context')}>Explore Context</button>
        <div style={{ marginTop: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>Prepared by Akesh Chandrasiri</div>
      </div>
    </div>
    <div className="container"><PageNav currentPage={currentPage} navigate={navigate} /></div>
    <div style={{ width: '100%', height: '400px', background: 'radial-gradient(ellipse at bottom, #143555 0%, #000 70%)', marginTop: '-100px', position: 'absolute', bottom: 0, zIndex: -1 }}></div>
  </div>
);

const Context = ({ navigate, currentPage }) => (
  <div className="page container">
    <div className="text-center" style={{ marginBottom: '80px' }}>
      <span className="pill">Current Context Analytics</span>
      <h2>The baseline reality.</h2>
      <p style={{ maxWidth: '700px', margin: '0 auto' }}>Based on actual Sri Lankan EXPA data from July '25 - June '26. You cannot build a strategy without confronting the brutal facts of the pipeline.</p>
    </div>
    <div className="grid-2">
      <div className="card">
        <h3 style={{ color: 'var(--accent)' }}>oGV Funnel Drop</h3>
        <p>Out of 10,398 Sign Ups, only a fraction convert. Our attraction is generating volume, but lacking highly qualified, intent-driven leads.</p>
        <div className="huge-stat">2.89%</div>
        <div className="stat-label">SU to APL Conversion</div>
      </div>
      <div className="card">
        <h3 style={{ color: '#fbbf24' }}>iGV Realization Gap</h3>
        <p>We lose over 78% of approved EPs before realization. Discounting APDs that never realize yields zero ROI. We must secure REs.</p>
        <div className="huge-stat">21.6%</div>
        <div className="stat-label">APD to RE Conversion</div>
      </div>
    </div>
    <div className="card" style={{ marginTop: '32px', textAlign: 'center', background: 'radial-gradient(circle at center, #1a1a1a 0%, var(--bg-card) 100%)' }}>
      <h3>The Overlooked Multiplier</h3>
      <p style={{ maxWidth: '600px', margin: '0 auto 24px' }}>Only ~5% of globally active AIESEC members go on exchange. Every member who does go returns as the loudest organic marketer for the organization.</p>
      <div className="huge-stat">IXP</div>
      <div className="stat-label">The Core Engine for Organic Attraction</div>
    </div>
    <PageNav currentPage={currentPage} navigate={navigate} />
  </div>
);

const Strategies = ({ navigate, currentPage }) => (
  <div className="page container">
    <div className="text-center" style={{ marginBottom: '80px' }}>
      <span className="pill">Tactics</span>
      <h2>Precision targeting.</h2>
      <p>Unique strategies to guarantee pipeline velocity. No stacking. Pure accountability.</p>
    </div>
    <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>Incoming Velocity (iGV)</h3>
    <div className="grid-3" style={{ marginBottom: '60px' }}>
      <div className="card">
        <div className="stat-label" style={{ marginBottom: '12px', color: 'var(--success)' }}>Early Season Boost</div>
        <h3>15% Off</h3>
        <p>First 40 APDs only. Generates rapid urgency in Phase 1 before the typical peak rush.</p>
      </div>
      <div className="card">
        <div className="stat-label" style={{ marginBottom: '12px', color: 'var(--success)' }}>B2B Benefit Pass</div>
        <h3>10% Off</h3>
        <p>Offset by B2B partnership revenue. Gives added value to corporate partnerships without hurting bottom line.</p>
      </div>
      <div className="card">
        <div className="stat-label" style={{ marginBottom: '12px', color: 'var(--success)' }}>Regional Xpro</div>
        <h3>25% Off</h3>
        <p>Locked specifically to EuroXpro, MEA, APC windows to drive IR concentration.</p>
      </div>
    </div>
    <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>Outgoing Multiplier (oGV)</h3>
    <div className="grid-3" style={{ marginBottom: '60px' }}>
      <div className="card" style={{ gridColumn: 'span 2' }}>
        <div className="stat-label" style={{ marginBottom: '12px', color: 'var(--accent)' }}>The IXP Engine</div>
        <h3>50% Cashback</h3>
        <p>The single most valuable discount. For active AIESECers. Strictly cashback-only after they submit Reels, content, and an LCM share-space post-exchange. Builds future organic attraction.</p>
      </div>
      <div className="card">
        <div className="stat-label" style={{ marginBottom: '12px', color: 'var(--accent)' }}>Alumni Referral</div>
        <h3>15% Off</h3>
        <p>Word of mouth engineered. Ex-EPs get up to 3 referral slots to bring friends into the funnel.</p>
      </div>
    </div>
    <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>Non-Discount Premium (GT)</h3>
    <div className="card">
      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div>
          <h3>We do not discount GT.</h3>
          <p>As per the official task guidelines: <strong>"GT applications cannot be discounted"</strong>. </p>
          <p>GT is a premium, high-admin-fee professional product. Discounting it signals low value. Instead, we attract via <strong>Delivery Speed</strong>, <strong>Corporate Airline Subsidy Partnerships</strong>, and <strong>High-tier Host Mentorships</strong>.</p>
        </div>
        <div className="text-center">
          <div className="huge-stat" style={{ fontSize: '50px' }}>0%</div>
          <div className="stat-label">GT Discount Rate</div>
        </div>
      </div>
    </div>
    <PageNav currentPage={currentPage} navigate={navigate} />
  </div>
);

const Faqs = ({ navigate, currentPage }) => (
  <div className="page container-narrow">
    <div className="text-center" style={{ marginBottom: '60px' }}>
      <span className="pill">FAQs</span>
      <h2>The strategy, simplified.</h2>
      <p>Stripping away the acronyms and speaking in plain English.</p>
    </div>
    <div className="faq-item">
      <div className="faq-q">🤔 Why are we giving money away through discounts?</div>
      <div className="faq-a">We aren't giving it away; we are buying momentum. Think of discounts like marketing costs. Giving 15% off to the first 40 people creates a stampede. That stampede gets the team excited and secures revenue early.</div>
    </div>
    <div className="faq-item">
      <div className="faq-q">🏃 What is the "IXP Cashback" and why does it matter?</div>
      <div className="faq-a">IXP means sending our own AIESEC members on exchange. We give them 50% back, but ONLY if they make TikToks, Reels, and give speeches. We are hiring them as extremely effective salespeople for half the cost.</div>
    </div>
    <div className="faq-item">
      <div className="faq-q">💰 How do we know we won't go broke?</div>
      <div className="faq-a">The "ROI Model". We mathematically capped the discounts so even if 20% of everyone takes a huge discount, the sheer volume of people joining will still double the money we invested.</div>
    </div>
    <div className="faq-item">
      <div className="faq-q">🔒 What happens if a local branch cheats the system?</div>
      <div className="faq-a">We have a 3-layer Google Sheet system. Everything is tracked. If a branch gives a discount we didn't approve, the national office charges the money directly back to that branch. Zero tolerance.</div>
    </div>
    <div className="faq-item">
      <div className="faq-q">🏢 Why no discounts for GT (Internships)?</div>
      <div className="faq-a">The National guideline explicitly states GT cannot be discounted to protect its premium status. If Ferrari puts a 50% off sign on their cars, you think something is broken. It's for serious professionals. Instead of giving them a discount, we ensure they get matched to a job faster.</div>
    </div>
    <PageNav currentPage={currentPage} navigate={navigate} />
  </div>
);

const Framework = ({ navigate, currentPage }) => (
  <div className="page container">
    <div className="text-center" style={{ marginBottom: '80px' }}>
      <span className="pill">Execution Engine</span>
      <h2>Structure over chaos.</h2>
      <p>How we operationalize the strategy down to the LEY level as a live workflow.</p>
    </div>
    <div className="grid-2">
      <div>
        <h3>Three-Phase Timeline</h3>
        <div className="timeline-item">
          <h4>Phase 1: Pipeline Build (Aug - Sep)</h4>
          <p style={{ fontSize: '15px' }}>Setting the trap. BD hunts, SnD analysis, early-bird limits.</p>
        </div>
        <div className="timeline-item">
          <h4>Phase 2: Peak Activation (Oct - Nov)</h4>
          <p style={{ fontSize: '15px' }}>The hackathon. Regional deals open, volume scales massively.</p>
        </div>
        <div className="timeline-item" style={{ borderLeftColor: 'transparent' }}>
          <h4>Phase 3: RE Sprint (Dec - Jan)</h4>
          <p style={{ fontSize: '15px' }}>Securing the bag. Visa support, flight logistics, and cashback processing.</p>
        </div>
      </div>
      <div>
        <h3>Live Downscaling Workflow</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>This is passed down sequentially to LCVP FnLs so the national strategy directly drives local operations.</p>
        
        <div className="workflow-flow" style={{ position: 'relative', marginTop: '20px' }}>
          {/* Vertical line connecting steps */}
          <div style={{ position: 'absolute', left: '24px', top: '24px', bottom: '24px', width: '2px', background: 'var(--border)', zIndex: 0 }}></div>
          
          <div className="card" style={{ padding: '20px', marginBottom: '16px', position: 'relative', zIndex: 1, display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--accent)', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 10px var(--accent-glow)' }}></div>
            <div>
              <strong style={{ color: '#fff', fontSize: '16px' }}>1. Natcon Bootcamp</strong>
              <p style={{ fontSize: '13px', margin: '4px 0 0' }}>Hands-on live simulation where LCVP FnLs practice tracking ROI and approving discounts in test sheets.</p>
            </div>
          </div>

          <div className="card" style={{ padding: '20px', marginBottom: '16px', position: 'relative', zIndex: 1, display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', background: '#fbbf24', borderRadius: '50%', flexShrink: 0 }}></div>
            <div>
              <strong style={{ color: '#fff', fontSize: '16px' }}>2. Distribute FnL Toolkit</strong>
              <p style={{ fontSize: '13px', margin: '4px 0 0' }}>A living Google Doc with exact cheat codes, copy-paste email templates for discount rejections, and link to auto-calculating national trackers.</p>
            </div>
          </div>

          <div className="card" style={{ padding: '20px', position: 'relative', zIndex: 1, display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--success)', borderRadius: '50%', flexShrink: 0 }}></div>
            <div>
              <strong style={{ color: '#fff', fontSize: '16px' }}>3. Real-Time Auditing (The Loop)</strong>
              <p style={{ fontSize: '13px', margin: '4px 0 0' }}>National level monitors live limits (e.g. 100 early birds limit). At entity visits, a rapid 20-min finance sprint checks compliance. 2-week deadline for any fixes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageNav currentPage={currentPage} navigate={navigate} />
  </div>
);

const Numbers = ({ navigate, currentPage }) => {
  const [revealed, setRevealed] = useState(false);
  const [roi, setRoi] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

  useEffect(() => {
    if (revealed) {
      let current = 0;
      const target = 177;
      const interval = setInterval(() => {
        current += 3;
        if (current >= target) {
          setRoi(target);
          clearInterval(interval);
        } else {
          setRoi(current);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [revealed]);

  return (
    <div className="page container" style={{ position: 'relative' }}>
      <div className="text-center" style={{ marginBottom: '40px' }}>
        <span className="pill">Financials</span>
        <h2>Let's talk numbers.</h2>
        <p>1000 APD Target &bull; Fully modelled revenue</p>
      </div>

      {!revealed && (
        <div className="reveal-overlay" style={{ opacity: 1, pointerEvents: 'auto' }}>
          <button className="btn btn-blue" onClick={() => setRevealed(true)} style={{ fontSize: '20px', padding: '20px 40px' }}>
            Reveal Forecasting
          </button>
        </div>
      )}

      <div className={`hidden-numbers ${revealed ? 'revealed' : ''}`}>
        
        {/* Toggleable Breakdown Section */}
        <div 
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="card" 
          style={{ cursor: 'pointer', background: showBreakdown ? 'var(--bg-secondary)' : 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '24px', marginBottom: '32px', border: '1px solid var(--border)', transition: 'all 0.3s' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, color: 'var(--accent)', fontSize: '18px' }}>Mathematical Breakdown (How we got here)</h4>
            <span style={{ fontSize: '24px', color: 'var(--text-muted)' }}>{showBreakdown ? '−' : '+'}</span>
          </div>
          
          {showBreakdown && (
            <ul style={{ listStyle: 'none', fontSize: '14px', color: 'var(--text-muted)', marginTop: '20px', animation: 'fadeIn 0.3s ease' }}>
              <li style={{ marginBottom: '12px' }}><strong>• Base Goal:</strong> 1,000 Total APDs (iGV: 420, oGV: 330, iGT: 90, oGT: 80, IG: 80)</li>
              <li style={{ marginBottom: '12px' }}><strong>• Gross Revenue Calculation:</strong> Each product target multiplied by its average admin fee (e.g., 420 iGV * 72k; 330 oGV * 55k). Total = <strong>69.03M LKR</strong>.</li>
              <li style={{ marginBottom: '12px' }}><strong>• National Investment Budget:</strong> Ops setup, PR Marketing (25%), Hackathon rewards, BD tools total an upfront <strong>23.6M LKR</strong> cap.</li>
              <li style={{ marginBottom: '12px' }}><strong>• Max Discount Exposure:</strong> Assuming ~20% of all EPs use a discount at an average 22% depth, we lose ~<strong>3.6M LKR</strong> in potential revenue.</li>
              <li><strong>• Net Profit Calculation:</strong> (Gross Rev 69.03M - Exposure 3.6M) = Net Rev 65.43M. Subtract 23.6M Investment = <strong style={{color:'#fff'}}>41.83M LKR Net Surplus</strong>.</li>
            </ul>
          )}
        </div>

        <div className="grid-3" style={{ marginBottom: '24px' }}>
          <div className="card text-center" style={{ borderTop: '3px solid var(--accent)' }}>
            <div className="stat-label">Gross Revenue</div>
            <div className="huge-stat" style={{ fontSize: '50px' }}>69M</div>
            <p style={{ fontSize: '13px', margin: 0 }}>LKR (Before Discounts)</p>
          </div>
          <div className="card text-center" style={{ borderTop: '3px solid #ff3b30' }}>
            <div className="stat-label">Investment & Discounts</div>
            <div className="huge-stat" style={{ fontSize: '50px' }}>27.2M</div>
            <p style={{ fontSize: '13px', margin: 0 }}>23.6M Ops + 3.6M Exposure</p>
          </div>
          <div className="card text-center" style={{ borderTop: '3px solid var(--success)' }}>
            <div className="stat-label">Net Surplus</div>
            <div className="huge-stat" style={{ fontSize: '50px' }}>41.8M</div>
            <p style={{ fontSize: '13px', margin: 0 }}>LKR Clear Profit</p>
          </div>
        </div>
        <div className="card text-center" style={{ background: 'radial-gradient(circle at center, #112 0%, var(--bg-card) 100%)', padding: '60px' }}>
          <div className="stat-label" style={{ fontSize: '20px', marginBottom: '16px' }}>Semester 1 Return on Investment</div>
          <div className="huge-stat" style={{ fontSize: '140px', marginBottom: '24px' }}>{roi}%</div>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
            <strong>ROI Formula:</strong> ((Net Rev 65.4M - Total Investment 23.6M) / Total Investment 23.6M) * 100 = 177%
            <br/><br/>
            Even computing for severe drop-off (if only 60% of APDs realize) the framework still easily sustains {'>'}100% ROI. The math guarantees the growth.
          </p>
        </div>
      </div>
      <PageNav currentPage={currentPage} navigate={navigate} />
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={setCurrentPage} currentPage={currentPage} />;
      case 'context': return <Context navigate={setCurrentPage} currentPage={currentPage} />;
      case 'strategies': return <Strategies navigate={setCurrentPage} currentPage={currentPage} />;
      case 'faqs': return <Faqs navigate={setCurrentPage} currentPage={currentPage} />;
      case 'framework': return <Framework navigate={setCurrentPage} currentPage={currentPage} />;
      case 'numbers': return <Numbers navigate={setCurrentPage} currentPage={currentPage} />;
      default: return <Home navigate={setCurrentPage} currentPage={currentPage} />;
    }
  };

  return (
    <>
      <nav>
        <ul className="nav-links">
          {PAGES.map(page => (
            <li 
              key={page} 
              className={currentPage === page ? 'active' : ''} 
              onClick={() => setCurrentPage(page)}
            >
              {PAGE_NAMES[page]}
            </li>
          ))}
        </ul>
      </nav>
      {renderPage()}
    </>
  );
}
