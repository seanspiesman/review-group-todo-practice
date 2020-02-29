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

  // axios.post('/stateInfo', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  clickHandler() {
    // Axios.post("/stateInfo", {
    //   firstName: "Fred",
    //   lastName: "Flintstone"
    // })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    const val = this.refItem.current.value;
    Axios.post("/stateInfo", { val: "test" })
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
      return { glist: state.glist.splice(data, 1) };
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
