import React from "react";

class navbar extends React.Component {
    render() { 
        return (
            <nav style={{
                backgroundColor: 'steelblue',
                height: '5vh',
                boxShadow: '.5px 1px 5px black',
                position: "relative"
            }}>
                <header className="app-header">
                    <h1 className="app-title">Project Noted!</h1>
                </header>
            </nav>
        );
    }
}
 
export default navbar;