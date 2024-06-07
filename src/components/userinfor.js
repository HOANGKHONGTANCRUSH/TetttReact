import React from "react";

class UserInfor extends React.Component {

    state = {
        name: 'Hoang',
        address: 'HA Noi',
        age: 22
    }
    //JSX
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event, event.target.value)
    }

    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
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
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnchangeName(event)}
                    />
                    <button>Submit</button>
                </form>
                <from onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Age</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                    />
                    <button>Submit</button>
                </from>
            </div>
        )
    }
}

export default UserInfor;