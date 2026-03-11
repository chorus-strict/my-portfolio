import React from 'react';

export default function Idea() {
  const projects = [
    {
      title: "SkyCheck AI",
      status: "Concept",
      tech: "React, OpenAI, Three.js",
      star: {
        s: "Manual maintenance logs are prone to error.",
        t: "Create an AI assistant for 3D guided procedures.",
        a: "Built prototype with Three.js & OpenAI data parsing.",
        r: "Reduced documentation time by 40% in drills."
      }
    },
    {
      title: "Minimalist HUD",
      status: "Prototyping",
      tech: "React, Tailwind, Framer",
      star: {
        s: "Dashboards often suffer from info overload.",
        t: "Design UI using flight instrument precision.",
        a: "Implemented 'Zero-Distraction' UI with real-time physics.",
        r: "25% faster data recognition rate."
      }
    },
    {
      title: "Neural Fleet",
      status: "Research",
      tech: "Node.js, Python, TensorFlow",
      star: {
        s: "Digital hardware failures are usually reactive.",
        t: "Build predictive algorithms for fleet health.",
        a: "Engineered ML pipeline to analyze sensor patterns.",
        r: "Predicted failures 48h before occurrence."
      }
    }
  ];

  return (
    <div className="fade-in" style={{ 
      width: '100%', 
      maxWidth: '1300px', 
      margin: '0 auto',
      /* PERBAIKAN UTAMA: Menggunakan minHeight yang konsisten dengan halaman lain */
      minHeight: '75vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      paddingTop: '40px' // Menyamakan jarak atas dengan halaman Profile/Contact
    }}>
      <header style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888', marginBottom: '8px' }}>Portfolio</h2>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 300, letterSpacing: '-0.04em', margin: 0 }}>Idea Lab</h1>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr', 
        gap: '15px', 
        marginBottom: '30px' 
      }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '20px 35px', 
              border: '1px solid #EEE', 
              borderRadius: '2px', 
              backgroundColor: '#fff'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#135bec', textTransform: 'uppercase' }}>{project.status}</span>
                <h3 style={{ fontSize: '1.5rem', margin: '2px 0', fontWeight: 600 }}>{project.title}</h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#135bec', fontWeight: 500, margin: 0 }}>{project.tech}</p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '20px', 
              borderTop: '1px solid #F5F5F5', 
              paddingTop: '12px' 
            }}>
              {[
                { label: 'Situation', text: project.star.s },
                { label: 'Task', text: project.star.t },
                { label: 'Action', text: project.star.a },
                { label: 'Result', text: project.star.r }
              ].map((item, i) => (
                <div key={i}>
                  <strong style={{ display: 'block', fontSize: '9px', color: '#AAA', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</strong>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.4', margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        padding: '18px 30px', 
        backgroundColor: '#F9F9F9', 
        borderLeft: '5px solid #135bec',
        /* Tambahkan marginBottom di sini untuk mendorong footer lebih jauh ke bawah */
        marginBottom: '40px' 
      }}>
        <p style={{ margin: 0, fontSize: '1rem', fontStyle: 'italic', color: '#444' }}>
          "In aviation, every detail is a safety requirement. In code, every detail is an opportunity for perfection."
        </p>
      </div>
    </div>
  );
}