import React, {Component} from 'react';

//mock data
const Heroes =[
            {id:1, name:'Ram'},
            {id:2, name:'shyam'},
            {id:3, name:'Robert'},
            {id:4, name:'Downey'},
        ];


class ListComponent extends Component{
   
    render(){
         var listItem = Heroes.map((hero,index) => (
            <li key ={index}>
                <span className ="badge">{hero.id} {hero.name}</span>
            </li>
         ));

        return(
            <div>
                <ul>{listItem}</ul>
            </div>
        );
    }
}

export default ListComponent;