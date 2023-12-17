import { Component } from "react";

import NotFoundPage from "./NotFoundPage";
import Button from "../components/Button";

import PropTypes from "prop-types";
import { useParams, Navigate } from "react-router-dom";

import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
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
      redirectToArchive: false,
    };
  }

  handleUnarchiveNote = (noteId) => {
    unarchiveNote(noteId);

    this.setState({
      redirectToArchive: true,
    });
  };

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
    const { redirectToHome, redirectToArchive } = this.state;

    if (!this.state.note) {
      return <NotFoundPage />;
    }

    if (redirectToArchive) {
      return <Navigate to="/archives" />;
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

          {this.state.note.archived ? (
            <Button
              buttonType="archive"
              onClick={() => this.handleUnarchiveNote(this.state.note.id)}
            >
              Pindahkan
            </Button>
          ) : (
            <Button
              buttonType="archive"
              onClick={() => {
                this.handleArchiveNote(this.state.note.id);
              }}
            >
              Arsipkan
            </Button>
          )}

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

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
