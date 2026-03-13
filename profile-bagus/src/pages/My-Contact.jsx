import React from 'react';

export default function MyContact() {
  const contactDetails = [
    { label: "Primary Inbound", value: "muhammadbagus13@gmail.com", link: "mailto:muhammadbagus13@gmail.com" },
    { label: "Professional Uplink", value: "LinkedIn Profile", link: "https://www.linkedin.com/in/muhammad-bagus-suwondo-34a57320b" },
    { label: "Development Repository", value: "GitHub Portfolio", link: "https://github.com/chorus-strict?tab=repositories" },
    { label: "Base Location", value: "Tangerang, Indonesia (UTC +7)", link: null }
  ];

  return (
    <div className="fade-in" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', overflowX: 'hidden' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 1fr', 
        gap: '100px', 
        marginTop: '40px',
        alignItems: 'start'
      }}>
        
        <section>
          <h2 style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '20px' }}>Initiate Connection</h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 300, lineHeight: '1.1', letterSpacing: '-0.05em', margin: 0 }}>
            Let's build something <br />
            <span style={{ color: '#135bec', fontWeight: 600 }}>technically sound.</span>
          </h1>
          
          <div style={{ marginTop: '60px' }}>
            <h2 style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '30px' }}>Inquiry Focus</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Fullstack AI Architecture", "Legacy Systems Modernization", "Precision UI/UX Implementation"].map((item, i) => (
                <li key={i} style={{ fontSize: '1.4rem', color: '#444', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#135bec', borderRadius: '50%' }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ marginTop: '70px', padding: '35px', border: '1px solid #EEE', backgroundColor: '#FBFBFB', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', backgroundColor: '#135bec' }}></div>
            <p style={{ margin: '0 0 15px 0', fontSize: '1.1rem', color: '#1A1A1A' }}>
              <strong>Current Status:</strong> Open for high-precision collaborations.
            </p>
            <p style={{ margin: 0, fontSize: '1rem', color: '#888', fontStyle: 'italic' }}>
              Response Time: Typical response within 24 flight hours.
            </p>
          </div>
        </section>

        <section style={{ marginTop: '30px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ borderTop: '3px solid #135bec', paddingTop: '40px' }}>
            {contactDetails.map((contact, index) => (
              <div key={index} style={{ marginBottom: '50px', width: '100%' }}>
                <p style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', margin: '0 0 15px 0' }}>
                  {contact.label}
                </p>
                {contact.link ? (
                  <a 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', /* Mengecilkan teks di HP agar tidak meluap */
                      color: '#1A1A1A', 
                      textDecoration: 'none',
                      fontWeight: 400,
                      transition: 'all 0.3s ease',
                      borderBottom: '2px solid transparent',
                      wordBreak: 'break-all', /* Memotong teks panjang */
                      display: 'inline-block',
                      maxWidth: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#135bec';
                      e.currentTarget.style.borderBottom = '2px solid #135bec';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#1A1A1A';
                      e.currentTarget.style.borderBottom = '2px solid transparent';
                    }}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span style={{ fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', color: '#1A1A1A', wordBreak: 'break-word' }}>
                    {contact.value}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '30px', fontSize: '12px', color: '#CCC', letterSpacing: '0.2em' }}>
            SYSTEM STATUS: SECURE // PORT 443 ACTIVE
          </div>
        </section>
      </div>
    </div>
  );
}