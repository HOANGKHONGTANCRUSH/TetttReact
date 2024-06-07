

import React from "react"
import UserInfor from "./userinfor"
import DisPlayInfor from "./Disolayinfor"

class MyComponent extends React.Component {




    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisPlayInfor name="Hoang" age="28" />
                <hr></hr>
                <DisPlayInfor name="Hoa" age="20" />
            </div>
        )
    }
}

export default MyComponent
