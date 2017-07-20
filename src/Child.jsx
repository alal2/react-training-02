import React, {Component} from 'react';
import GrandChild from './GrandChild';

class Child extends Component{
    render(){
        return(
            <div>
                <h1>Child Component</h1>
                <p>Data from props: {this.props.message}</p>
                <GrandChild message ={this.props.message} />
            </div>
        )
    }
}

export default Child;