// src/components/UserManagement/AddEditUser.js
import React, { useState } from "react";
import { TextField, Button, Select, MenuItem } from "@mui/material";

const AddEditUser = ({ onSave, roles, user }) => {
  const [formData, setFormData] = useState(
    user || { name: "", role: "", status: "Active" }
  );    

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Select
        name="role"
        value={formData.role}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {roles.map(role => (
          <MenuItem value={role} key={role}>{role}</MenuItem>
        ))}
      </Select>
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default AddEditUser;
