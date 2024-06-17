import { useState, useEffect } from 'react';
import './ManageUser.scss'
import ModalCreateUser from './ModalCreateUser';
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import ModalUpdateUser from './ModalUpdateUser';
import { getAllUsers } from "../../../services/apiSevice";



const ManageUser = (props) => {

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
  const [dataUpdate, setDataUpdate] = useState({})


  const [listUsers, setlistUsers] = useState([])
  useEffect(() => {
    fetchListUsers();

  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setlistUsers(res.DT)
    }
  }


  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true)
    setDataUpdate(user)
    console.log('Ues :', user)
  }

  return (
    <div className="manage-user-container">
      <div className="title">
        Manage User
      </div>
      <div className="users-content">
        <div className='btn-add-new'>
          <button className='btn btn-primary' onClick={() => setShowModalCreateUser(true)}><FcPlus />Add new users</button>
        </div>
        <div className='table-users-container'>
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
        />
      </div>
    </div>
  )
}

export default ManageUser

