'use client';

import { useState } from 'react';

export function BentoFeatures() {
  return (
    <div className="bento-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'auto auto',
      gap: '24px',
      marginBottom: '48px'
    }}>
      {/* Feature 1 - Smart Journaling: Spans 2 columns, 1 row */}
      <BentoCard gridColumn="span 2" gridRow="span 1">
        <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif" }}>01</div>
        <h3 style={{ color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif" }}>Smart Journaling</h3>
        <p style={{ color: '#4B5563', fontSize: '0.95rem', margin: 0 }}>Document your journey with structured prompts. Track decisions, emotions, and progress as you navigate separation.</p>
      </BentoCard>

      {/* Feature 2 - Mood Tracker: Spans 1 column, 2 rows */}
      <BentoCard gridColumn="span 1" gridRow="span 2" fullHeight>
        <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif" }}>02</div>
        <h3 style={{ color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif" }}>Mood Tracker</h3>
        <p style={{ color: '#4B5563', fontSize: '0.95rem', margin: 0 }}>Monitor your emotional wellbeing. Visual patterns help you understand your responses and build resilience.</p>
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['😢', '😐', '😊', '😄', '🙌'].map((emoji, idx) => (
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
        <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif" }}>03</div>
        <h3 style={{ color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif" }}>Expert Network</h3>
        <p style={{ color: '#4B5563', fontSize: '0.95rem', margin: 0 }}>Access Australia's most vetted divorce specialists, lawyers, and therapists.</p>
      </BentoCard>

      {/* Feature 4 - Legal Guide: Spans 1 column, 1 row */}
      <BentoCard gridColumn="span 1" gridRow="span 1">
        <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif" }}>04</div>
        <h3 style={{ color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif" }}>Legal Guide</h3>
        <p style={{ color: '#4B5563', fontSize: '0.95rem', margin: 0 }}>Navigate Australian family law with clear, protocols-based frameworks.</p>
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
        border: '1px solid #F3F4F6',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: isHovered ? '0 12px 32px rgba(11, 37, 58, 0.08)' : '0 2px 8px rgba(11, 37, 58, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        height: fullHeight ? '100%' : 'auto',
        justifyContent: fullHeight ? 'flex-start' : 'flex-start'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
