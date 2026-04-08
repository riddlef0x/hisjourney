'use client';

import { useState, useEffect } from 'react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Understand Your Position',
      description: 'Assess your financial, emotional, and legal standing. Build your baseline understanding of what lies ahead.',
      color: '#2C4C3B'
    },
    {
      number: '02',
      title: 'Develop Your Strategy',
      description: 'Work with specialists to build financial, legal, and emotional protocols tailored to your unique situation.',
      color: '#3D5C4F'
    },
    {
      number: '03',
      title: 'Navigate Challenges',
      description: 'Execute your strategy with expert support for legal complications, financial decisions, and emotional wellbeing.',
      color: '#2C4C3B'
    },
    {
      number: '04',
      title: 'Rebuild & Thrive',
      description: 'Move forward with renewed purpose. Financial recovery, emotional healing, personal growth, and strength.',
      color: '#3D5C4F'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'start'
    }}>
      {/* Left: Sticky visual section */}
      <div style={{
        position: 'sticky',
        top: '100px',
        height: 'auto'
      }}>
        <div style={{
          backgroundColor: '#F5F8FC',
          borderRadius: '20px',
          padding: '48px',
          border: '1px solid #E0E8F2',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.4s ease'
        }}>
          <div style={{
            textAlign: 'center',
            opacity: 0.8,
            animation: 'fadeInUp 0.6s ease'
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: 900,
              color: steps[activeStep].color,
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '16px'
            }}>
              {steps[activeStep].number}
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#0B253A',
              fontFamily: "'Playfair Display', system-ui, serif",
              marginBottom: '16px'
            }}>
              {steps[activeStep].title}
            </h3>
            <div style={{
              width: '60px',
              height: '3px',
              backgroundColor: steps[activeStep].color,
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>
        </div>
      </div>

      {/* Right: Scrollable step content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
        {steps.map((step, idx) => (
          <StepBlock
            key={idx}
            step={step}
            index={idx}
            isActive={activeStep === idx}
            onViewChange={() => setActiveStep(idx)}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function StepBlock({
  step,
  index,
  isActive,
  onViewChange
}: {
  step: { number: string; title: string; description: string; color: string };
  index: number;
  isActive: boolean;
  onViewChange: () => void;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onViewChange();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`step-${index}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [index, onViewChange]);

  return (
    <div
      id={`step-${index}`}
      style={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '40px 0',
        borderLeft: `3px solid ${isActive ? step.color : '#E5E7EB'}`,
        paddingLeft: '32px',
        transition: 'all 0.3s ease',
        opacity: isActive ? 1 : 0.6
      }}
    >
      <div style={{
        fontSize: '2.5rem',
        fontWeight: 900,
        color: step.color,
        fontFamily: "'Playfair Display', system-ui, serif",
        marginBottom: '16px'
      }}>
        {step.number}
      </div>
      <h3 style={{
        fontSize: '1.75rem',
        color: '#0B253A',
        fontFamily: "'Playfair Display', system-ui, serif",
        marginBottom: '16px',
        lineHeight: 1.2
      }}>
        {step.title}
      </h3>
      <p style={{
        fontSize: '1.05rem',
        color: '#4B5563',
        lineHeight: 1.8,
        marginBottom: '24px',
        maxWidth: '500px'
      }}>
        {step.description}
      </p>
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        {['Research', 'Plan', 'Execute'].map((tag, idx) => (
          <span
            key={idx}
            style={{
              padding: '8px 16px',
              backgroundColor: `${step.color}15`,
              color: step.color,
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 600,
              border: `1px solid ${step.color}30`
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
