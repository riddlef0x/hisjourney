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
  }
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, idx) => (
        <TestimonialCard key={idx} testimonial={testimonial} />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        padding: '32px',
        border: '1px solid #F3F4F6',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 12px 32px rgba(11, 37, 58, 0.08)'
          : '0 4px 20px rgba(11, 37, 58, 0.03)',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-6">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: '#E0E8F2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem'
        }}>👨</div>
        <div>
          <h4 style={{
            color: '#0B253A',
            fontFamily: "'Playfair Display', system-ui, serif",
            fontSize: '1rem',
            fontWeight: 700,
            margin: 0
          }}>
            {testimonial.name}
          </h4>
          <p style={{
            color: '#4A657A',
            fontSize: '0.85rem',
            margin: 0
          }}>
            {testimonial.location}
          </p>
        </div>
      </div>
      <p style={{
        color: '#4B5563',
        fontSize: '0.95rem',
        lineHeight: 1.6,
        marginBottom: '16px'
      }}>
        "{testimonial.text}"
      </p>
      <div style={{ color: '#0B253A', fontSize: '1rem' }}>
        {'★'.repeat(testimonial.rating)}
      </div>
    </div>
  );
}
