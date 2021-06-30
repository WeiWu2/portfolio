import "./App.css";
import Nav from "./components/NavBar/Nav.js";
import About from "./components/AboutMe/About.js";
import Skills from "./components/Skills/Skills.js";
function App() {
  return (
    <div className="home-container">
      <Nav />
      <div className="home-img">
        <h1 className="home-header-text">
          FULL STACK <h1>WEB</h1>
        </h1>
      </div>
      {/* <div className='profile-img'> 
      <h2></h2>
      </div> */}
      <About />
      <Skills />
      <div className="projects-container"></div>
    </div>
  );
}

export default App;
