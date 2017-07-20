import React, {Component} from 'react';

//child compoenent-stateless- function pattern
const Rank =(props) =>(
            <div>
             <p> {props.name} Rank is {props.heroRank}</p>
             <input type="text" onChange = {props.updateHeroName}/>
            </div>
            )


// parent component - stateful
class Hero extends Component{
    constructor(props){
        super(props);
        this.state ={name:'Child',rank: 0, rating: 0};
        this.incrementRank = this.incrementRank.bind(this);
        this.updateHeroName = this.updateHeroName.bind(this);
    }
    incrementRank(event){
        this.setState({rank: this.state.rank + 1})
    }
    updateHeroName(event){
        this.setState({name: event.target.value})
    }
    render(){
        return(
            <div>
                <h1>hero</h1>
                <p>Rank is: {this.state.rank}</p>
                <Rank heroRank ={this.state.rank} name={this.state.name} updateHeroName ={this.updateHeroName}/>
                <input onClick ={this.incrementRank} type ="button" value ="Increment" />
            </div>
        )
    }
}

export default Hero;