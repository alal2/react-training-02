import React, {Component} from 'react';

class RowCount extends Component {
    render(){
        
        return(
            <p>
                Row count: {this.props.count}
            </p>
        )
    }
}

export default RowCount;