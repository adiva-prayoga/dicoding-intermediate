import React, { Component } from "react";

import PropTypes from "prop-types";

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

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
