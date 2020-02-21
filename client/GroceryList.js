import React from 'react';
import ListItem from './ListItem';

class GroceryList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: ['Chips','Spinach','Jerky'],
      input: '',
    }
  }

  handleChange(event){
    this.setState({
      input:event.target.value
    })
  }

  addItem(){
    this.setState({
      items: state.items.concat(this.state.input),
      input: ''
    })
  }

  render(){
    return(
      <div>
        <h1>GroceryList</h1>
        <input onChange={this.handleChange.bind(this)} value={this.state.input}></input>
        <button onClick={this.addItem.bind(this)}>Submit</button>
        <ul>
          {this.state.items.map( (food,index) => (
            <ListItem key={index} foodItem={food}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default GroceryList;