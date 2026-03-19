import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

const services = [
  { id: 1, icon: '🏗️', title: 'Commercial Construction', desc: 'Office buildings, retail spaces, and industrial facilities built to spec.' },
  { id: 2, icon: '🏠', title: 'Residential Building', desc: 'Custom homes and renovations with quality craftsmanship.' },
  { id: 3, icon: '🔧', title: 'Renovation & Remodeling', desc: 'Transform existing spaces with modern upgrades.' },
  { id: 4, icon: '📐', title: 'Project Planning', desc: 'End-to-end planning, permits, and project management.' },
]

const projects = [
  { id: 1, title: 'Downtown Office Tower', category: 'Commercial', place: 'Mysore', status: 'Completed' },
  { id: 2, title: 'Lakeside Residences', category: 'Residential', place: 'Tumkur', status: 'In Progress' },
  { id: 3, title: 'City Mall Expansion', category: 'Commercial', place: 'Bangalore', status: 'Completed' },
  { id: 4, title: 'Heritage Home Restoration', category: 'Renovation', place: 'Hassan', status: 'In Progress' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <nav className="nav">
        <span className="nav-brand"><img src={logo} alt="KeyVenture" className="nav-logo" /> KeyVenture</span>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero" id="home">
        <h1>Building Your Vision</h1>
        <p>Trusted construction partner delivering quality projects on time and on budget since 1995.</p>
        <a href="#contact" className="cta-btn">Get a Free Quote</a>
      </header>

      <section className="section" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="cards">
          {services.map(s => (
            <div className="card" key={s.id}>
              <span className="card-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-dark" id="projects">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          {projects.map(p => (
            <div className="project-card" key={p.id}>
              <span className={`badge ${p.status === 'Completed' ? 'badge-done' : 'badge-wip'}`}>{p.status}</span>
              <h3>{p.title}</h3>
              <p>{p.category}</p>
              <p className="project-place">📍 {p.place}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Tell us about your project" rows={4} required />
          <button type="submit" className="cta-btn">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} KeyVenture Construction. All rights reserved.</p>
      </footer>
    </div>
  )
}
