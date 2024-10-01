import './App.css';

//* rcc snippet fpr genreal class based component.
import React, { Component } from 'react'
import { Navbar } from './components/Navbar.js';
// @ts-ignore
import News from './components/News.js';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";


export default class App extends Component {
    render() {
        return (
            <div style={{background: "linear-gradient(to top right, rgb(100,20,35), rgb(40,40,40), rgb(100,20,35))"}}>
                <Navbar/>
                <Router>
                    <Routes>
                        <Route path="/" element={<News pageSize={6} country='us' category='general' />}/>
                        <Route path="/business" element={<News pageSize={5} country='us' category='business' />}/>
                        <Route path="/science" element={<News pageSize={5} country='us' category='science' />}/>
                        <Route path="/entertainment" element={<News pageSize={5} country='us' category='entertainment' />}/>
                        <Route path="/technology" element={<News pageSize={5} country='us' category='technology' />}/>
                        <Route path="/sports" element={<News pageSize={5} country='us' category='sports' />}/>
                        <Route path="/health" element={<News pageSize={5} country='us' category='health' />}/>
                    </Routes>

                </Router>
                

            </div>

        )
    }
}



