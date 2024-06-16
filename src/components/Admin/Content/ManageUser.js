import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCreateUser from './ModalCreateUser';



const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">
        Manage User
      </div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          table user
          <ModalCreateUser />
        </div>
      </div>
    </div>
  )
}

export default ManageUser
