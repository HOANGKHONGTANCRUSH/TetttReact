

import React from "react"

class MyComponent extends React.Component {


    state = {
        name: 'Hoang',
        address: 'HA Noi',
        age: 22
    }
    handleClick(event) {
        // console.log(">>> click me my button")

        // this.setState({
        //     name: 'Pham',
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }
    handleOnMoverOver(event) {
        // console.log(event);
    }
    //JSX
    handleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event, event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm  {this.state.age}
                <from onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.handleOnchangeInput(event)}
                    />
                    <button>Submit</button>
                </from>
            </div>
        )
    }
}

export default MyComponent
