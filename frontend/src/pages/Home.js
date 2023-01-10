import React from "react";

class Home extends React.Component{
    render(){
        return(

<div className="wrapper">
        <header>
            <img src="assets/img/logo.png" id="logo" />
        </header>

        <div classNameName="navigation">
            <button className="menuButton" type="button">Aktuell</button>
            <button className="menuButton" type="button">Noch nicht begonnen</button>
            <button className="menuButton" type="button">Abgebrochen</button>
            <button className="menuButton" type="button">Fertig</button>

        </div>
        <div className="bookEntry">
            <div className="editButtons">
                <button className="editBook" type="button">⌫</button>
                <button className="editBook" type="button">⇄</button>
            </div>
            <div className="pageButtons">
                <button className="pageIncrement" type="button">+5</button>
                <button className="pageIncrement" type="button">+10</button>
                <button className="pageIncrement" type="button">+20</button>
                <button className="pageIncrement" type="button">+0... </button>
            </div>
            <h1 className="bookTitle">Buchtitel</h1>
            <p className="rating">Bewertung 5/5</p>
            <p className="pageNum">Seite 20/340</p>
        </div>

        <div className="bookEntry">
            <div className="editButtons">
                <button className="editBook" type="button">⌫</button>
                <button className="editBook" type="button">⇄</button>
            </div>
            <div className="pageButtons">
                <button className="pageIncrement" type="button">+5</button>
                <button className="pageIncrement" type="button">+10</button>
                <button className="pageIncrement" type="button">+20</button>
                <button className="pageIncrement" type="button">+0... </button>
            </div>
            <h1 className="bookTitle">Buchtitel</h1>
            <p className="rating">Bewertung 5/5</p>
            <p className="pageNum">Seite 20/340</p>
        </div>

    </div>
        )
    }
}

export default Home;