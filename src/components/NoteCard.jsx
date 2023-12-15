import React, { Component } from "react";

import { showFormattedDate } from "../utils/index";

class NoteCard extends Component {
  render() {
    const { uniqueKey, title, body, createdAt } = this.props;

    return (
      <li key={uniqueKey} className="note-card">
        <div className="wrap">
          <h1 className="title">{title}</h1>
          <p className="date">{showFormattedDate(createdAt)}</p>
          <p className="body">{body}</p>
        </div>
      </li>
    );
  }
}

export default NoteCard;
