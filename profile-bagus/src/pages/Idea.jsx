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
      <header style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '5px' }}>Future Concepts</h2>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '-0.02em', margin: 0 }}>Idea Lab</h1>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px',
        marginBottom: '50px' // Beri jarak sebelum kutipan
      }}>
        {ideas.map((idea, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '25px', border: '1px solid #EEE', borderRadius: '2px', backgroundColor: '#fff',
              transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)', cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = '#135bec';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#EEE';
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#135bec', textTransform: 'uppercase' }}>{idea.status}</span>
            <h3 style={{ fontSize: '1.2rem', margin: '10px 0', fontWeight: 500 }}>{idea.title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5', margin: 0 }}>{idea.desc}</p>
          </div>
        ))}
      </div>

      {/* Quote Section Baru */}
      <div style={{ 
        padding: '30px', 
        backgroundColor: '#F9F9F9', 
        borderLeft: '4px solid #135bec',
        marginTop: '20px' 
      }}>
        <p style={{ 
          margin: 0, 
          fontSize: '1rem', 
          fontStyle: 'italic', 
          color: '#444', 
          lineHeight: '1.6' 
        }}>
          "In aviation, every detail is a safety requirement. In code, every detail is an opportunity for perfection."
        </p>
      </div>
    </div>
  );
}