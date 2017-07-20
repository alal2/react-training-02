import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ('./Greeter.css');
//ES5

//  function Greeter(props) {
//      return(
//         <div>
//              <h1>{props.name}</h1>
//         </div>
//      )
//  }

//ES6
const Greeter = props => (<div className = "header"><h1>{props.name}</h1></div>);

//defining default props
// Greeter.defaultProps ={
//     name : 'Default prop'
// };

//property constraints
Greeter.propTypes = {
    name: PropTypes.string.isRequired
};

export default Greeter;