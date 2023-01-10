package com.booklog.service;

import com.booklog.model.Book;
import com.booklog.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class BookServiceImp implements BookService{
    @Autowired
    private BookRepository bookRepository;
    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public void removeBook(Integer id) {
        bookRepository.deleteById(id);
    }

    @Override
    public List<Book> findByStatusId(Integer StatusId){
        return bookRepository.findByStatusId(StatusId);
    }

    @Override
    public Book editBook(int id, Book book) {
        book.setId(id);
        return bookRepository.save(book);
    }

    @Override
    public Optional<Book> getById(Integer id) {
        return bookRepository.findById(id);
    }


}
