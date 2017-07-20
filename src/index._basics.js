import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// JSX variable pattern

// const element = (<div>
//                     <h1>Hello</h1>
//                 </div>)

// inject in DOM
// ReactDOM.render(element, document.getElementById('root'));

//--------------functional pattern-------------------------

// function Greeter(){
//     return(
//         <div>
//             <h1>Hello from function</h1>
//         </div>
//     )
// }

// ReactDOM.render(<Greeter />,document.getElementById('root'));

//--------------------ES6 arrow function---------------------

// const Greeter = () => (<div><h1>Hello</h1></div>);
// ReactDOM.render(<Greeter />,document.getElementById('root'));

//--------------------ES6 class pattern-------------

class Greeter extends Component{
    render(){
        return(
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}

ReactDOM.render(<Greeter />,document.getElementById('root'));