import React, { useState } from "react";
import './Displayinfro.scss'
import logo from './../logo.svg'

// class DisPlayInfor extends React.Component {
//     //babel compiler

//     render() {
//         const { listUsers } = this.props;
//         console.log('>>> call ne render')
//         //props => viet tat properties
//         // template + logic js
//         return (
//             <div className="display-infro-container">
//                 {listUsers.map((user, index) => {
//                     return (
//                         <>
//                             {true &&
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>My name is {user.name} </div>
//                                     <div>My age is {user.age} </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr></hr>
//                                 </div>
//                             }
//                         </>
//                     )



//                     {/* if (+user.age > 18) {
//                         return (
//                             <div key={user.id} className="green">

//                                 <div>My name is {user.name} </div>
//                                 <div>My age is {user.age} </div>
//                                 <hr></hr>
//                             </div>
//                         )

//                     } else {
//                         return (
//                             <div key={user.id} className="red">

//                                 <div>My name is {user.name} </div>
//                                 <div>My age is {user.age} </div>
//                                 <hr></hr>
//                             </div>
//                         )
//                     } */}
//                 })}
//                 {/* <div>My name is {name}</div>
//                 <div>My age is {age}</div>
//                 <hr></hr>
//                 <div>My name is {name}</div>
//                 <div>My age is {age}</div>
//                 <hr></hr>
//                 <div>My name is {name}</div>
//                 <div>My age is {age}</div> */}
//             </div>
//         )
//     }
// }

const DisPlayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideisUser, setShowHideListUser] = useState(true);
    const hanldShowHideisUser = () => {
        setShowHideListUser(!isShowHideisUser);
    }
    return (
        <div className="display-infro-container">
            <div>
                <span onClick={() => hanldShowHideisUser()}>
                    {isShowHideisUser === true ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {listUsers.map((user, index) => {
                return (
                    <>
                        {isShowHideisUser &&
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name is {user.name} </div>
                                <div>My age is {user.age} </div>
                                <div>
                                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr></hr>
                            </div>
                        }
                    </>
                )



                {/* if (+user.age > 18) {
                        return (
                            <div key={user.id} className="green">

                                <div>My name is {user.name} </div>
                                <div>My age is {user.age} </div>
                                <hr></hr>
                            </div>
                        )

                    } else {
                        return (
                            <div key={user.id} className="red">

                                <div>My name is {user.name} </div>
                                <div>My age is {user.age} </div>
                                <hr></hr>
                            </div>
                        )
                    } */}
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

export default DisPlayInfor