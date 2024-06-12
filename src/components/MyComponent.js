

import React from "react"
import AddUserinfors from "./AddUserinfors"
import DisPlayInfor from "./Disolayinfor"

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {
                id: 1,
                name: "Hoang",
                age: '30',
            },
            {
                id: 2,
                name: "Hoa",
                age: '16',
            },
            {
                id: 3,
                name: "Ha",
                age: '90',
            }
        ]
    }

    handleAddNewUser = (userObj) => {
        // let listUsersnew = this.state.listUsers;

        // listUsersnew.unshift(userObj);
        // console.log('>>>', listUsersnew)
        // this.setState({
        //     listUsers: listUsersnew
        // })

        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }

    render() {

        return (
            <>
                <br></br>
                <div className="a">
                    <AddUserinfors
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br />
                    <DisPlayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />

                </div>
                <div className="b">

                </div>
            </>
        )
    }
}

export default MyComponent
