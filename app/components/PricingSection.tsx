'use client';

import Link from 'next/link';
import { useState } from 'react';

export function PricingSection() {
  return (
    <div className="pricing-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '32px',
      flexWrap: 'wrap',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      {/* Free Card */}
      <PricingCard
        title="Free Trial"
        subtitle="Start your journey risk-free"
        price="$0"
        features={[
          'Essential reading access',
          'Mood tracker basics',
          'Community forum access',
          'Basic resource library',
          'Email support'
        ]}
        isPrimary={false}
        ctaText="Get Started"
        ctaHref="/contact"
      />

      {/* Professional Card - Featured */}
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
          'Financial recovery plans',
          'Co-parenting tools',
          'Priority email support',
          'Monthly specialist check-ins'
        ]}
        isPrimary={true}
        ctaText="Start Professional"
        highlighted={true}
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
          backgroundColor: '#2C4C3B',
          borderRadius: '20px',
          padding: '48px 40px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          border: '2px solid #2C4C3B',
          transform: isHovered ? 'scale(1.05) translateY(-8px)' : 'scale(1.02)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: isHovered
            ? '0 24px 48px rgba(44, 76, 59, 0.35)'
            : '0 16px 40px rgba(44, 76, 59, 0.25)',
          width: '100%',
          maxWidth: '420px',
          minHeight: '680px'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          position: 'absolute',
          top: '-14px',
          left: '28px',
          backgroundColor: '#3D5C4F',
          color: '#F5F5F0',
          padding: '6px 16px',
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Most Popular
        </div>

        <h3 style={{
          color: '#F5F5F0',
          fontFamily: "'Playfair Display', system-ui, serif",
          fontSize: '2rem',
          fontWeight: 800,
          marginTop: '12px',
          marginBottom: '8px'
        }}>
          {title}
        </h3>
        <p style={{
          color: 'rgba(245, 245, 240, 0.75)',
          marginTop: '0px',
          marginBottom: '28px',
          fontSize: '0.95rem'
        }}>
          {subtitle}
        </p>

        <div style={{ marginBottom: '32px' }}>
          <span style={{
            fontSize: '3rem',
            fontWeight: 900,
            color: '#F5F5F0',
            fontFamily: "'Playfair Display', system-ui, serif"
          }}>
            {price}
          </span>
          {priceSuffix && (
            <span style={{
              color: 'rgba(245, 245, 240, 0.65)',
              marginLeft: '8px',
              fontSize: '0.95rem'
            }}>
              {priceSuffix}
            </span>
          )}
        </div>

        <ul style={{ 
          marginBottom: '40px', 
          flex: 1,
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {features.map((feature, idx) => (
            <li key={idx} style={{
              color: 'rgba(245, 245, 240, 0.9)',
              marginBottom: '14px',
              display: 'flex',
              gap: '12px',
              fontSize: '0.95rem',
              lineHeight: 1.4,
              alignItems: 'flex-start'
            }}>
              <span style={{ 
                color: '#3D5C4F',
                fontWeight: 700,
                marginTop: '2px',
                flexShrink: 0
              }}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          style={{
            backgroundColor: '#F5F5F0',
            color: '#2C4C3B',
            border: 'none',
            borderRadius: '12px',
            padding: '14px 32px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
            fontSize: '0.95rem',
            letterSpacing: '0.05em',
            boxShadow: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 245, 240, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = '#F5F5F0';
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
        backgroundColor: '#F5F5F0',
        border: '2px solid #2C4C3B',
        borderRadius: '20px',
        padding: '48px 40px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 16px 40px rgba(44, 76, 59, 0.15)'
          : '0 8px 24px rgba(44, 76, 59, 0.08)',
        width: '100%',
        maxWidth: '420px',
        minHeight: '680px',
        borderColor: isHovered ? '#3D5C4F' : '#2C4C3B'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{
        color: '#0B253A',
        fontFamily: "'Playfair Display', system-ui, serif",
        fontSize: '2rem',
        fontWeight: 800,
        marginBottom: '8px'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#4A657A',
        marginTop: '0px',
        marginBottom: '28px',
        fontSize: '0.95rem'
      }}>
        {subtitle}
      </p>
      <div style={{ marginBottom: '32px' }}>
        <span style={{
          fontSize: '3rem',
          fontWeight: 900,
          color: '#2C4C3B',
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
      <ul style={{ 
        marginBottom: '40px', 
        flex: 1,
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {features.map((feature, idx) => (
          <li key={idx} style={{
            color: '#4B5563',
            marginBottom: '14px',
            display: 'flex',
            gap: '12px',
            fontSize: '0.95rem',
            lineHeight: 1.4,
            alignItems: 'flex-start'
          }}>
            <span style={{ 
              color: '#2C4C3B',
              fontWeight: 700,
              marginTop: '2px',
              flexShrink: 0
            }}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={ctaHref || '/contact'} style={{ textDecoration: 'none' }}>
        <button style={{
          width: '100%',
          backgroundColor: 'transparent',
          color: '#2C4C3B',
          border: '2px solid #2C4C3B',
          borderRadius: '12px',
          padding: '14px 32px',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontSize: '0.95rem',
          letterSpacing: '0.05em'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#FFFFFF';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(44, 76, 59, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          {ctaText}
        </button>
      </Link>
    </div>
  );
}
