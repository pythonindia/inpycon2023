import Modal from "react-bootstrap/Modal";

const CustomModal = ({ showModal, handleClose, children }) => {
  return (
    <Modal show={showModal} onHide={handleClose} size="lg" keyboard={true}>
      <Modal.Header closeButton={true}>
        <Modal.Title>About Speaker</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
