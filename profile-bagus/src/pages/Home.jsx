import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fade-in" style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '60px', 
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <section style={{ flex: '1 1 500px' }}>
        <h1 style={{ 
          fontSize: 'clamp(40px, 7vw, 90px)', 
          fontWeight: 300, 
          lineHeight: '1.1', 
          letterSpacing: '-0.04em',
          margin: '0 0 20px 0' 
        }}>
          I'm <span style={{ fontWeight: 700, color: '#135bec' }}>Bagus.</span><br />
          I build digital experiences.
        </h1>
        <div style={{ marginBottom: '40px', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#888' }}>
          <p style={{ margin: '5px 0' }}>Minimalist by design. Functional by nature.</p>
          <p style={{ margin: '5px 0', color: '#1A1A1A', fontWeight: 500 }}>Crafted by Bagus.</p>
        </div>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <button style={{
            padding: '18px 50px',
            backgroundColor: '#1A1A1A',
            color: 'white',
            border: 'none',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: '0.3s'
          }}>Contact Me</button>
        </Link>
      </section>

      <section 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ flex: '1 1 400px', position: 'relative' }}
      >
        <div style={{
          width: '100%',
          aspectRatio: '1/1',
          overflow: 'hidden',
          boxShadow: isHovered ? '0 30px 60px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.05)',
          transition: '0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <img src="/buntut.png" alt="Bagus Home" style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: '0.8s'
          }} />
          <div style={{
            position: 'absolute', bottom: '30px', left: '30px', right: '30px',
            opacity: isHovered ? 1 : 0, transition: '0.4s', color: 'white', pointerEvents: 'none'
          }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', margin: '0 0 5px 0' }}>IMAGE SOURCE FROM</p>
            <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 400 }}>www.businesstimes.com.sg</h3>
          </div>
        </div>
      </section>
    </div>
  );
}