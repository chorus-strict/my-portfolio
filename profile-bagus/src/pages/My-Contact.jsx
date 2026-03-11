import React from 'react';

export default function MyContact() {
  const contactStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '80px'
  };

  return (
    <div className="fade-in">
      <div style={contactStyle}>
        <section>
          <h2 style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888' }}>Initiate Connection</h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, margin: '20px 0' }}>
            Let's build something <span style={{ color: '#135bec', fontWeight: 600 }}>technically sound.</span>
          </h1>
          <div style={{ marginTop: '40px', padding: '25px', borderLeft: '4px solid #135bec', backgroundColor: '#fcfcfc' }}>
            <p style={{ margin: 0 }}><strong>Status:</strong> Open for high-precision collaborations.</p>
          </div>
        </section>

        <section style={{ borderTop: '2px solid #135bec', paddingTop: '40px' }}>
          {[
            { label: "Email", val: "muhammadbagus13@gmail.com", link: "mailto:muhammadbagus13@gmail.com" },
            { label: "LinkedIn", val: "LinkedIn Profile", link: "https://linkedin.com/..." },
            { label: "GitHub", val: "GitHub Portfolio", link: "https://github.com/..." }
          ].map((c, i) => (
            <div key={i} style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', color: '#999', margin: '0 0 10px 0' }}>{c.label}</p>
              <a href={c.link} style={{ fontSize: '1.5rem', color: '#1A1A1A', textDecoration: 'none', transition: '0.3s' }}
                 onMouseEnter={e => e.target.style.color = '#135bec'} onMouseLeave={e => e.target.style.color = '#1A1A1A'}>
                {c.val}
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}