import React, {Component} from 'react';

class Greeter extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Greeter;