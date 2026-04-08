'use client';

import { useState } from 'react';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Michael T.',
    location: 'Sydney, NSW',
    text: 'HisJourney gave me the framework I needed. The protocols made everything clearer when everything felt overwhelming.',
    rating: 5
  },
  {
    name: 'David R.',
    location: 'Melbourne, VIC',
    text: 'No fluff. No platitudes. This is exactly what I needed—straight protocols from men who\'ve been through it.',
    rating: 5
  },
  {
    name: 'James K.',
    location: 'Brisbane, QLD',
    text: 'The marketplace connections alone saved me thousands. But the real value is the psychological framework.',
    rating: 5
  },
  {
    name: 'Robert P.',
    location: 'Adelaide, SA',
    text: 'Finally, a resource that treats men like intelligent adults. Practical, honest, and deeply useful.',
    rating: 5
  },
  {
    name: 'Anthony M.',
    location: 'Perth, WA',
    text: 'The co-parenting protocols changed everything. My relationship with my kids improved dramatically.',
    rating: 5
  }
];

export function Testimonials() {
  const styles = `
    @keyframes marqueeScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .marquee-container {
      overflow-x: hidden;
      width: 100%;
      background-color: #FAFAF7;
      padding: 16px 0;
      margin: 0 -32px;
    }
    
    .marquee-track {
      display: flex;
      gap: 24px;
      animation: marqueeScroll 60s linear infinite;
      width: max-content;
      padding: 0 32px;
    }
    
    .testimonial-marquee-card {
      flex-shrink: 0;
      width: 380px;
      background-color: #2C4C3B;
      color: #F5F5F0;
      padding: 32px;
      border-radius: '16px';
      display: 'flex';
      flex-direction: 'column';
      gap: 16px;
      transition: all 0.3s ease;
    }
    
    .testimonial-marquee-card:hover {
      box-shadow: 0 12px 32px rgba(44, 76, 59, 0.3);
      transform: translateY(-4px);
    }
    
    .marquee-track:hover {
      animation-play-state: paused;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Original testimonials */}
          {testimonials.map((testimonial, idx) => (
            <TestimonialMarqueeCard key={`original-${idx}`} testimonial={testimonial} />
          ))}
          {/* Duplicated for seamless loop */}
          {testimonials.map((testimonial, idx) => (
            <TestimonialMarqueeCard key={`duplicate-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </>
  );
}

function TestimonialMarqueeCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="testimonial-marquee-card"
      style={{
        flexShrink: 0,
        width: '380px',
        backgroundColor: '#2C4C3B',
        color: '#F5F5F0',
        padding: '32px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'all 0.3s ease',
        borderLeft: '4px solid #3D5C4F'
      }}
    >
      <div className="flex items-center gap-3">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: 'rgba(245, 245, 240, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          flexShrink: 0
        }}>👨</div>
        <div>
          <h4 style={{
            color: '#F5F5F0',
            fontFamily: "'Playfair Display', system-ui, serif",
            fontSize: '1rem',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.2
          }}>
            {testimonial.name}
          </h4>
          <p style={{
            color: 'rgba(245, 245, 240, 0.7)',
            fontSize: '0.85rem',
            margin: 0
          }}>
            {testimonial.location}
          </p>
        </div>
      </div>
      <p style={{
        color: 'rgba(245, 245, 240, 0.9)',
        fontSize: '0.95rem',
        lineHeight: 1.6,
        margin: 0,
        flex: 1
      }}>
        "{testimonial.text}"
      </p>
      <div style={{ color: '#FFFFFF', fontSize: '1rem', marginTop: '8px' }}>
        {'★'.repeat(testimonial.rating)}
      </div>
    </div>
  );
}
