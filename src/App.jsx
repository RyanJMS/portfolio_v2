import "./App.css";
import Skills from "./pages/Skills";
import Links from "./components/Links";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Ryan Schock</h1>
        <p className="description">Full Stack Web Developer</p>
        <Links />
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
