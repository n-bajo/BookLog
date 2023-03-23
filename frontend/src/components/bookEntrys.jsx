import React, { Component} from 'react';
import Book from './bookEntry';

class BookEntrys extends Component {
    state = {
        books: [],
       statusId: 1
    }; 
    
   
    componentDidMount() {
        this.fetchBooks()
    
    }


    fetchBooks(){
        const books = [this.state.books]
        switch (this.props.statusId){
            case 1:
                fetch("http://localhost:8080/book/getAktuell")
                .then(response => response.json())
                .then((data) => this.setState({books: data}))
                break;

            case 2:
                fetch("http://localhost:8080/book/getNochNichtBegonnen")
                .then(response => response.json())
                .then((data) => this.setState({books: data}))
                break;

           case 3:
                fetch("http://localhost:8080/book/getAbgebrochen")
                .then(response => response.json())
                .then((data) => this.setState({books: data}))
                break;

            case 4:
                fetch("http://localhost:8080/book/getFertig")
                .then(response => response.json())
                .then((data) => this.setState({books: data}))
                break;

            default:
                fetch("http://localhost:8080/book/getAll")
                .then(response => response.json())
                .then((data) => this.setState({books: data}))
                break;
            
           
        }


    }




    handlePageUpdate= (updateNum, id) =>  {
        const books = [...this.state.books]
        const index = id;
        const rightBook = books.filter(function (bookId){return bookId.id == index});
        rightBook[0].current_page_num += updateNum;
        this.setState({books});
        fetch('http://localhost:8080/book/edit?id=' + id, {  headers: { "Content-Type": "application/json" }, method: 'PUT', body: JSON.stringify(rightBook[0])})
        
    }

    

    deleteQuestion = (id) =>  {
        fetch("http://localhost:8080/book/remove?id=" + id, {method: 'DELETE'});
        const books = [...this.state.books]
        const index = books.findIndex(function (bookId){return bookId.id == id})

        books.splice(index, 1)
        this.setState({books});
        
    }
    
    render() {
       
        return (
            
            <div>
                {this.state.books.map(book => 
                <Book key={book.id} 
                id={book.id}
                bookTitle={book.book_title} 
                currentPageNum={book.current_page_num} 
                maxPageNum={book.max_page_num} 
                userRating={book.user_rating}
                onUpdate={this.handlePageUpdate}
                onDelete={this.deleteQuestion}
                addValue={[5, 10, 20]}
                />)}
                
            </div>
        );
    }

}
export default BookEntrys;