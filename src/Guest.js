import React, { Component } from 'react'
import { MyContext } from './App'

export default class Guest extends Component {
    render() {
        return (
            <div>
                <h1>This is Guest page</h1>
                <MyContext.Consumer>
                    {({ data, handleClick }) => (
                        <div>
                            <h2>name : {data.name} Marks: {data.marks}</h2>
                            <button onClick={handleClick}>Increase Marks</button>
                        </div>
                    )}
                </MyContext.Consumer>

            </div>
        )
    }
}
