export default function Capabilities() {
  const skills = [
    { category: "Engineering Stack", items: ["React.js", "Vite", "Node.js", "Express", "PostgreSQL"] },
    { category: "AI & Tech", items: ["AI Integration", "Prompt Engineering", "Fullstack AI"] },
    { category: "Design", items: ["Figma", "Tailwind CSS", "Framer Motion", "Minimalist UI"] },
    { category: "Aviation", items: ["Aviation Logic", "Technical Services", "Precision"] }
  ];

  return (
    <div className="fade-in" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '15px' }}>Expertise</h2>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-0.04em', margin: 0 }}>Capabilities</h1>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '25px',
        marginBottom: '60px' 
      }}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '35px', backgroundColor: '#FBFBFB', border: '1px solid #F0F0F0', borderRadius: '2px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.borderColor = '#135bec';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FBFBFB';
              e.currentTarget.style.borderColor = '#F0F0F0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#135bec', textTransform: 'uppercase', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '15px', height: '1.5px', backgroundColor: '#135bec' }}></span>
              {skill.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {skill.items.map((item, i) => (
                <span key={i} style={{ fontSize: '1rem', color: '#1A1A1A', backgroundColor: '#fff', padding: '6px 15px', border: '1px solid #EEE', borderRadius: '2px' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '40px', 
        paddingTop: '30px', 
        borderTop: '1px solid #EEE' 
      }}>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#888', 
          lineHeight: '1.8',
          margin: 0 
        }}>
          Currently refining Fullstack AI Development skills at <strong>Purwadhika</strong>. <br />
          Applying 10+ years of aviation engineering discipline to the modern digital stack.
        </p>
      </div>
    </div>
  );
}