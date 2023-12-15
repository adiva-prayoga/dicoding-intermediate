import React, { Component } from "react";

import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

import { getArchivedNotes } from "../utils/local-data";

class ArchivedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
    };
  }
  render() {
    const { notes } = this.state;

    return (
      <section className="notes-section">
        <div className="container">
          <SearchBar />
          <NoteList notes={notes} />
        </div>
      </section>
    );
  }
}

export default ArchivedPage;
