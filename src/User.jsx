import React, {Component} from 'react';

class User extends Component{
    constructor(){
        super();
        this.state = {secretKey :'hjdf'}
    }
    render(){
        return(
            <div>
                <h1>{this.props.user[0].id}</h1>
                <h2>{this.props.user[0].name}</h2>
                <p>Password is: {this.state.secretKey}</p>
            </div>
        );
    }
}

export default User;