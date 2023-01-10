import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

class Edit extends Component {
  state = {
    book: [],
    ratingOptions: [1, 2, 3, 4, 5],
    readStatusOptions: [
      "Aktuell",
      "Noch Nicht Begonnen",
      "Fertig",
      "Abgebrochen",
    ],
  };

  handleChange = (e) => {
    const name = e.target.id;
    switch (e.target.id) {
      case "bookTitle":
        this.setState({
          book_title: e.target.value,
        });
        break;
      case "maxPageNum":
        this.setState({
            max_page_num: e.target.value,
        });
        break;
      case "currentPageNum":
        this.setState({
            current_page_num: e.target.value,
        });
        break;
      case "userRating":
        this.setState({
            user_rating: e.target.value,
        });
        break;
      case "readStatus":
        this.setState({
          book_title: e.target.value,
        });
        break;
    }
  };

  fetchBook() {
    const book = [this.state.book];

    fetch("http://localhost:8080/book/getById?id=" + this.props.id)
      .then((response) => response.json())
      .then((data) => this.setState({ book: data }));
  }

  componentDidMount() {
    this.fetchBook();
  }

  render() {
    return (
      <div className="editInput">
        <form>
          <TextField
            required
            id="bookTitle"
            label="Buch Titel"
            defaultValue={this.state.book.book_title}
            placeholder={this.state.book.book_title}
            onChange={this.handleChange}
            variant="standard"
          />

          <TextField
            required
            id="maxPageNum"
            label="Anzahl Seiten"
            defaultValue={this.state.book.max_page_num}
            placeholder={this.state.book.max_page_num}
            onChange={this.handleChange}
            variant="standard"
          />

          <TextField
            required
            id="currentPageNum"
            label="Gelesene Seiten"
            defaultValue={this.state.book.current_page_num}
            placeholder={this.state.book.current_page_num}
            onChange={this.handleChange}
            variant="standard"
          />

          <Autocomplete
            disablePortal
            id="userRating"
            options={this.state.ratingOptions}
            onChange={this.handleChange}
            renderInput={(params) => (
              <TextField {...params} label="Bewertung" />
            )}
          />

          <Autocomplete
            disablePortal
            id="readStatus"
            options={this.state.readStatusOptions}
            onChange={this.handleChange}
            renderInput={(params) => (
              <TextField {...params} label="Lesestatus" />
            )}
          />

          <Stack direction="row" spacing={2}>
            <a href="http://localhost:3000/">
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Abbruch
              </Button>
            </a>
            <Button variant="contained" endIcon={<SendIcon />}>
              Senden
            </Button>
          </Stack>
        </form>
      </div>
    );
  }
}

export default Edit;
