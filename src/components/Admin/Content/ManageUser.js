import { useState } from 'react';
import './ManageUser.scss'
import ModalCreateUser from './ModalCreateUser';
import { FcPlus } from "react-icons/fc";



const ManageUser = (props) => {

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

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
          table user
        </div>
        <ModalCreateUser show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  )
}

export default ManageUser

