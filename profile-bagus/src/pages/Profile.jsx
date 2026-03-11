import React from 'react';

export default function Profile() {
  return (
    <div className="fade-in" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ 
        display: 'grid', 
        // Mengatur kolom: Foto (agak kecil di kiri), Bio, dan Journey
        gridTemplateColumns: '0.7fr 1.3fr 1fr', 
        gap: '60px', 
        alignItems: 'stretch', // Memastikan tinggi elemen dalam grid sama
        marginTop: '60px'
      }}>
        
        {/* Kolom Kiri: Foto Profil (Tanpa Rounded, Full Height) */}
        <section style={{ height: '100%' }}>
          <div style={{
            width: '100%',
            height: '100%', // Mengikuti tinggi container grid
            overflow: 'hidden',
            backgroundColor: '#f5f5f5'
          }}>
            <img 
              src="/Linkedin-Profile.png"
              alt="Bagus Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Menjaga proporsi foto tetap bagus
                transition: 'filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: 'grayscale(100%)',
                cursor: 'crosshair', // Memberikan kesan desain yang unik
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
            />
          </div>
        </section>

        {/* Kolom Tengah: Biography */}
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '20px' }}>Biography</h2>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 300, lineHeight: '1.2', letterSpacing: '-0.03em', margin: 0 }}>
            From maintaining aircraft to <br />
            <span style={{ color: '#135bec', fontWeight: 600 }}>engineering digital systems.</span>
          </h1>
          <p style={{ marginTop: '25px', fontSize: '1rem', lineHeight: '1.8', color: '#444', maxWidth: '90%' }}>
            My fascination with electronics started with electrical, radios and computer. This curiosity led me to the rigorous world of aviation, where I spent years mastering structural integrity and complex systems. Today, I translate that same "zero-error" mindset into fullstack software development.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '45px' }}>
            <div>
              <h2 style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '10px' }}>The Arsenal</h2>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>React, Node.js, AI Integration, Figma.</p>
            </div>
            <div>
              <h2 style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '10px' }}>The Approach</h2>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>Precision-first development & iterative prototyping.</p>
            </div>
          </div>
        </section>

        {/* Kolom Kanan: Journey */}
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid #eee', paddingLeft: '40px' }}>
          <h2 style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '30px' }}>The Journey</h2>
          <div>
            {[
              { year: '2013 — 2021', title: 'Aircraft Maintenance Engineer', desc: 'Licensed engineer for high-precision technical services.' },
              { year: '2021 — Present', title: 'Executive Technical Services', desc: 'Leading technical excellence and problem solving.' },
              { year: '2026', title: 'Fullstack AI Software', desc: 'Deep engineering at Purwadhika.' }
            ].map((item, index) => (
              <div key={index} style={{ marginBottom: '35px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  left: '-44px', 
                  top: '6px', 
                  width: '7px', 
                  height: '7px', 
                  backgroundColor: index === 2 ? '#135bec' : '#CCC', 
                  borderRadius: '50%' 
                }}></div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>{item.title}</h3>
                <span style={{ fontSize: '0.8rem', color: '#999' }}>{item.year}</span>
                <p style={{ marginTop: '8px', color: '#666', fontSize: '0.85rem', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}