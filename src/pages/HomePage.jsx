import React, { Component } from "react";

import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

import { Link } from "react-router-dom";

import { getActiveNotes } from "../utils/local-data";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: "",
      notes: getActiveNotes(),
    };
  }

  handleSearch = (searchResult) => {
    this.setState({
      searchResult,
    });
  };

  filterNotes = (notes, searchResult) => {
    if (!searchResult) {
      return notes;
    } else {
      return notes.filter((note) =>
        note.title.toLowerCase().includes(searchResult.toLowerCase())
      );
    }
  };
  render() {
    const { notes, searchResult } = this.state;

    return (
      <section className="notes-section">
        <div className="container">
          <SearchBar handleSearch={this.handleSearch} />
          <NoteList notes={this.filterNotes(notes, searchResult)} />
          <Link to="/notes/new">
            <Button buttonType="default">Create note</Button>
          </Link>
        </div>
      </section>
    );
  }
}

export default HomePage;
