import React from "react";

class AddUserinfors extends React.Component {

    state = {
        name: '',
        address: 'HA Noi',
        age: ''
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
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
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
                </from>
            </div>
        )
    }
}

export default AddUserinfors;