import React, {Component} from 'react';
import RowComponent from './RowComponent';
import RowCount from './RowCount';

class GridContainer extends Component{
    constructor(props){
        super(props);
        this.state ={count :0}
        this.deleteHandler = this.deleteHandler.bind(this);
    }
   deleteHandler(){
       
   }
    render(){
        return(
            <div>
               
                <table className ="grid-cont">
                    <RowComponent count={this.state.count} deleteHandler ={this.deleteHandler}/>
                </table>
            </div>
        );
    }
}

export default GridContainer;