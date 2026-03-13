import { useState, useEffect } from 'react';
/* 1. Import Link dan komponen navigasi lainnya */
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
/* 2. Import SpeedInsights dari Vercel */
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Idea from './pages/Idea';
import Capabilities from './pages/Capabilities';
import MyContact from './pages/My-Contact';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <Router>
      <div className={`app-container ${isMenuOpen ? 'menu-active' : ''}`}>
        <nav className="navbar">
          {/* Logo dengan fungsi kembali ke Home */}
          <Link
            to="/"
            className="nav-logo"
            onClick={closeMenu}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Bagus.
          </Link>
          
          <div
            className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/profile" onClick={closeMenu}>Profile</NavLink>
            <NavLink to="/idea" onClick={closeMenu}>Idea</NavLink>
            <NavLink to="/capabilities" onClick={closeMenu}>Capabilities</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/idea" element={<Idea />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/contact" element={<MyContact />} />
          </Routes>
        </main>

        <footer className="global-footer">
          <div className="footer-line"></div>
          <div className="footer-content">
            <p>Tech enthusiast & engineer dedicated to building seamless digital systems. Based in Indonesia.</p>
            <p className="copyright">© 2026 Crafted by Bagus.</p>
          </div>
        </footer>
      </div>
      
      {/* 3. Letakkan komponen SpeedInsights di sini agar memantau seluruh aplikasi */}
      <SpeedInsights />
    </Router>
  );
}

export default App;