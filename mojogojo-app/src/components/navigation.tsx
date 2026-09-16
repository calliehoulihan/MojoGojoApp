import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <> 
  <nav className="nav" aria-label="Main navigation">
    <ul className="nav-list">
       <li><NavLink to="/">My Trips</NavLink></li>
        <li><NavLink to="/dashboard">Home</NavLink></li>
        <li><NavLink to="/itinerary">Itinerary</NavLink></li>
        <li><NavLink to="/explore">Explore</NavLink></li>
        <li><NavLink to="/expenses">Expenses</NavLink></li>
    </ul>
  </nav>
    </>
  );
}

export default NavBar;