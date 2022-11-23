import React, { useState, useEffect } from "react";
import "./App.css";
import Skills from "./pages/Skills";
import Links from "./components/Links";
import Projects from "./pages/Projects";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <header className="header">
        <label for="theme" aria-label="toggle-theme" className="switch">
          <input
            name="theme"
            type="checkbox"
            className="theme"
            onClick={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
        <h1 className="title">Ryan Schock</h1>
        <p className="description">Full Stack Web Developer</p>
        <Links theme={theme} />
      </header>
      <main role="main">
        <div className="container">
          <Skills />
          <Projects />
        </div>
      </main>
      <footer>
        <p className="footer-text">&copy; Ryan Schock</p>
      </footer>
    </div>
  );
}

export default App;
