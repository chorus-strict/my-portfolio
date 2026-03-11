import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Idea from './pages/Idea';
import Capabilities from './pages/Capabilities';
import MyContact from './pages/My-Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-logo">Bagus.</div>
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/idea">Idea</NavLink>
            <NavLink to="/capabilities">Capabilities</NavLink>
            {/* 2. Tambahkan Link Navigasi ke Contact */}
            <NavLink to="/contact">Contact</NavLink> 
          </div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/idea" element={<Idea />} />
            <Route path="/capabilities" element={<Capabilities />} />
            {/* 3. Daftarkan Route agar path /contact bisa diakses */}
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