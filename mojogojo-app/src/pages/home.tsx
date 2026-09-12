import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
    <div className="home-content">
        <div className="header">
            <h1>Trips</h1>
    </div>

      <main>
        <NavLink to="/dashboard"><div className="card card--home">Japan Trip</div></NavLink>
      </main>
    </div>
    </>
  );
}

export default Home;