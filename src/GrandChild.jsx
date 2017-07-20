import React, {Component} from 'react';

class GrandChild extends Component{
    render(){
        return(
            <div>
                <h1>GrandChild Component</h1>
                <p>Data from props: {this.props.message}</p>
            </div>
        )
    }
}

export default GrandChild;