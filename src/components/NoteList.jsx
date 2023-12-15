import React, { Component } from "react";
import NoteCard from "./NoteCard";

class NoteList extends Component {
  render() {
    const { notes } = this.props;

    return (
      <section className="note-list-section">
        <ul>
          {notes.length === 0 ? (
            <p className="empty-notes">Tidak ada catatan</p>
          ) : (
            notes.map((note) => (
              <NoteCard
                uniqueKey={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
              />
            ))
          )}
        </ul>
      </section>
    );
  }
}

export default NoteList;
