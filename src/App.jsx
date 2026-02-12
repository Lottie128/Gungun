import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Gungun</h1>
        <p className="tagline">Welcome to my personal space</p>
      </header>

      <main>
        <section className="section">
          <h2>About Me</h2>
          <p>
            Hi! I'm Gungun. This is my personal website built with React, Vite, and Bun.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Vite</span>
            <span className="skill-tag">Bun</span>
            <span className="skill-tag">JavaScript</span>
          </div>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
          <div className="contact-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:hello@example.com">Email</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Gungun. Built with React + Vite + Bun</p>
      </footer>
    </div>
  )
}

export default App
