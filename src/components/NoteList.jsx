import { showFormattedDate } from "../utils/index";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoteList({ notes }) {
  return (
    <section className="note-list-section">
      <ul>
        {Array.isArray(notes) && notes.length === 0 ? (
          <p className="empty-notes">Tidak ada catatan</p>
        ) : (
          notes.map((note) => (
            <li key={note.id} className="note-card">
              <div className="wrap">
                <h1 className="title">
                  <Link to={`/notes/${note.id}`}>{note.title}</Link>
                </h1>
                <p className="date">{showFormattedDate(note.createdAt)}</p>
                <p className="body">{note.body}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
