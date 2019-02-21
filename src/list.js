import React, { Component } from 'react';


class List extends Component {


    // every time click any task will take the index and send it to 
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


            </div>

        );
    }
}
export default List;