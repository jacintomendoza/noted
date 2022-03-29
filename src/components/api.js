import React, { Component } from 'react';

class Api extends Component {
    constructor(props) {
        super(props) // allows `this` to be used
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://moto-inventory-database.herokuapp.com/motorbikes')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() { 
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return <div>
                    {items.map(item => (
                        <div key={item.id} className="moto" style={{"backgroundColor": "pink", "margin": "30px 30px"}}>
                            <li><strong>ID: </strong>{item.id}</li>
                            <li><strong>VIN: </strong>{item.vin}</li>
                            <li><strong>Make: </strong>{item.make}</li>
                            <li><strong>Type: </strong>{item.type}</li>
                            <li><strong>inStock: </strong>{item.inStock ? "true" : "false"}</li>
                            <li><strong>InvCount: </strong>{item.invCount}</li>
                        </div>      
                    ))}
            </div>
        };
    }
}
 
export default Api;