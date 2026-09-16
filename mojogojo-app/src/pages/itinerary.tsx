import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NavBar from "../components/navigation";
import TextField from "@mui/material/TextField";

function Itinerary() {
  return (
    <>
  <NavBar />

  <main className="container">
    <h1>Itinerary</h1>

    <div className="sections">
      <section className="section">
        <h2>Tokyo</h2>
          <div className="section-card">   
              <div className="itinerary-row">
                <div className="itinerary-header">
                  <h3>Wednesday 9/30</h3>
                  <h5 className="subtitle">Day 1</h5>
                </div>

                <input
                  className="itinerary-time"
                  type="time"
                  aria-label="Time"
                />

               <TextField
                  id="standard-multiline-flexible"
                  label="Activity"
                  multiline
                  maxRows={4}
                  variant="standard"
                />
              </div>
          </div>
           <div className="section-card">   
              <div className="itinerary-row">
                <div className="itinerary-header">
                  <h3>Thursday - 10/1</h3>
                  <h5 className="subtitle">Day 2</h5>
                </div>

                <input
                  className="itinerary-time"
                  type="time"
                  aria-label="Time"
                />

               <TextField
                  id="standard-multiline-flexible"
                  label="Activity"
                  multiline
                  maxRows={4}
                  variant="standard"
                />
              </div>
              
          </div>
      </section>

      <section className="section">
        <h2>Osaka</h2>
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

export default Itinerary;