import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AppModal({ open, close, children }) {
  const handleClose = () => {
    close(false);
  };
  return (
    <div>
      <Modal isOpen={open} toggle={handleClose} fullscreen >
       {children}
      </Modal>
    </div>
  );
}

export default AppModal;
