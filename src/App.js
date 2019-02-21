import React, { Component } from 'react';
import './App.css';
import List from './list'
//import Time from './time'


class App extends Component {

  state = {
    markText: 'false',
    addList: [],
    ListData: {
      item: ''
    }
  }



  updateList = (event) => {
    //get the value the user typed
    const newData = event.target.value;
    //get the orignal state.
    const orignalState = this.state.ListData;
    //make a copy of the orignal state.
    const copy = Object.assign({}, orignalState)
    //get new key from name of input
    const key = event.target.name;
    //update the copy with data the user typed 
    copy[key] = newData;
    //updata the state with the new copy
    this.setState({
      ListData: copy
    })
  }

  sumited = (event) => {

    //make a copy of the addList array using slice
    const copy = this.state.addList.slice(0);
    //prevent the form from refreshing the page
    event.preventDefault();
    //add the new data to the array
    copy.push(this.state.ListData)
    //update the state with our new copy
    this.setState({
      addList: copy,
      // to clear the input box
      ListData: {
        item: ''

      }

    })

  }

  //Will clear all the array when the user click the clear button.
  clearlist = (event) => {
    event.preventDefault();
    this.setState({
      addList: []
    })
  }

  // function to get passed to List component.check
  markTheitem = (index) => {
    //make copy from the array 
    const copy = this.state.addList.slice(0);
    //Take every item from the array and mark it when the user click to it.
    if (copy[index].markText === 'false')
      copy[index].markText = 'markitem';
    else {
      copy[index].markText = 'false';
    }
    //update the array.
    this.setState({
      addList: copy
    })

  }

  //the function will remove only the completed item.
  clearcompletedlist = (event) => {
    event.preventDefault();
    //if the item marked ,the filter function will removed the item . 
    const result = this.state.addList.filter((testitem) => {

      if (testitem.markText === 'markitem') {
        return false;
      } else {
        return true;
      }
    })
    // update the array with the new array.
    this.setState({
      addList: result
    })

  }

  render() {

    const toDoList = this.state.addList.map((toDoData, index) => {
      return <List onMark={this.markTheitem} listitem={toDoData} id={index} />;

    })
    return (

      <div>


        <h1>To Do List</h1>
        <form onSubmit={this.sumited}>

          <div className="input-group col-sm-5 mx-auto">
            <input type='text' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="item" onChange={this.updateList} value={this.state.ListData.item} placeholder='write here ...'></input>
          </div>

          <div className="my-4">
            <button type="submit" className="btn btn-outline-dark">ADD</button>
            <button className="btn btn-outline-dark" onClick={this.clearlist} >Clear</button>
            <button onClick={this.clearcompletedlist} className="btn btn-outline-dark">Done</button>
          </div>

        </form>

        {toDoList}

      </div >

    );
  }
}

export default App;
