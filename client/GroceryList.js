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
    //This will work, but is not preferred
    //GOOD
    let temp = this.state.items
    temp.push(this.state.input)
    this.setState({
      items: temp,
      input: ''
    })

    //BETTER
    this.setState({
      items: state.items.concat(this.state.input),
      input: ''
    })
    
    //BEST
    //This is the preferred Method to not modify state directly
    this.setState({
      items: [...this.state.items, this.state.input],
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