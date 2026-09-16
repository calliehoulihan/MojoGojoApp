import Header from '../components/header';
import NavBar from '../components/navigation';

function Dashboard() {
  return (
    <>
  <NavBar />

  <main className="container">
    <Header />

    <div className="sections">
      <section className="section">
        <h2>Flights</h2>
        <div className="section-card">   
          <h4>Flight to Tokyo</h4>
          <p>
            The trail is suitable for all skill levels and can be completed in a single day.
          </p>
        </div>

        <div className="section-card">
          <h4>Flight to Chattanooga</h4>
          <p>
            The trail is suitable for all skill levels and can be completed in a single day.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Lodging</h2>
         <div className="section-card">   
          <h4>Stay in Tokyo</h4>
          <p>
            The trail is suitable for all skill levels and can be completed in a single day.
          </p>
        </div>

        <div className="section-card">
          <h4>Stay in Osaka</h4>
          <p>
            The trail is suitable for all skill levels and can be completed in a single day.
          </p>
        </div>
      </section>
    </div>
  </main>
  </>
  );
}

export default Dashboard;