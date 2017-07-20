import React, {Component} from 'react';
import Child from './Child';

class Master extends Component{
    constructor(props){
        super(props);
        this.state = {name:'ffrhj'}
    }
    render(){
        return(
            <div>
                <h1>Master Component</h1>
                <Child message ={this.state.name}/>
            </div>
        );
    }
}

export default Master;