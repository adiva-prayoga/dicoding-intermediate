import { Component } from "react";

import PropTypes from "prop-types";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.defaultKeyword || "",
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (e) => {
    const { value } = e.target;

    this.setState(() => {
      return {
        keyword: value,
      };
    });

    this.props.handleSearch(value);
  };

  render() {
    return (
      <section className="search-section">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.state.keyword}
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
