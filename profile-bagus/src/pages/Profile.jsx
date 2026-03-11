import React from 'react';

export default function Profile() {
  return (
    <div className="fade-in" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '0.8fr 1.2fr 1fr', 
        gap: '80px', 
        alignItems: 'stretch',
        marginTop: '40px'
      }}>
        <section style={{ height: '100%' }}>
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
            <img 
              src="/Linkedin-Profile.png"
              alt="Bagus Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: 'grayscale(100%)',
                cursor: 'crosshair',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
            />
          </div>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '25px' }}>Biography</h2>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 300, lineHeight: '1.1', letterSpacing: '-0.04em', margin: 0 }}>
            From maintaining aircraft to <br />
            <span style={{ color: '#135bec', fontWeight: 600 }}>engineering digital systems.</span>
          </h1>
          <p style={{ marginTop: '30px', fontSize: '1.25rem', lineHeight: '1.8', color: '#444', maxWidth: '95%' }}>
            My fascination with electronics started with electrical, radios and computer. This curiosity led me to the rigorous world of aviation, where I spent years mastering structural integrity and complex systems. Today, I translate that same "zero-error" mindset into fullstack software development.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
            <div>
              <h2 style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '15px' }}>The Arsenal</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', margin: 0 }}>React, Node.js, AI Integration, Figma.</p>
            </div>
            <div>
              <h2 style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '15px' }}>The Approach</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', margin: 0 }}>Precision-first development & iterative prototyping.</p>
            </div>
          </div>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid #eee', paddingLeft: '50px' }}>
          <h2 style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '40px' }}>The Journey</h2>
          <div>
            {[
              { year: '2013 — 2021', title: 'Aircraft Maintenance Engineer', desc: 'Licensed engineer for high-precision technical services.' },
              { year: '2021 — Present', title: 'Executive Technical Services', desc: 'Leading technical excellence and problem solving.' },
              { year: '2026', title: 'Fullstack AI Software', desc: 'Deep engineering at Purwadhika.' }
            ].map((item, index) => (
              <div key={index} style={{ marginBottom: '45px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-54px', top: '8px', width: '8px', height: '8px', backgroundColor: index === 2 ? '#135bec' : '#CCC', borderRadius: '50%' }}></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>{item.title}</h3>
                <span style={{ fontSize: '1rem', color: '#999' }}>{item.year}</span>
                <p style={{ marginTop: '12px', color: '#666', fontSize: '1rem', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}