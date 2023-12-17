import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import Button from "../components/Button";

import { addNote } from "../utils/local-data";

class CreateNotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxTitleLength: 40,
      redirectToHome: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const { maxTitleLength } = this.state;

    if (name === "title" && value.length > maxTitleLength) {
      return;
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, body } = this.state;

    if (title && body) {
      addNote({ title, body });

      this.setState({
        redirectToHome: true,
        title: "",
        body: "",
      });
    }
  };

  render() {
    const { title, body, maxTitleLength, redirectToHome } = this.state;
    const remainingCharacters = maxTitleLength - title.length;

    if (redirectToHome) {
      return <Navigate to="/" />;
    }

    return (
      <section className="form-section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <p>Remaining characters: {remainingCharacters}</p>
            <input
              type="text"
              name="title"
              placeholder="Ini adalah judul..."
              value={title}
              onChange={this.handleInputChange}
              required
            />
            <textarea
              name="body"
              placeholder="Tulis catatanmu di sini..."
              value={body}
              onChange={this.handleInputChange}
              required
            ></textarea>
            <Button buttonType="submit">Submit</Button>
          </form>
        </div>
      </section>
    );
  }
}

export default CreateNotePage;
