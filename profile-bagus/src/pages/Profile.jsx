import React from 'react';

export default function Profile() {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '60px',
    alignItems: 'start'
  };

  return (
    <div className="fade-in">
      <div style={containerStyle}>
        {/* Foto Section */}
        <div style={{ height: '500px', backgroundColor: '#f5f5f5', overflow: 'hidden' }}>
          <img src="/Linkedin-Profile.png" alt="Bagus Profile" style={{
            width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: '0.5s'
          }} onMouseEnter={e => e.target.style.filter = 'grayscale(0%)'} onMouseLeave={e => e.target.style.filter = 'grayscale(100%)'} />
        </div>

        {/* Bio Section */}
        <section>
          <h2 style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888' }}>Biography</h2>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 300, lineHeight: '1.2', margin: '20px 0' }}>
            From maintaining aircraft to <span style={{ color: '#135bec', fontWeight: 600 }}>engineering digital systems.</span>
          </h1>
          <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
            My fascination with electronics started with radios and computers. I translate my aviation "zero-error" mindset into fullstack software development.
          </p>
          <div style={{ display: 'flex', gap: '30px', marginTop: '40px' }}>
            <div>
              <h4 style={{ fontSize: '10px', textTransform: 'uppercase', color: '#888' }}>The Arsenal</h4>
              <p style={{ fontSize: '0.9rem' }}>React, Node.js, AI, Figma</p>
            </div>
            <div>
              <h4 style={{ fontSize: '10px', textTransform: 'uppercase', color: '#888' }}>The Approach</h4>
              <p style={{ fontSize: '0.9rem' }}>Precision-first development</p>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section style={{ borderLeft: '1px solid #eee', paddingLeft: '30px' }}>
          <h2 style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888' }}>The Journey</h2>
          {[
            { year: '2013-21', title: 'Aircraft Engineer', desc: 'Precision technical services.' },
            { year: '2026', title: 'Fullstack AI', desc: 'Deep engineering at Purwadhika.' }
          ].map((item, i) => (
            <div key={i} style={{ margin: '30px 0' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{item.title}</h3>
              <small style={{ color: '#135bec' }}>{item.year}</small>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{item.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}