import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <section className="search-section">
        <div className="container">
          <input type="text" placeholder="Cari catatan..." />
        </div>
      </section>
    );
  }
}

export default SearchBar;
