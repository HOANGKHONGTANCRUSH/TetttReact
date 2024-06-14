import React, { useEffect, useState } from "react";
import './Displayinfro.scss'
import logo from './../logo.svg'

const DisPlayInfor = (props) => {
    const { listUsers } = props;
    //props => viet tat properties
    // template + logic js
    const [isShowHideListUser, setisShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setisShowHideListUser(!isShowHideListUser)
    }
    console.log(">>>>> call me render")

    // useEffect(
    //     () => {
    //         if (listUsers.length === 0) {
    //             alert("oooo")
    //         }
    //         console.log(">>>>> call me useEffect")
    //     }, [listUsers]
    // )

    return (
        <div className="display-infro-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>{isShowHideListUser === true ? "Hide list users" : "Show list users"}</span>
            </div>
            {isShowHideListUser &&
                <>
                    {
                        listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name is {user.name} </div>
                                        <div>My age is {user.age} </div>
                                    </div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr></hr>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}

export default DisPlayInfor