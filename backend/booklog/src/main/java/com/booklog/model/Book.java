package com.booklog.model;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="book")
public class Book{
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private int currentPageNum;
    private int maxPageNum;
    private int userRating;
    private String bookTitle;



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

    public int getCurrentPageNum() {
        return this.currentPageNum;
    }

    public void setCurrentPageNum(int currentPageNum) {
        this.currentPageNum = currentPageNum;
    }

    public int getMaxPageNum() {
        return this.maxPageNum;
    }

    public void setMaxPageNum(int maxPageNum) {
        this.maxPageNum = maxPageNum;
    }

    public int getUserRating() {
        return this.userRating;
    }

    public void setUserRating(int userRating) {
        this.userRating = userRating;
    }

    public String getBookTitle() {
        return this.bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }
}
