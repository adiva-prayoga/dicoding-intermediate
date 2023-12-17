import React, { Component } from "react";

import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

import { getArchivedNotes } from "../utils/local-data";

class ArchivedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: "",
      notes: getArchivedNotes(),
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
        </div>
      </section>
    );
  }
}

export default ArchivedPage;
