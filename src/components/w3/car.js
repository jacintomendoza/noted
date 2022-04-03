import React, {  } from 'react';

// CLASS COMPONENT //////////

// class car extends Component {
//     state = {  } 
//     render() { 
//         return (<h2>I am a car!</h2>);
//     }
// }
 
// FUNCTION COMPONENT //////////

function Car(props) {
    return <h2>Hi, I am a {props.color}!</h2>;
  }

export default Car;
