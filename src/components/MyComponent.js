

import React from "react"

class MyComponent extends React.Component {


    state = {
        name: 'Hoang',
        address: 'Ha Noi',
        age: 22
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm From {this.state.address}
            </div>
        )
    }
}

export default MyComponent
