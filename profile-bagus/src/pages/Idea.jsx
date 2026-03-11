import React from 'react';

export default function Idea() {
  const ideas = [
    {
      title: "SkyCheck AI",
      status: "Concept Phase",
      desc: "An AI-powered assistant for aircraft maintenance logs. Translating complex technical manuals into interactive 3D guided procedures."
    },
    {
      title: "Minimalist HUD",
      status: "Prototyping",
      desc: "Exploring Heads-Up Display (HUD) aesthetics for web interfaces. Integrating flight instrument precision into dashboard design."
    },
    {
      title: "Neural Fleet",
      status: "Research",
      desc: "Predictive maintenance algorithms. Using machine learning to anticipate hardware failures before they occur in digital ecosystems."
    }
  ];

  return (
    <div className="fade-in">
      <header style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '15px' }}>Future Concepts</h2>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, letterSpacing: '-0.04em', margin: 0 }}>Idea Lab</h1>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '40px',
        marginBottom: '60px' 
      }}>
        {ideas.map((idea, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '45px', border: '1px solid #EEE', borderRadius: '2px', backgroundColor: '#fff',
              transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)', cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#135bec';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#EEE';
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#135bec', textTransform: 'uppercase' }}>{idea.status}</span>
            <h3 style={{ fontSize: '1.8rem', margin: '20px 0', fontWeight: 500 }}>{idea.title}</h3>
            <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.7', margin: 0 }}>{idea.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ 
        padding: '50px', 
        backgroundColor: '#F9F9F9', 
        borderLeft: '8px solid #135bec',
        marginTop: '40px' 
      }}>
        <p style={{ margin: 0, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontStyle: 'italic', color: '#444', lineHeight: '1.6' }}>
          "In aviation, every detail is a safety requirement. In code, every detail is an opportunity for perfection."
        </p>
      </div>
    </div>
  );
}