import React, { useState, createContext } from "react";
import "./App.css";
import Skills from "./pages/Skills";
import Links from "./components/Links";
import Projects from "./pages/Projects";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <header className="header">
          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch
              name="toggle-theme"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
          </div>

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
    </ThemeContext.Provider>
  );
}

export default App;
