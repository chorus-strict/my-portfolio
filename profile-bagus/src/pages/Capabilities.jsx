export default function Capabilities() {
  const skills = [
    { category: "Engineering Stack", items: ["React.js", "Vite", "Node.js", "Express", "PostgreSQL"] },
    { category: "AI & Tech", items: ["AI Integration", "Prompt Engineering", "Fullstack AI"] },
    { category: "Design", items: ["Figma", "Tailwind CSS", "Framer Motion", "Minimalist UI"] },
    { category: "Aviation", items: ["Aviation Logic", "Technical Services", "Precision"] }
  ];

  return (
    <div className="fade-in">
      <header style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '5px' }}>Expertise</h2>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '-0.02em', margin: 0 }}>Capabilities</h1>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '15px',
        marginBottom: '40px' // Beri jarak sebelum catatan bawah
      }}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '25px', backgroundColor: '#FBFBFB', border: '1px solid #F0F0F0', borderRadius: '2px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.borderColor = '#135bec';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FBFBFB';
              e.currentTarget.style.borderColor = '#F0F0F0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3 style={{ fontSize: '11px', fontWeight: 700, color: '#135bec', textTransform: 'uppercase', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '1px', backgroundColor: '#135bec' }}></span>
              {skill.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skill.items.map((item, i) => (
                <span key={i} style={{ fontSize: '0.8rem', color: '#1A1A1A', backgroundColor: '#fff', padding: '4px 10px', border: '1px solid #EEE', borderRadius: '2px' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Industrial Note Section */}
      <div style={{ 
        marginTop: '30px', 
        paddingTop: '20px', 
        borderTop: '1px solid #EEE' 
      }}>
        <p style={{ 
          fontSize: '0.85rem', 
          color: '#888', 
          lineHeight: '1.6',
          margin: 0 
        }}>
          Currently refining Fullstack AI Development skills at <strong>Purwadhika</strong>. 
          Applying 10+ years of aviation engineering discipline to the modern digital stack.
        </p>
      </div>
    </div>
  );
}