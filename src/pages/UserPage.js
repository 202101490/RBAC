// src/pages/UserPage.js
import React, { useEffect, useState } from "react";
import UserList from "../components/UserManagement/UserList";
import AddEditUser from "../components/UserManagement/AddEditUser";
import { getUsers, createUser, updateUser, deleteUser } from "../services/api";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleSave = user => {
    if (user.id) {
      updateUser(user).then(setUsers);
    } else {
      createUser(user).then(setUsers);
    }
    setEditingUser(null);
  };

  const handleDelete = id => {
    deleteUser(id).then(setUsers);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDelete}
        onToggleStatus={id => {
          const user = users.find(u => u.id === id);
          handleSave({ ...user, status: user.status === "Active" ? "Inactive" : "Active" });
        }}
      />
      <AddEditUser
        user={editingUser}
        roles={["Admin", "Editor"]}
        onSave={handleSave}
      />
    </div>
  );
};

export default UserPage;
