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
          <Link to="/notes/new">
            <Button buttonType="default">Create note</Button>
          </Link>
        </div>
      </section>
    );
  }
}

export default HomePage;
