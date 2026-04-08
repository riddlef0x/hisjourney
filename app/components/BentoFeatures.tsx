'use client';

import { useState } from 'react';

export function BentoFeatures() {
  return (
    <div className="bento-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: 'minmax(280px, auto)',
      gap: '24px',
      marginBottom: '48px'
    }}>
      {/* Feature 1 - Smart Journaling: Spans 2 columns, 1 row */}
      <BentoCard gridColumn="span 2" gridRow="span 1">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 900, 
              color: '#2C4C3B', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '12px'
            }}>01</div>
            <h3 style={{ 
              color: '#0B253A', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '12px',
              fontSize: '1.5rem'
            }}>Smart Journaling</h3>
            <p style={{ color: '#4B5563', fontSize: '0.95rem', margin: 0 }}>
              Document your journey with structured prompts. Track decisions, emotions, and progress as you navigate separation.
            </p>
          </div>
          <div style={{ 
            width: '56px', 
            height: '56px', 
            minWidth: '56px',
            marginLeft: '16px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#F5F8FC',
            borderRadius: '12px'
          }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 4h20v24H6z" stroke="#2C4C3B" strokeWidth="2" fill="none"/>
              <path d="M10 8h12M10 14h12M10 20h8" stroke="#2C4C3B" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </BentoCard>

      {/* Feature 2 - Mood Tracker: Spans 1 column, 2 rows */}
      <BentoCard gridColumn="span 1" gridRow="span 2" fullHeight>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ 
            fontSize: '2.5rem', 
            fontWeight: 900, 
            color: '#2C4C3B', 
            fontFamily: "'Playfair Display', system-ui, serif",
            marginBottom: '12px'
          }}>02</div>
          <h3 style={{ 
            color: '#0B253A', 
            fontFamily: "'Playfair Display', system-ui, serif",
            marginBottom: '8px',
            fontSize: '1.3rem'
          }}>Mood Tracker</h3>
          <p style={{ color: '#4B5563', fontSize: '0.9rem', margin: 0 }}>
            Monitor emotional wellbeing with visual patterns.
          </p>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['📊', '📈', '🎯', '✨', '⚡'].map((emoji, idx) => (
            <div key={idx} style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#F0F4F8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >{emoji}</div>
          ))}
        </div>
      </BentoCard>

      {/* Feature 3 - Expert Network: Spans 1 column, 1 row */}
      <BentoCard gridColumn="span 1" gridRow="span 1">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 900, 
              color: '#2C4C3B', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '12px'
            }}>03</div>
            <h3 style={{ 
              color: '#0B253A', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '8px',
              fontSize: '1.3rem'
            }}>Expert Network</h3>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', margin: 0 }}>Australia's most vetted specialists.</p>
          </div>
          <div style={{ 
            width: '40px', 
            height: '40px',
            minWidth: '40px',
            marginLeft: '12px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#F5F8FC',
            borderRadius: '8px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="8" r="3" stroke="#2C4C3B" strokeWidth="1.5"/>
              <path d="M2 18c0-2.21 2.69-4 6-4s6 1.79 6 4" stroke="#2C4C3B" strokeWidth="1.5"/>
              <circle cx="16" cy="8" r="3" stroke="#2C4C3B" strokeWidth="1.5"/>
              <path d="M10 18c0-1.5 1.5-2.8 3.5-3.3" stroke="#2C4C3B" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      </BentoCard>

      {/* Feature 4 - Legal Guide: Spans 1 column, 1 row */}
      <BentoCard gridColumn="span 1" gridRow="span 1">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 900, 
              color: '#2C4C3B', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '12px'
            }}>04</div>
            <h3 style={{ 
              color: '#0B253A', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '8px',
              fontSize: '1.3rem'
            }}>Legal Guide</h3>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', margin: 0 }}>Australian family law frameworks.</p>
          </div>
          <div style={{ 
            width: '40px', 
            height: '40px',
            minWidth: '40px',
            marginLeft: '12px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#F5F8FC',
            borderRadius: '8px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16v12H4z" stroke="#2C4C3B" strokeWidth="1.5" fill="none"/>
              <path d="M12 6V4m0 16v2" stroke="#2C4C3B" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 10h8M8 14h6" stroke="#2C4C3B" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </BentoCard>

      {/* Feature 5 - Financial Protocol: Spans 1 column, 1 row */}
      <BentoCard gridColumn="span 1" gridRow="span 1">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 900, 
              color: '#2C4C3B', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '12px'
            }}>05</div>
            <h3 style={{ 
              color: '#0B253A', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '8px',
              fontSize: '1.3rem'
            }}>Financial Protocol</h3>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', margin: 0 }}>Rebuilding & recovery strategies.</p>
          </div>
          <div style={{ 
            width: '40px', 
            height: '40px',
            minWidth: '40px',
            marginLeft: '12px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#F5F8FC',
            borderRadius: '8px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="7" stroke="#2C4C3B" strokeWidth="1.5" fill="none"/>
              <path d="M12 8v8M9 12h6" stroke="#2C4C3B" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </BentoCard>

      {/* Feature 6 - Recovery Plan: Spans 1 column, 1 row */}
      <BentoCard gridColumn="span 1" gridRow="span 1">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 900, 
              color: '#2C4C3B', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '12px'
            }}>06</div>
            <h3 style={{ 
              color: '#0B253A', 
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '8px',
              fontSize: '1.3rem'
            }}>Recovery Plan</h3>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', margin: 0 }}>Structured path to rebuilding life.</p>
          </div>
          <div style={{ 
            width: '40px', 
            height: '40px',
            minWidth: '40px',
            marginLeft: '12px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#F5F8FC',
            borderRadius: '8px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="#2C4C3B" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </BentoCard>
    </div>
  );
}

function BentoCard({ gridColumn, gridRow, fullHeight, children }: { gridColumn: string; gridRow: string; fullHeight?: boolean; children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        gridColumn,
        gridRow,
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: isHovered ? '0 12px 32px rgba(11, 37, 58, 0.1)' : '0 4px 20px rgba(11, 37, 58, 0.03)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        height: fullHeight ? '100%' : 'auto',
        justifyContent: fullHeight ? 'space-between' : 'flex-start',
        borderColor: isHovered ? '#2C4C3B' : '#E5E7EB'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
