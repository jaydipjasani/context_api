import React, { Component } from 'react'
import Guest from './Guest'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>This is User Page</h1>
                <Guest gprop={this.props.gprop}></Guest>
            </div>
        )
    }
}
