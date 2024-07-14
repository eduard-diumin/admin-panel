import React from "react";
import { Modal, Box, Typography, Button, Stack } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DeleteProductModal = ({
  open,
  handleClose,
  handleConfirm,
  description,
}) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-description"  mb={2}>{description}</Typography>
      <Stack direction="row" spacing={1} sx={{textAlign: 'right'}}>
        <Button onClick={handleClose} variant="contained" color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" color="error"autoFocus>
          Delete
        </Button>
      </Stack>
    </Box>
  </Modal>
);

export default DeleteProductModal;
