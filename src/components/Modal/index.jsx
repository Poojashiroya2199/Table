import Modal from "@mui/material/Modal";

const StyledModal = ({ children, open, handleClose }) => {
  <Modal open={open} onClose={handleClose}>
    {children}
  </Modal>;
};

export default StyledModal;
