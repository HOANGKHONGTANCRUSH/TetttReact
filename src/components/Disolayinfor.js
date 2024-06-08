import React from "react";

class DisPlayInfor extends React.Component {
    render() {


        const { listUsers } = this.props;
        console.log(listUsers)
        //props => viet tat properties
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>

                            <div>My name is {user.name} </div>
                            <div>My age is {user.age} </div>
                            <hr></hr>
                        </div>
                    )
                })}
                {/* <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr></hr>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr></hr>
                <div>My name is {name}</div>
                <div>My age is {age}</div> */}
            </div>
        )
    }
}

export default DisPlayInfor