import React, { Component } from "react";
import { useParams, Navigate } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";
import Button from "../components/Button";

import { getNote, deleteNote, archiveNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";

function DetailPageWrapper() {
  const { noteId } = useParams();

  return <DetailPage id={noteId} />;
}

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
      redirectToHome: false,
    };
  }

  handleArchiveNote = (noteId) => {
    archiveNote(noteId);

    this.setState({
      redirectToHome: true,
    });
  };

  handleDeleteNote = (noteId) => {
    deleteNote(noteId);

    this.setState({
      redirectToHome: true,
    });
  };
  render() {
    const { redirectToHome } = this.state;

    if (!this.state.note) {
      return <NotFoundPage />;
    }

    if (redirectToHome) {
      return <Navigate to="/" />;
    }
    return (
      <section className="detail-page-section">
        <div className="container">
          <h1 className="title">{this.state.note.title}</h1>
          <p className="date">{showFormattedDate(this.state.note.createdAt)}</p>
          <p className="body">{this.state.note.body}</p>

          <Button
            buttonType="archive"
            onClick={() => {
              this.handleArchiveNote(this.state.note.id);
            }}
          >
            Arsipkan
          </Button>
          <Button
            buttonType="delete"
            onClick={() => this.handleDeleteNote(this.state.note.id)}
          >
            Hapus
          </Button>
        </div>
      </section>
    );
  }
}

export default DetailPageWrapper;
