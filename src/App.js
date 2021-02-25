import React, { Component } from 'react'
import User from './User';

export const MyContext = React.createContext();
export default class App extends Component {
  
    state = {
      name : "jaydip",
      marks : 10
  }

  handleClick = (e) =>{
    this.setState({marks : this.state.marks + 1 })
  }
  render() {
    const Contextdata = {
      data : this.state,
      handleClick : this.handleClick
    }
    return (
      <div>
        <h1>This is App Page  </h1>
        <MyContext.Provider value={Contextdata}>
       <User></User>
   </MyContext.Provider>
      </div>
    )
  }
}
