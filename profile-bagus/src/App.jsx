import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Idea from './pages/Idea';
import Capabilities from './pages/Capabilities';
import MyContact from './pages/My-Contact';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk menutup menu saat link diklik
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className={`app-container ${isMenuOpen ? 'menu-active' : ''}`}>
        <nav className="navbar">
          <div className="nav-logo">Bagus.</div>
          
          {/* Tombol Hamburger ala Purwadhika */}
          <div 
            className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          {/* Nav Links dengan Overlay */}
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
    </Router>
  );
}

export default App;