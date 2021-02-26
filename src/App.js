import React, { Component } from 'react'
import User from './User';
import { Provider } from "./Context";


export default class App extends Component {

  state = {
    name: "jaydip",
    marks: 10
  }

  handleClick = (e) => {
    this.setState({ marks: this.state.marks + 1 })
  }
  render() {

    // Event and State stored in variable
    const Contextdata = {
      data: this.state,
      handleClick: this.handleClick
    }
    return (
      <div>
        <h1>This is App Page  </h1>

        {/* Using Provider Send value directly any child Component */}

        <Provider value={Contextdata}>
          <User></User>
        </Provider>
      </div>
    )
  }
}
