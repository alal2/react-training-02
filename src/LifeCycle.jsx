import React, {Component} from 'react';

// class Parent extends Component{
//     constructor(props){
//         super(props);
//         this.state = {name:'ffrhj'}
//         this.updateHeroName = this.updateHeroName.bind(this);
//     }
//     updateHeroName(event){
//         this.setState({name: event.target.value})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Parent Component</h1>
//                 <LifeCycle name ={this.state.name} />
//                 <input type="text" onChange = {props.updateHeroName}/>
//             </div>
//         );
//     }
// }



class LifeCycle extends Component{
    //mount phase
    constructor(){
        super();
        console.log('constructor');
        this.state= {heroes:[]};
    }

    componentWillMount(){
        console.log('component Will Mount');
    }

    componentDidMount(){
        console.log('component Did Mount');
       this.getHeroes();
    }
    getHeroes(){
        fetch('http://localhost:8081/api/sapient/heroes')
        .then(res=>{
            return res.json();
        })
        .then(res => {
            this.setState({heroes: res});
        });
    }
    componentWillReceiveProps(nextProps){
        console.log(' will receive props')
    }
    render(){
        console.log('render');
        var listItem = this.state.heroes.map((hero,index) => (
            <li key ={index}>
                <span className ="badge">{hero.id} {hero.name}</span>
            </li>
         ));
        return(
            <div>
                <p>Component LifeCycle</p>
                <ul>{listItem}</ul>
            </div>
        )
    }
}

export default LifeCycle;