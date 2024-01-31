import "./App.css";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="Home">
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
