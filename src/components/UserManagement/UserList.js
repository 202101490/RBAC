// src/components/UserManagement/UserList.js
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";

const UserList = ({ users, onEdit, onDelete, onToggleStatus }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Role</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {users.map(user => (
        <TableRow key={user.id}>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell>{user.status}</TableCell>
          <TableCell>
            <Button onClick={() => onEdit(user)}>Edit</Button>
            <Button onClick={() => onDelete(user.id)}>Delete</Button>
            <Button onClick={() => onToggleStatus(user.id)}>
              {user.status === "Active" ? "Deactivate" : "Activate"}
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default UserList;
