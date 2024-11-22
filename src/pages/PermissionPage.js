// src/pages/PermissionPage.js
import React, { useEffect, useState } from "react";
import { getRoles, createRole } from "../services/api";
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Checkbox, TextField } from "@mui/material";

const permissionsList = ["Read", "Write", "Delete"]; // Standard permissions

const PermissionPage = () => {
  const [roles, setRoles] = useState([]);
  const [newRoleName, setNewRoleName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    getRoles().then(setRoles);
  }, []);

  const handlePermissionChange = (roleId, permission) => {
    setRoles(roles.map(role => {
      if (role.id === roleId) {
        const updatedPermissions = role.permissions.includes(permission)
          ? role.permissions.filter(p => p !== permission)
          : [...role.permissions, permission];
        return { ...role, permissions: updatedPermissions };
      }
      return role;
    }));
  };

  const handleSaveNewRole = () => {
    if (newRoleName.trim()) {
      createRole({ name: newRoleName, permissions: selectedPermissions }).then(setRoles);
      setNewRoleName("");
      setSelectedPermissions([]);
    }
  };

  return (
    <div>
      <h1>Permission Management</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            {permissionsList.map(permission => (
              <TableCell key={permission}>{permission}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map(role => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              {permissionsList.map(permission => (
                <TableCell key={permission}>
                  <Checkbox
                    checked={role.permissions.includes(permission)}
                    onChange={() => handlePermissionChange(role.id, permission)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2>Add New Role</h2>
      <TextField
        label="Role Name"
        value={newRoleName}
        onChange={e => setNewRoleName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <div>
        {permissionsList.map(permission => (
          <label key={permission}>
            <Checkbox
              checked={selectedPermissions.includes(permission)}
              onChange={() => {
                setSelectedPermissions(selectedPermissions.includes(permission)
                  ? selectedPermissions.filter(p => p !== permission)
                  : [...selectedPermissions, permission]);
              }}
            />
            {permission}
          </label>
        ))}
      </div>
      <Button variant="contained" color="primary" onClick={handleSaveNewRole}>
        Save Role
      </Button>
    </div>
  );
};

export default PermissionPage;
