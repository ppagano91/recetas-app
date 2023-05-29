import React from "react";
import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
  const { modal, handleModalClick } = useBebidas();

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Modal.Body>Body</Modal.Body>
    </Modal>
  );
};

export default ModalBebida;
