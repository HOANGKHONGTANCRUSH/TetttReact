

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


    render() {
        return (
            <div>
                <AddUserinfors
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisPlayInfor
                    listUsers={this.state.listUsers}
                />

            </div>
        )
    }
}

export default MyComponent
