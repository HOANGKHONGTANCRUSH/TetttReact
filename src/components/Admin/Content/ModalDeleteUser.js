import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteUsers } from '../../../services/apiSevice';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;
    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async () => {
        let data = await DeleteUsers(dataDelete.id)
        console.log(">>>> check res", data)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose();
            await props.fetchListUsers()
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal
                backdrop="static"
                show={show}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the User ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this user? Email:
                    <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;
