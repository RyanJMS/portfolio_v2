import React, { useState, useMemo, createContext } from "react";
import "./App.css";
import Skills from "./pages/Skills";
import Links from "./components/Links";
import Projects from "./pages/Projects";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const setInitialTheme = () => {
    if (localStorage.getItem("theme")) {
      const currTheme = localStorage.getItem("theme");
      setTheme(currTheme);
    }
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    localStorage.removeItem("theme");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useMemo(() => {
    setInitialTheme();
  }, [theme]);

  console.log(theme, localStorage.getItem("theme"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <header className="header">
          <div className="switch">
            <label htmlFor="toggle-theme">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </label>
            <ReactSwitch
              id="toggle-theme"
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
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Ryan Schock
          </p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
