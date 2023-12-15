import React, { Component } from "react";
import { useParams } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

import { getNote } from "../utils/local-data";
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
    };
  }
  render() {
    if (!this.state.note) {
      return <NotFoundPage />;
    }
    return (
      <section className="detail-page-section">
        <div className="container">
          <h1 className="title">{this.state.note.title}</h1>
          <p className="date">{showFormattedDate(this.state.note.createdAt)}</p>
          <p className="body">{this.state.note.body}</p>
        </div>
      </section>
    );
  }
}

export default DetailPageWrapper;
