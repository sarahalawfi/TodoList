import React, { Component } from 'react';
import Time from './time'

class List extends Component {


    // every time click any text or li will take the index and send it to 
    //markTheitem function 
    onClick = () => {
        this.props.onMark(this.props.id)
    }


    render() {
        return (
            <div className='showlist'>
                <ul onClick={this.onClick}>
                    <li className={this.props.listitem.markText}>
                        {this.props.listitem.item}
                    </li>
                </ul>
                <Time />
            </div>

        );
    }
}
export default List;