import React, { Component } from 'react'
import {Consumer} from "./Context";

export default class Guest extends Component {
    render() {
        return (
            <div>
                <h1>This is Guest page</h1>

    {/* provider data used in consumer by two parameter */}

                <Consumer>
                    {({ data, handleClick }) => 
                        <div>
                            <h3>Name : {data.name} Marks : {data.marks}</h3>
                            <button onClick={handleClick}>Increase Marks</button>
                        </div>
                    }
                </Consumer>

            </div>
        )
    }
}










