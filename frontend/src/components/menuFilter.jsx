import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MenuFilter extends Component {
    
    render() { 
        return (<div className="navigation">

        
        <a href="http://localhost:3000/"><button className="menuButton" type="button">Alle Bücher</button>    </a>
        <a href="http://localhost:3000/Aktuell"><button className="menuButton" type="button"  >Aktuell</button> </a>
        <a href="http://localhost:3000/Anstehend"><button className="menuButton" type="button">Noch nicht begonnen</button> </a>
        <a href="http://localhost:3000/Abgebrochen"><button className="menuButton" type="button">Abgebrochen</button> </a>
        <a href="http://localhost:3000/Fertig"><button className="menuButton" type="button">Fertig</button> </a>
    </div>);
    }
}
 
export default MenuFilter;