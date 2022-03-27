import React from "react";
import About from './about/about';
import { BrowserRouter, Link, Route, Redirect, Router} from 'react-router-dom';


class navbar extends React.Component {
    render() { 
        return (
            <nav style={{
                backgroundColor: 'steelblue',
                height: '50px',
                boxShadow: '.5px 1px 5px black',
                position: "relative",
                display: "flex"
            }}>
                <header className="app-header" style={{display: "flex"}}>
                    <h1 className="app-title">Project Noted!</h1>
                    <div className="links" style={{}}>
                        <Link to="/about">About</Link>
                        <Link to="/noted">Noted</Link>
                    </div>
                    
                </header>
            </nav>
        );
    }
}
 
export default navbar;