import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import "./ModalCrt.css";

export default function ModalCrt({ children, imgCrt }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <p onClick={handleOpen}> {children}</p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <div className="crt-container">
            <img className="crt-img" src={imgCrt} alt="certificado ejemplo" />
          </div>
        </Box>
      </Modal>
    </>
  );
}
