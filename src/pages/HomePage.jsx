import React, { Component } from "react";

import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

import { getActiveNotes } from "../utils/local-data";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
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

export default HomePage;
