import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <Link to="/">Adiva Notes</Link>
        </div>
        <div className="archived-link">
          <Link to="/archives">Archived</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
