import { Component } from "react";

import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

import { getArchivedNotes, searchArchivedNotes } from "../utils/local-data";

function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const changeSearchParams = (keyword) => {
    setSearchParams({ search: keyword });
  };

  return (
    <ArchivedPage handleSearch={changeSearchParams} activeKeyword={search} />
  );
}

class ArchivedPage extends Component {
  constructor(props) {
    super(props);

    const { activeKeyword } = this.props;
    this.state = {
      searchResult: searchArchivedNotes(activeKeyword),
      notes: getArchivedNotes(),
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (searchResult) => {
    this.setState({
      searchResult: searchArchivedNotes(searchResult),
    });

    this.props.handleSearch(searchResult);
  };

  render() {
    const { searchResult } = this.state;

    return (
      <section className="notes-section">
        <div className="container">
          <h1 className="title">Archive</h1>
          <SearchBar
            handleSearch={this.handleSearch}
            defaultKeyword={this.props.activeKeyword}
          />
          <NoteList notes={searchResult} />
        </div>
      </section>
    );
  }
}

ArchivedPage.propTypes = {
  handleSearch: PropTypes.func,
  activeKeyword: PropTypes.string,
};

export default ArchivedPageWrapper;
