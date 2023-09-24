import { Modal } from "react-bootstrap";

const CustomModal = ({ showModal, handleClose, children }) => {
  return (
    <Modal show={showModal} size="lg" keyboard={true}>
      <Modal.Body>
        <div className="row justify-content-end">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
