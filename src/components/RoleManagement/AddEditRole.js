// src/components/RoleManagement/AddEditRole.js
import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Box } from "@mui/material";

const AddEditRole = ({ onSave, role }) => {
  const [formData, setFormData] = useState(
    role || { name: "", permissions: [] }
  );

  const allPermissions = ["Read", "Write", "Delete"];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePermissionChange = permission => {
    const updatedPermissions = formData.permissions.includes(permission)
      ? formData.permissions.filter(p => p !== permission)
      : [...formData.permissions, permission];

    setFormData({ ...formData, permissions: updatedPermissions });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Role Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box marginY={2}>
        {allPermissions.map(permission => (
          <FormControlLabel
            key={permission}
            control={
              <Checkbox
                checked={formData.permissions.includes(permission)}
                onChange={() => handlePermissionChange(permission)}
              />
            }
            label={permission}
          />
        ))}
      </Box>
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default AddEditRole;
