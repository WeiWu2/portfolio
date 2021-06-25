import "./App.css";
import Nav from "./Nav.js";
import profileImage from "./assets/profileIMG.png";
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
      <div className='skills'>
        <h2>Skills</h2>
      </div>
    </div>
  );
}

export default App;
