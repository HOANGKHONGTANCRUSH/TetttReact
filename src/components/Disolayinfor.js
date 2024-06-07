import React from "react";

class DisPlayInfor extends React.Component {
    render() {
        console.log(this.props)
        //props => viet tat properties
        return (
            <div>
                <div>My name is {this.props.name}</div>
                <div>My age is {this.props.age}</div>
            </div>
        )
    }
}

export default DisPlayInfor