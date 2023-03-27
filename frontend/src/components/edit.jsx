import React, { Component } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    ratingOptions: ["1", "2", "3", "4", "5"],
    readStatusOptions: ["Aktuell","Noch nicht begonnen","Abgebrochen","Fertig"
    ],
  };


  // The next 3 functions update the input to the state. 
  // I had to create speperate functions for the dropdowns since mui didn't allow overwrtining their ids
  handleChange = (e) => {
    const name = e.target.id;
    switch (name) {
      case "bookTitle":
        this.setState({
          book: {
            ...this.state.book,
            book_title: e.target.value,
          },
        });
        break;
      case "maxPageNum":
        this.setState({
          book: {
            ...this.state.book,
            max_page_num: parseInt(e.target.value),
          },
        });
        break;
      case "currentPageNum":
        this.setState({
          book: {
            ...this.state.book,
            current_page_num: parseInt(e.target.value),
          },
        });
        break;
      
    }
    console.log(this.state.book);
        console.log(" - book after handler")
        console.log(e.target.id, "parameter")
  };
  
  handleStatus = (e) => {
    const statusOptions = [
      { id: 1, optionId: "readStatus-option-0" },
      { id: 2, optionId: "readStatus-option-1" },
      { id: 3, optionId: "readStatus-option-2" },
      { id: 4, optionId: "readStatus-option-3" },
    ];
  
    const selectedOption = statusOptions.find(option => option.optionId === e.target.id);
    const newStatus = { ...this.state.book.status, id: selectedOption.id };
  
    this.setState({
      book: {
        ...this.state.book,
        status: newStatus,
      },
    });

  };

  handleRating = (e) => {
    const ratingOptions = [
      { id: 1, optionId: "userRating-option-0" },
      { id: 2, optionId: "userRating-option-1" },
      { id: 3, optionId: "userRating-option-2" },
      { id: 4, optionId: "userRating-option-3" },
      { id: 5, optionId: "userRating-option-4" },
    ];
  
    const selectedOption = ratingOptions.find(option => option.optionId === e.target.id);
    const newRating = selectedOption.id;
  
    this.setState({
      book: {
        ...this.state.book,
        user_rating: newRating,
      },
    });
  console.log(selectedOption, "option")
  console.log(newRating, "rating")
  };
  
  
  

  fetchBook() {
    const book = [this.state.book];
    console.log("Attempting to fetch book with id", this.props.id);
    fetch("http://localhost:8080/book/getById?id=" + this.props.id)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          book: {...data,
            max_page_num: data.max_page_num.toString(),
            current_page_num: data.current_page_num.toString()
          }
        })
      );
  }
  
  // Sends book to backend and redirecs to main page
  handleEdit = (book) => {
    console.log("sending..");
    fetch('http://localhost:8080/book/edit?id=' + book.id, {
      headers: { "Content-Type": "application/json" },
      method: 'PUT',
      body: JSON.stringify(book)
    });
    console.log(book);

    window.location.href = "/"
  }
  

  componentDidMount() {
    this.fetchBook();
    
  }

  render() {
    console.log(this.state);
    console.log("");
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
            onChange={this.handleRating}
            renderInput={(params) => (
              <TextField {...params} label="Bewertung" />
            )}
          />

          <Autocomplete
            disablePortal
            id="readStatus"
            options={this.state.readStatusOptions}
            onChange={this.handleStatus}
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
            <Button onClick={() => this.handleEdit(this.state.book)} variant="contained" endIcon={<SendIcon />}>
              Senden
            </Button>
          </Stack>
        </form>
      </div>
    );
  }
}

export default Edit;
