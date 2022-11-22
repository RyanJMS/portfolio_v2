import "./App.css";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <header>
            <h1 className="title">Ryan Schock</h1>
            <p className="description">Full Stack Web Developer</p>
          </header>
          <Skills />
        </div>
      </main>
    </div>
  );
}

export default App;
