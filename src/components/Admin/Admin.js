import SideBar from "./SideBar"
import './Admin.scss';
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import { FcPlus } from "react-icons";

const Admin = (props) => {
    const [collapsed, setcollapsed] = useState(false)
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <div className="admin-header">

                    <FaBars onClick={() => setcollapsed(!collapsed)} />
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Admin