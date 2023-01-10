package com.booklog.controller;

import com.booklog.model.Book;
import com.booklog.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/getAll")
        public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    };
    @GetMapping("/getById")
         public Optional<Book> getById(@RequestParam Integer id){
        return bookService.getById(id);
    };

    @GetMapping("/getAktuell")
    public List<Book> getAktuell(){
        return bookService.findByStatusId(1);
    };

    @GetMapping("/getNochNichtBegonnen")
    public List<Book> getNochNichtBegonnen(){
        return bookService.findByStatusId(2);
    };

    @GetMapping("/getAbgebrochen")
    public List<Book> getAbgebrochen(){
        return bookService.findByStatusId(3);
    };

    @GetMapping("/getFertig")
    public List<Book> getFertig(){
        return bookService.findByStatusId(4);
    };

    @PostMapping("/add")
    public  String add(@RequestBody Book book){
        bookService.saveBook(book);
        return "Buch wurde hinzugefügt";
    };

    @DeleteMapping("/remove")
    public  String removeBook(@RequestParam Integer id){
        bookService.removeBook(id);
        String message = String.format("Buch mit der ID %s wurde entfernt", id);
        return message;
    };

    @PutMapping("/edit")
        public  String editBook(@RequestParam Integer id, @RequestBody(required = false) Book book){
        bookService.editBook(id,book);
        String message = String.format("Buch mit der ID %s wurde editiert", id);
        return message;

    };

}


