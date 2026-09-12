import Header from "../components/header";

function Expenses() {
  return (
    <div className="dashboard">
      <Header />

      <main className="content">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
      </main>
    </div>
  );
}

export default Expenses;