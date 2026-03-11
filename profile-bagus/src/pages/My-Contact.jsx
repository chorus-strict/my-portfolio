import React from 'react';

export default function MyContact() {
  const contactDetails = [
    { label: "Primary Inbound", value: "muhammadbagus13@gmail.com", link: "mailto:muhammadbagus13@gmail.com" },
    { label: "Professional Uplink", value: "LinkedIn Profile", link: "https://www.linkedin.com/in/muhammad-bagus-suwondo-34a57320b" },
    { label: "Development Repository", value: "GitHub Portfolio", link: "https://github.com/chorus-strict?tab=repositories" },
    { label: "Base Location", value: "Tangerang, Indonesia (UTC +7)", link: null }
  ];

  return (
    <div className="fade-in" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 1fr', 
        gap: '80px', 
        marginTop: '60px',
        alignItems: 'start'
      }}>
        
        {/* Kolom Kiri: Pesan Utama & Inquiry Focus */}
        <section>
          <h2 style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '15px' }}>Initiate Connection</h2>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 300, lineHeight: '1.1', letterSpacing: '-0.04em', margin: 0 }}>
            Let's build something <br />
            <span style={{ color: '#135bec', fontWeight: 600 }}>technically sound.</span>
          </h1>
          
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '20px' }}>Inquiry Focus</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Fullstack AI Architecture", "Legacy Systems Modernization", "Precision UI/UX Implementation"].map((item, i) => (
                <li key={i} style={{ 
                  fontSize: '1.1rem', 
                  color: '#444', 
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ width: '6px', height: '6px', backgroundColor: '#135bec', borderRadius: '50%' }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ marginTop: '50px', padding: '25px', border: '1px solid #EEE', backgroundColor: '#FBFBFB', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#135bec' }}></div>
            <p style={{ margin: '0 0 10px 0', fontSize: '0.85rem', color: '#1A1A1A' }}>
              <strong>Current Status:</strong> Open for high-precision collaborations.
            </p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>
              Response Time: Typical response within 24 flight hours.
            </p>
          </div>
        </section>

        {/* Kolom Kanan: Detail Kontak Teknis */}
        <section style={{ marginTop: '20px' }}>
          <div style={{ borderTop: '2px solid #135bec', paddingTop: '30px' }}>
            {contactDetails.map((contact, index) => (
              <div key={index} style={{ marginBottom: '40px' }}>
                <p style={{ 
                  fontSize: '10px', 
                  letterSpacing: '0.2em', 
                  textTransform: 'uppercase', 
                  color: '#999', 
                  margin: '0 0 10px 0' 
                }}>
                  {contact.label}
                </p>
                {contact.link ? (
                  <a 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      fontSize: '1.3rem', 
                      color: '#1A1A1A', 
                      textDecoration: 'none',
                      fontWeight: 400,
                      transition: 'all 0.3s ease',
                      borderBottom: '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#135bec';
                      e.currentTarget.style.borderBottom = '1px solid #135bec';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#1A1A1A';
                      e.currentTarget.style.borderBottom = '1px solid transparent';
                    }}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span style={{ fontSize: '1.3rem', color: '#1A1A1A' }}>{contact.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Technical Note Footer */}
          <div style={{ marginTop: '20px', fontSize: '10px', color: '#CCC', letterSpacing: '0.1em' }}>
            SYSTEM STATUS: SECURE // PORT 443 ACTIVE
          </div>
        </section>

      </div>
    </div>
  );
}