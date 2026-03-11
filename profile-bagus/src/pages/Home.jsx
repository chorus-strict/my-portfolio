import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fade-in" style={{ 
      display: 'grid', 
      gridTemplateColumns: '1.1fr 0.9fr', 
      gap: '100px', 
      alignItems: 'center', 
      width: '100%',
      paddingTop: '20px'
    }}>
      
      <section>
        <h1 style={{ 
          fontSize: 'clamp(55px, 8vw, 110px)', 
          fontWeight: 300, 
          lineHeight: '1.05', 
          letterSpacing: '-4px', 
          margin: '0 0 30px 0' 
        }}>
          I'm <span style={{ fontWeight: 700, color: '#135bec' }}>Bagus.</span><br />
          I build digital experiences.
        </h1>
        
        <div style={{ marginBottom: '50px', fontSize: '1.4rem', lineHeight: '1.8', color: '#888' }}>
          <p style={{ margin: 0 }}>Minimalist by design.</p>
          <p style={{ margin: 0 }}>Functional by nature.</p>
          <p style={{ margin: 0, color: '#1A1A1A', fontWeight: 500 }}>Crafted by Bagus.</p>
        </div>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
         <button style={{
            padding: '20px 60px',
            backgroundColor: '#1A1A1A',
            color: 'white',
            border: 'none',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#135bec'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1A1A1A'}
            >
              Contact Me
        </button>
        </Link>
      </section>

      <section 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative', width: '100%' }}
      >
        <div style={{
          width: '100%',
          aspectRatio: '1 / 1',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          boxShadow: isHovered ? '0 40px 80px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.05)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative'
        }}>
          <img 
            src="/buntut.webp" 
            alt="Bagus Home"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 30%, transparent 70%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            right: '40px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            color: 'white',
            pointerEvents: 'none',
            zIndex: 2
          }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 700 }}>
              IMAGE SOURCE FROM
            </p>
            <h3 style={{ fontSize: '1.8rem', margin: 0, fontWeight: 400, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              www.businesstimes.com.sg
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}