import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fade-in" style={{ 
      display: 'grid', 
      gridTemplateColumns: '1.2fr 1fr', 
      gap: '60px', 
      alignItems: 'center', 
      width: '100%',
      paddingTop: '40px'
    }}>
      
      {/* Kolom Kiri: Teks */}
      <section>
        <h1 style={{ 
          fontSize: 'clamp(40px, 6vw, 80px)', 
          fontWeight: 300, 
          lineHeight: '1.1', 
          letterSpacing: '-3px', 
          margin: '0 0 20px 0' 
        }}>
          I'm <span style={{ fontWeight: 700, color: '#135bec' }}>Bagus.</span><br />
          I build digital experiences.
        </h1>
        
        <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#888' }}>
          <p style={{ margin: 0 }}>Minimalist by design.</p>
          <p style={{ margin: 0 }}>Functional by nature.</p>
          <p style={{ margin: 0, color: '#1A1A1A', fontWeight: 500 }}>Crafted by Bagus.</p>
        </div>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
         <button style={{
            padding: '16px 40px',
            backgroundColor: '#1A1A1A',
            color: 'white',
            border: 'none',
            fontSize: '12px',
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

      {/* Kolom Kanan: Foto dengan Peningkatan Visibilitas Teks */}
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
          boxShadow: isHovered ? '0 30px 60px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.05)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative' // Penting untuk overlay
        }}>
          <img 
            src="/buntut.png" 
            alt="Bagus Home"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          
          {/* GRADASI GELAP (Vignette) - Diperkuat untuk visibilitas teks */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 25%, transparent 60%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: 'none'
          }} />

          {/* OVERLAY TEKS */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            right: '30px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            color: 'white',
            pointerEvents: 'none',
            zIndex: 2
          }}>
            <p style={{ 
              fontSize: '11px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              margin: '0 0 4px 0',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)' // Shadow tambahan
            }}>
              IMAGE SOURCE FROM
            </p>
            <h3 style={{ 
              fontSize: '1.4rem', 
              margin: 0, 
              fontWeight: 400,
              letterSpacing: '-0.01em',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)' // Shadow tambahan agar kontras
            }}>
              www.businesstimes.com.sg
            </h3>
          </div>
        </div>
      </section>

    </div>
  );
}