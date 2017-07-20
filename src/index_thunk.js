import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


let heroesReducer = (heroes = [], action) => {
    switch (action.type) {
        case "GET_HEROES":
            return [...heroes, action.data];
        default:
            return heroes;
    }
}
const middleWareStore = applyMiddleware(thunkMiddleware)(createStore);
const store = middleWareStore(heroesReducer);

function getHeroesActionCreator(data) {
    return {
        type: "GET_HEROES",
        data
    }
}

function getHeroes(url) {
    return function (dispatch) {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                dispatch(getHeroesActionCreator(res));
            });
    }
}

store.subscribe(() => console.log(store.getState()));
console.log('action started')
store.dispatch(getHeroes('http://localhost:8080/api/heroes'));
console.log('action end')