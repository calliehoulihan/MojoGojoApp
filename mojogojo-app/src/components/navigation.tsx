import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <> <div className="header sidebar">
          <ul>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><a href="">|</a></li>
            <li><NavLink to="/itinerary">Itinerary</NavLink></li>
            <li><a href="">|</a></li>
            <li><NavLink to="/explore">Explore</NavLink></li>
            <li><a href="">|</a></li>
            <li><NavLink to="/expenses">Expenses</NavLink></li>
          </ul>
        </div></>
  );
}

export default NavBar;