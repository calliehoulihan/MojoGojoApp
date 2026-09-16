import headerBackground from '../jujutsu-kaisen-gojo-geto.avif';

function Header() {
  return (
    <header className="header">
      <div className="header-image">
        <img src={headerBackground} alt="Street scene in Japan" />
      </div>
      <div className="header-content">
        <h1>Japan!</h1>
        <input type="date" className="date-picker" value="2025-06-15" aria-label="Select date" />
        <p className="subtitle">We going to Japan!</p>
      </div>
    </header>
  );
}

export default Header;