import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import "./ModalDisciplina.css";

export default function ModalInfo({ title, content }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <p onClick={handleOpen} className="more-info">
        más información ...
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {content}
          </Typography>
          {/* <button onClick={handleClose} className="modal-close-button">
            Cerrar
          </button> */}
        </Box>
      </Modal>
    </>
  );
}
