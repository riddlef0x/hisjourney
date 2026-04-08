'use client';

import { useState } from 'react';

export function CrisisSupport() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CrisisSupportCard
        title="MensLine Australia"
        description="24/7 support line for men. Professional, confidential."
        phone="1300 78 99 78"
        href="https://mensline.org.au"
      />
      <CrisisSupportCard
        title="Beyond Blue"
        description="Mental health and emotional wellbeing support."
        phone="1300 22 4636"
        href="https://www.beyondblue.org.au"
      />
    </div>
  );
}

interface CrisisSupportCardProps {
  title: string;
  description: string;
  phone: string;
  href: string;
}

function CrisisSupportCard({ title, description, phone, href }: CrisisSupportCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)',
        border: `1px solid ${isHovered ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)'}`,
        borderRadius: '16px',
        padding: '32px',
        display: 'block',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        color: '#FFFFFF',
        fontFamily: "'Playfair Display', system-ui, serif",
        fontSize: '1.1rem',
        fontWeight: 700,
        marginBottom: '8px'
      }}>
        {title}
      </div>
      <p style={{
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: '0.95rem',
        marginBottom: '16px'
      }}>
        {description}
      </p>
      <div style={{
        color: '#FFFFFF',
        fontFamily: 'monospace',
        fontWeight: 700,
        fontSize: '1.1rem'
      }}>
        {phone}
      </div>
    </a>
  );
}
