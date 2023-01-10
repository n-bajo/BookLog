package com.booklog.model;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name="book")
public class Book{
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private int current_page_num;
    private int max_page_num;
    private int user_rating;
    private String book_title;

    public Book() {
    }

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "status_id", nullable = false)
	private ReadStatus status;
    public void setStatus(ReadStatus stat) {
        this.status = stat;
    }
    public ReadStatus getStatus(){return status; }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCurrent_page_num() {
        return this.current_page_num;
    }

    public void setCurrent_page_num(int current_page_num) {
        this.current_page_num = current_page_num;
    }

    public int getMax_page_num() {
        return this.max_page_num;
    }

    public void setMax_page_num(int max_page_num) {
        this.max_page_num = max_page_num;
    }

    public int getUser_rating() {
        return this.user_rating;
    }

    public void setUser_rating(int user_rating) {
        this.user_rating = user_rating;
    }

    public String getBook_title() {
        return this.book_title;
    }

    public void setBook_title(String book_title) {
        this.book_title = book_title;
    }
}
