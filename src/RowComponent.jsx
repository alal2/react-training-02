import React, {Component} from 'react';

const Heroes =[
            {id:1, name:'Ram'},
            {id:2, name:'shyam'},
            {id:3, name:'Robert'},
            {id:4, name:'Downey'},
        ];



class RowComponent extends Component{
   constructor(){
       super();
       this.deleteRow = this.deleteRow.bind(this)
   }
    deleteRow(event){
        console.log(event.target)
        var target = event.target;
        
    }
    render(){
        var trElem = Heroes.map((hero,index) => (
            <tr key ={index} ref="rows">
                <span className ="badge">{hero.id} {hero.name}</span>
                <input type ="button" value ="Delete" onClick = {this.deleteRow}/>
            </tr>
         ));

        
        return(
            <tbody className ="row-cont">
                {trElem}
            </tbody>

        );
    }
}

export default RowComponent;