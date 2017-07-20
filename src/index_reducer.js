import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import { createStore } from 'redux';
import {Provider, connect } from 'react-redux';

class Counter extends Component {
    render(){ 
        const { value, onIncreaseClick }  =this.props
        return(
            <div>
                <span>{value}</span>
                <button onClick = {onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

//Reducer
function counter(state = {count: 0}, action){
    const count = state.count
    switch (action.type) {
        case 'increase':
            return {count: count + 1}
        default:
            return state;
    }

}

//action
const increaseAction = {type: 'increase'}

//store
const store = createStore(counter) 

//mapping redux state ->react props

//map redux state to component props
function mapStateToProps(state){
    return {
        value: state.count
    }
}

//map redux action to component props
function mapDispatchToProps(dispatch){
    return{
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

//connected component
const  App = connect (
    mapStateToProps,
    mapDispatchToProps
)(Counter)

ReactDOM.render(
    <Provider store = {store}>
        <App />
</Provider>,
document.getElementById('root')
)