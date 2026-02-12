import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const rotatingTexts = ['Gungun', 'the best', 'in code', 'creative', 'passionate']

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Gungun</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">Welcome to my portfolio</div>
          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="rotating-text-container">
              <span key={textIndex} className="gradient-text rotating-text">
                {rotatingTexts[textIndex]}
              </span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="hero-description">
            Building beautiful, functional, and user-centric digital experiences
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Work</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Get to know me</span>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer who loves creating elegant solutions to complex problems.
                With expertise in modern web technologies, I specialize in building responsive,
                performant, and accessible applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">My expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>Frontend Development</h3>
              <p>React, Vue, TypeScript, Next.js, Tailwind CSS</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Backend Development</h3>
              <p>Node.js, Express, Python, PostgreSQL, MongoDB</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🚀</div>
              <h3>DevOps & Tools</h3>
              <p>Docker, Git, CI/CD, AWS, Vercel, Bun</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>Design & UX</h3>
              <p>Figma, UI/UX Design, Responsive Design, Accessibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">My work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <a href="#" className="project-link">View Project →</a>
                </div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce solution with real-time inventory management</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <a href="#" className="project-link">View Project →</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>Collaborative project management tool with real-time updates</p>
                <div className="project-tags">
                  <span>Vue</span>
                  <span>Firebase</span>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <a href="#" className="project-link">View Project →</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Analytics Dashboard</h3>
                <p>Real-time data visualization dashboard with custom charts</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>D3.js</span>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Let's connect</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="contact-content">
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact-grid">
              <a href="mailto:hello@gungun.dev" className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <p>hello@gungun.dev</p>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">💻</div>
                <h3>GitHub</h3>
                <p>@gungun</p>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">🐦</div>
                <h3>Twitter</h3>
                <p>@gungun</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Gungun. All rights reserved.</p>
            <p className="footer-tech">Built with React, Vite & Bun</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
