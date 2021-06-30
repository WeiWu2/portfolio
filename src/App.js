import "./App.css";
import Nav from "./Nav.js";
import profileImage from "./assets/profileIMG.png";
import reactLogo from "./assets/react-logo.svg";
import jsLogo from "./assets/javascript-logo.svg";
import cssLogo from "./assets/css-logo.svg";
import htmlLogo from "./assets/html-logo.svg";
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
      <div className="about-me">
        <div>
          <img src={profileImage} alt="Wei Wu" />
        </div>
        <div>
          <h2>About me</h2>
          <p>Hello, I'm Wei</p>
        </div>
      </div>
      <div className='skills-container'>
        <h2>Skills</h2>
        <div className='skills-list'>
          <div className='skills'>
          <img src={reactLogo} alt='React.js'></img>
          <p>React</p>
          </div>
          <div className='skills'>
          <img src={jsLogo} alt='Javascript'></img>
          <p>Javascript</p>
          </div>
          <div className='skills'>
          <img src={htmlLogo} alt='HTML5'></img>
          <p>HTML5</p>
          </div>
          <div className='skills'>
          <img src={cssLogo} alt='CSS3'></img>
          <p>CSS3</p>
          </div>
          <div className='skills'>
          <img src={cssLogo} alt='CSS3'></img>
          <p>Node.js</p>
          </div>
          <div className='skills'>
          <img src={cssLogo} alt='CSS3'></img>
          <p>Git</p>
          </div>
          <div className='skills'>
          <img src={cssLogo} alt='CSS3'></img>
          <p>Redux</p>
          </div>
          <div className='skills'>
          <img src={cssLogo} alt='CSS3'></img>
          <p>Postgres</p>
          </div>
        </div>
      </div>
      <div className='projects-container'>

      </div>
    </div>
  );
}

export default App;
