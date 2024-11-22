import React, { useState, useEffect } from "react";
import { getRoles } from "../../services/api";

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await getRoles();
        setRoles(data || []); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching roles:", error);
        setRoles([]); // Fallback to empty array
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  if (loading) return <p>Loading roles...</p>;

  return (
    <div>
      <h2>Role List</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - Permissions: {role.permissions.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;
