import { useState, useEffect } from 'react';
/* 1. Tambahkan 'Link' ke dalam import dari react-router-dom */
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
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
          {/* 2. Ubah <div className="nav-logo"> menjadi <Link>
            dan tambahkan properti 'to="/"' serta 'onClick={closeMenu}'
            tambahkan style textDecoration: 'none' dan color: 'inherit'
            agar tampilan tetap sama (hitam/sesuai tema).
          */}
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
    </Router>
  );
}

export default App;