import React, { Component } from 'react'
import User from './User';

export const MyContext = React.createContext();
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name : "jaydip"
    }
  }
  render() {
    return (
      <div>
        <h1>This is App Page  </h1>
        <MyContext.Provider value={this.state.name}>
       <User></User>
   </MyContext.Provider>
      </div>
    )
  }
}
