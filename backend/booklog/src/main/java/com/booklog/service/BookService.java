package  com.booklog.service;
import com.booklog.model.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    public Book saveBook(Book book);
    public List<Book> getAllBooks();

    public void removeBook(Integer id);


    List<Book> findByStatusId(Integer StatusId);

    public Book editBook(int id, Book book);


    Optional<Book> getById(Integer id);
}

