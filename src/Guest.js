import React, { Component } from 'react'
import { MyContext } from './App'

export default class Guest extends Component {
    render() {
        return (
            <div>
                <h1>This is Guest page</h1>
                <MyContext.Consumer>
                    {data => <h2>{data}</h2>}
                </MyContext.Consumer>
                
            </div>
        )
    }
}
