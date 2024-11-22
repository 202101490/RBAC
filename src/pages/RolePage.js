// src/pages/RolePage.js
import React, { useEffect, useState } from "react";
import RoleList from "../components/RoleManagement/RoleList";
import AddEditRole from "../components/RoleManagement/AddEditRole";
import { getRoles, createRole, updateRole, deleteRole } from "../services/api";

const RolePage = () => {
  const [roles, setRoles] = useState([]);
  const [editingRole, setEditingRole] = useState(null);

  useEffect(() => {
    getRoles().then(setRoles);
  }, []);

  const handleSave = role => {
    if (role.id) {
      updateRole(role).then(setRoles);
    } else {
      createRole(role).then(setRoles);
    }
    setEditingRole(null);
  };

  const handleDelete = id => {
    deleteRole(id).then(setRoles);
  };

  return (
    <div>
      <h1>Role Management</h1>
      <RoleList roles={roles} onEdit={setEditingRole} onDelete={handleDelete} />
      <AddEditRole role={editingRole} onSave={handleSave} />
    </div>
  );
};

export default RolePage;
