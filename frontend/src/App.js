import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookEntrys from './components/bookEntrys';
import Header from './components/header';
import MenuFilter from './components/menuFilter';
import EditFetch from './components/editFetch';
import Edit from './components/edit';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <div className="wrapper">
            <Header />
            <MenuFilter />
            <Router>
            
                <Routes>
            
            <Route path="/" element={<BookEntrys/>} />
            <Route path="/Aktuell" element={<BookEntrys statusId={1} />} />
            <Route path="/Anstehend" element={<BookEntrys statusId={2} />} />
            <Route path="/Abgebrochen" element={<BookEntrys statusId={3} />} />
            <Route path="/Fertig" element={<BookEntrys statusId={4} />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/editFetch" element={<EditFetch />} />
        
            

                </Routes>
            
            
            </Router>
            </div>
        );
    }
}
 
export default App;