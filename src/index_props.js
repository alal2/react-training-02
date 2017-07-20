import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import Placeholder from './Placeholder';

const user = [{id:1, name: 'UserName' }]
// ReactDOM.render(<User user ={user} />,document.getElementById('root'));

ReactDOM.render(<Placeholder><User user ={user}/></Placeholder>,document.getElementById('root'));