import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

/*The constructor*/
export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      list: []
    };
  }

/*Completes the deletion of items*/
handleDelete(itemsToBeDeleted){
  var newList = this.state.list.filter((_item)=> {
    return _item != itemsToBeDeleted
  });

  this.setState({list: newList});
}

onChange = (event) => {
  this.setState({text: event.target.value});
}

/*This adds item to the list. If the item is empty, an alert window is executed*/
onSubmit = (event) => {
  event.preventDefault();
  if (this.state.text == "")
    alert("The item is empty");
  else{
  this.setState({
    text: '',
    list: [...this.state.list, this.state.text]
  });
}
}

/*Creates a form in which user can add and delete items from the list*/
render(){
  return (
   <div className="paper">
    <div className="lines">
     <div className="text">
      <form className="List" onSubmit={this.onSubmit}>

        <h1>To-Do List </h1>
        <input value={this.state.text} onChange={this.onChange} />
        <button> + </button>

      </form>
      <List
      handleDelete={this.handleDelete.bind(this)}
      list={this.state.list}/>
      </div>

  <div className="holes hole-top"></div>
  <div className="holes hole-middle"></div>
  <div className="holes hole-bottom"></div>

   </div>
   </div>

 );
}
}
