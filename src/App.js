import './App.css';
import Nav from './Nav.js';
import profile from './assets/profileIMG2.png';
function App() {
  return (
    <div className="home-container">
      <Nav/>
      <div className='home-img-container'>
        <div className='profile-img'> </div>
      {/* <img className='profile-img' src= {profile} alt='Wei Wu'/> */}
      </div>
    
    </div>
  );
}

export default App;
