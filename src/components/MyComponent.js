

import React from "react"
import UserInfor from "./userinfor"
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
                age: '20',
            },
            {
                id: 3,
                name: "Ha",
                age: '90',
            }
        ]
    }


    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisPlayInfor
                    listUsers={this.state.listUsers}
                    users={this.state.listUsers}
                />

            </div>
        )
    }
}

export default MyComponent
