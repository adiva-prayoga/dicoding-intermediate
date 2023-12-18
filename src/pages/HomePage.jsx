import { Component } from "react";

import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";

import { getActiveNotes, searchNotes } from "../utils/local-data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const changeSearchParams = (keyword) => {
    setSearchParams({ search: keyword });
  };

  return <HomePage handleSearch={changeSearchParams} activeKeyword={search} />;
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    const { activeKeyword } = this.props;
    this.state = {
      searchResult: searchNotes(activeKeyword),
      notes: getActiveNotes(),
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (searchResult) => {
    this.setState({
      searchResult: searchNotes(searchResult),
    });

    this.props.handleSearch(searchResult);
  };
  render() {
    const { searchResult } = this.state;

    return (
      <section className="notes-section">
        <div className="container">
          <h1 className="title">HomePage</h1>
          <SearchBar
            handleSearch={this.handleSearch}
            defaultKeyword={this.props.activeKeyword}
          />
          <NoteList notes={searchResult} />
          <Link to="/notes/new">
            <Button buttonType="default">Create note</Button>
          </Link>
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string.isRequired,
};

HomePageWrapper.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default HomePageWrapper;
