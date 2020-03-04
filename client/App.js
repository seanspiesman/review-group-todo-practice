import React from "react";
import ListItem from "./ListItem";
import axios from "axios";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      glist: []
    };
    this.refItem = React.createRef();
    //this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    axios.get("/stateInfo").then(response => {
      // console.log(response.data);
      this.setState(state => {
        this.refItem.current.value = "";
        var newState = [];
        for (var item of response.data) {
          newState.push([item.item]);
        }
        // console.log(newState);
        return { glist: state.glist.concat(newState) };
      });
    });
  }

  // componentDidUpdate() // updates dom when item is changed!!! REVIEW

  clickHandler() {
    var val = this.refItem.current.value;
    axios
      .post("/stateInfo", { val })
      .then(response => {
        // console.log(response);
        this.setState(state => {
          this.refItem.current.focus();
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
    var val = this.state.glist[data];
    console.log(val, data);
    axios.delete(`/stateInfo/${val}`, { data: { val } }).then(response => {
      this.setState(state => {
        var copy = state.glist.slice();
        copy.splice(data, 1);
        console.log(copy);
        return { glist: copy };
      });
    });
  }

  render() {
    return (
      <div>
        <h1>GROCERY LIST </h1>
        <input ref={this.refItem} placeholder="Item here"></input>
        <button onClick={this.clickHandler.bind(this)}>Submit</button>
        <ul>
          {this.state.glist.map((item, index) => {
            // console.log(index);
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
