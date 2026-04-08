'use client';

import Link from 'next/link';
import { useState } from 'react';

export function PricingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {/* Starter Plan */}
      <PricingCard
        title="Free Trial"
        subtitle="Start your journey risk-free"
        price="$0"
        features={['Essential reading access', 'Mood tracker basics', 'Community forum access']}
        isPrimary={false}
        ctaText="Get Started"
        ctaHref="/contact"
      />

      {/* Professional Plan - Highlighted */}
      <PricingCard
        title="Professional"
        subtitle="Complete protocols & support"
        price="$29"
        priceSuffix="/month"
        features={[
          'Everything in Free',
          'Full smart journaling',
          'Expert marketplace access',
          'Legal guidance protocols',
          'Priority support'
        ]}
        isPrimary={true}
        ctaText="Start Professional"
        highlighted={true}
      />

      {/* Enterprise Plan */}
      <PricingCard
        title="Family Plan"
        subtitle="For families navigating together"
        price="$49"
        priceSuffix="/month"
        features={[
          'Everything in Professional',
          'Co-parenting tools',
          'Multiple user accounts',
          'Direct specialist access',
          '1-on-1 strategy sessions'
        ]}
        isPrimary={false}
        ctaText="Contact Sales"
        ctaHref="/contact"
      />
    </div>
  );
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  isPrimary: boolean;
  ctaText: string;
  ctaHref?: string;
  highlighted?: boolean;
}

function PricingCard({
  title,
  subtitle,
  price,
  priceSuffix,
  features,
  isPrimary,
  ctaText,
  ctaHref,
  highlighted = false
}: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (highlighted) {
    return (
      <div
        style={{
          backgroundColor: '#0B253A',
          borderRadius: '16px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          border: '2px solid #0B253A',
          transform: isHovered ? 'scale(1.08) translateY(-4px)' : 'scale(1.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: isHovered
            ? '0 20px 40px rgba(11, 37, 58, 0.2)'
            : '0 12px 32px rgba(11, 37, 58, 0.15)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '24px',
          backgroundColor: '#0B253A',
          color: '#FFFFFF',
          padding: '4px 12px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase'
        }}>
          Most Popular
        </div>
        <h3 style={{
          color: '#FFFFFF',
          fontFamily: "'Playfair Display', system-ui, serif",
          fontSize: '1.5rem',
          marginTop: '12px'
        }}>
          {title}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          marginTop: '8px',
          fontSize: '0.9rem'
        }}>
          {subtitle}
        </p>
        <div style={{ marginTop: '24px', marginBottom: '32px' }}>
          <span style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#FFFFFF',
            fontFamily: "'Playfair Display', system-ui, serif"
          }}>
            {price}
          </span>
          {priceSuffix && (
            <span style={{
              color: 'rgba(255, 255, 255, 0.7)',
              marginLeft: '8px',
              fontSize: '0.95rem'
            }}>
              {priceSuffix}
            </span>
          )}
        </div>
        <ul style={{ marginBottom: '32px', flex: 1 }}>
          {features.map((feature, idx) => (
            <li key={idx} style={{
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '12px',
              display: 'flex',
              gap: '12px',
              fontSize: '0.95rem'
            }}>
              <span style={{ color: '#FFFFFF' }}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          style={{
            backgroundColor: '#FFFFFF',
            color: '#0B253A',
            border: 'none',
            borderRadius: '9999px',
            padding: '12px 32px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            transform: 'scale(1)',
            boxShadow: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {ctaText}
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #F3F4F6',
        borderRadius: '16px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 12px 32px rgba(11, 37, 58, 0.08)'
          : '0 4px 20px rgba(11, 37, 58, 0.03)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{
        color: '#0B253A',
        fontFamily: "'Playfair Display', system-ui, serif",
        fontSize: '1.5rem'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#4A657A',
        marginTop: '8px',
        fontSize: '0.9rem'
      }}>
        {subtitle}
      </p>
      <div style={{ marginTop: '24px', marginBottom: '32px' }}>
        <span style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#0B253A',
          fontFamily: "'Playfair Display', system-ui, serif"
        }}>
          {price}
        </span>
        {priceSuffix && (
          <span style={{
            color: '#4A657A',
            marginLeft: '8px',
            fontSize: '0.95rem'
          }}>
            {priceSuffix}
          </span>
        )}
      </div>
      <ul style={{ marginBottom: '32px', flex: 1 }}>
        {features.map((feature, idx) => (
          <li key={idx} style={{
            color: '#4B5563',
            marginBottom: '12px',
            display: 'flex',
            gap: '12px',
            fontSize: '0.95rem'
          }}>
            <span style={{ color: '#0B253A' }}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={ctaHref || '/contact'} style={{ textAlign: 'center' }}>
        <div className="button-outline">
          {ctaText}
        </div>
      </Link>
    </div>
  );
}
