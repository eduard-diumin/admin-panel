import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Stack,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalEdit = ({
  open,
  handleClose,
  handleSave,
  selectedProduct,
  isEditMode,
}) => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
    description: ""
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData(selectedProduct);
    } else {
      setFormData({
        category: "",
        name: "",
        quantity: "",
        price: "",
        description: ""
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    handleSave(formData);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
          {isEditMode ? "Edit Product" : "Add Product"}
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          name="category"
          label="Category"
          type="text"
          fullWidth
          value={formData.category}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="quantity"
          label="Quantity"
          type="number"
          fullWidth
          value={formData.quantity}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="price"
          label="Price"
          type="number"
          fullWidth
          value={formData.price}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Description"
          name="description"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />
        <Stack direction="row" spacing={1} sx={{ textAlign: "right" }} mt={3} ml={10}>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="success" variant="contained">
            {isEditMode ? "Save" : "Add"}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
