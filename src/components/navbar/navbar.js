import React from "react";
import { BrowserRouter, Link, Route, Redirect, Router} from 'react-router-dom';
import './navbar.css'

class navbar extends React.Component {
    render() { 
        return (
            <nav style={{
                backgroundColor: 'steelblue',
                height: '50px',
                top: 0,
                boxShadow: '.5px 1px 5px black'
            }}>
                <header className="app-header" style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%"}}>

                    <h1 className="app-title">React Playground!</h1>

                    <div className="right-side" style={{display: "flex", paddingRight: "30px"}}>
                        <Link className="link" to="/about">About</Link>
                        <Link className="link" to="/api">Api</Link>
                    </div>
                </header>
            </nav>
        );
    }
}
 
export default navbar;