import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import Cmodal from "./Cmodal";

export default function ModalCrt({ children }) {
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
        <Box
          sx={{
            borderRadius: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "calc(100% - 4px)", sm: "700px" },
            height: { xs: "280px", sm: "550px" },
            backgroundColor: "rgba(128, 128, 128, 0.75)",
            border: "2px solid goldenrod",
            boxShadow: "24px 24px 48px rgba(0, 0, 0, 0.2)",
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            className="crt-container"
            style={{ width: "100%", height: "100%" }}
          >
            <Cmodal />
          </div>
        </Box>
      </Modal>
    </>
  );
}
