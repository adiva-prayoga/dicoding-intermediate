import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="container">
          <div className="logo">
            <Link to="/">Adiva Notes</Link>
          </div>
          <div className="archived-link">
            <Link to="/archived">Archived</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
