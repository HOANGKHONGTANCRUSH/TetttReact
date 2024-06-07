

import React from "react"

class MyComponent extends React.Component {


    state = {
        name: 'Hoang',
        address: 'HA Noi',
        age: 22
    }
    handleClick(event) {
        // console.log(">>> click me my button")

        this.setState({
            name: 'Pham',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnMoverOver(event) {
        // console.log(event);
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm  {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Horve me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        )
    }
}

export default MyComponent
