import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import crt1 from "../../../assets/Certificados/Crtejemplo.webp";
import "./ModalCrt.css";

export default function ModalCrt({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-box">
        <div className="crt-container">
          <img className="crt-img" src={crt1} alt="certificado ejemplo" />
        </div>
      </Box>
    </Modal>
  );
}