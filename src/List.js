import React from 'react';
export default class List extends React.Component{

  render(){
    return <ul>
    {this.props.list.map((item,index) =>{
      return <li key={item}>
      {item}

      <button onClick={this.props.handleDelete.bind(null, item)}>
      -
      </button> </li>
    })
    }
    </ul>;
  }
}
