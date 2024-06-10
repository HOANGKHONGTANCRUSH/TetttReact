import React from "react";
import './Displayinfro.scss'
import logo from './../logo.svg'

class DisPlayInfor extends React.Component {

    state = {
        isShowisUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowisUser: !this.state.isShowisUser
        })
    }
    render() {
        const { listUsers } = this.props;
        //props => viet tat properties
        return (
            <div className="display-infro-container">
                <img src={logo} />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{this.state.isShowisUser === true ? "Show is user" : "Hide is user"}</span>
                </div>
                {listUsers.map((user, index) => {
                    console.log(">>>> check map user", user)

                    return (
                        <>
                            {this.state.isShowisUser &&
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name} </div>
                                    <div>My age is {user.age} </div>
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
}

export default DisPlayInfor