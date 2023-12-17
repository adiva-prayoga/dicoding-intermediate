import React, { Component } from "react";

class SearchBar extends Component {
  handleSearch = (e) => {
    const searcQuery = e.target.value;

    this.props.handleSearch(searcQuery);
  };

  render() {
    return (
      <section className="search-section">
        <input
          type="text"
          placeholder="Cari catatan..."
          onChange={this.handleSearch}
        />
      </section>
    );
  }
}

export default SearchBar;
