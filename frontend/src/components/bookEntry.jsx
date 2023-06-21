import React, { Component } from 'react';
import { Link, useLocation  } from 'react-router-dom';


class Book extends Component {

    

    

   
    
    


    render() { 
        let buttonName = this.props.addValue.map(x => '+' + x);
        
        // Used for color button styling
        let updatedValue = this.props.addValue.map(x => this.props.currentPageNum + x);
        
        let buttonClass = []
        
        // Restyle the button if pressing the it would change the current page number to be below 0 or above the number of total pages 
        for (let i = 0; i < updatedValue.length; i++) {
            
            if(updatedValue[i] <= this.props.maxPageNum && updatedValue[i] > 0) {
                buttonClass[i] ="pageIncrement";
                } else{buttonClass[i] ="pageIncrementUnavailable";}
        }
        
        
        return (
        <div className="bookEntry">
        <div className="editButtons">
            <button className="editBook" type="button" onClick={() => this.props.onDelete(this.props.id)}>⌫</button>
            <Link to={"/editFetch"} state={{ id: this.props.id }}><button className="editBook" type="button">⇄</button></Link>
        </div>
        <div className="pageButtons">
        <input type="button" onClick={() => this.props.onUpdate(this.props.addValue[0], this.props.id)} className={buttonClass[0]} value={buttonName[0]}/>
        <input type="button" onClick={() => this.props.onUpdate(this.props.addValue[1], this.props.id)} className={buttonClass[1]} value={buttonName[1]}/>
        <input type="button" onClick={() => this.props.onUpdate(this.props.addValue[2], this.props.id)} className={buttonClass[2]} value={buttonName[2]}/>
        </div>
        <h1 className="bookTitle">{this.props.bookTitle}</h1>
        <p className="rating">Bewertung {this.props.userRating}/5</p>
        <p className="pageNum">Seite {this.props.currentPageNum}/{this.props.maxPageNum}</p>
    </div>
    
        );

    }
}
 
export default Book;