import { NavLink } from "react-router-dom";
import headerBackground from '../jujutsu-kaisen-gojo-geto.avif';
import NavBar from "./navigation";

function Header() {
  return (
   <div className="header">
       <div className="image-wrapper"> <img src={headerBackground} alt="App Logo" /></div>
          <div className="header-content">
            <h1>Japan Trip</h1>
    
            <p> Dates</p>
          </div>
          <NavBar />
    </div>
  );
}

export default Header;