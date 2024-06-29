import React, { useState } from "react";
import "./ModalCrt.css";
import { Modal, Box } from "@mui/material";

export default function ModalCrt({ children, imgCrt }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <p onClick={handleOpen}>{children}</p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="crt-modal-box">
          <div
            className="crt-container"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              className="crt-img"
              src={imgCrt}
              alt="certificados"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                margin: "5px 0",
              }}
            />
          </div>
        </Box>
      </Modal>
    </>
  );
}
