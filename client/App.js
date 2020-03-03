import React from "react";
import ListItem from "./ListItem";
import Axios from "axios";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      glist: []
    };
    this.refItem = React.createRef();
    //this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    const val = this.refItem.current.value;
    // console.log(val);
    Axios.post("http://localhost:3000/stateInfo", { val })
      .then(response => {
        console.log(response);
        this.setState(state => {
          this.refItem.current.value = "";
          return { glist: state.glist.concat(val) };
          // return state.glist.push(val);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  clickHandlerDelete(data) {
    console.log(data);
    this.setState(state => {
      var copy = state.glist.slice();
      copy.splice(data, 1);
      return { glist: copy };
    });
  }

  render() {
    return (
      <div>
        <input ref={this.refItem} placeholder="Item here"></input>
        <button onClick={this.clickHandler.bind(this)}>Submit</button>
        <ul>
          {this.state.glist.map((item, index) => {
            return (
              <ListItem
                item={item}
                key={index}
                delete={this.clickHandlerDelete.bind(this)}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
