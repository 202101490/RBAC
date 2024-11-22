// src/services/api.js

// Mock APIs for User Management
export const getUsers = async () => {
    // Simulating a list of users
    return [
      { id: 1, name: "Alice", status: "Active" },
      { id: 2, name: "Bob", status: "Inactive" },
    ];
  };
  
  export const createUser = async user => {
    console.log("User Created:", user);
    return { success: true }; // Simulate a success response
  };
  
  export const updateUser = async user => {
    console.log("User Updated:", user);
    return { success: true }; // Simulate a success response
  };
  
  export const deleteUser = async userId => {
    console.log("User Deleted:", userId);
    return { success: true }; // Simulate a success response
  };
  
  // Mock APIs for Role Management
  export const getRoles = async () => {
    // Simulating a list of roles
    return [
      { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
      { id: 2, name: "User", permissions: ["Read"] },
    ];
  };
  
  export const createRole = async role => {
    console.log("Role Created:", role);
    return { success: true }; // Simulate a success response
  };
  
  export const updateRole = async role => {
    console.log("Role Updated:", role);
    return { success: true }; // Simulate a success response
  };
  
  export const deleteRole = async roleId => {
    console.log("Role Deleted:", roleId);
    return { success: true }; // Simulate a success response
  };
  