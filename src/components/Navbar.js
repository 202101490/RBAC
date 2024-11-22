// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import './Navbar.css';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/users">Users</Button>
      <Button color="inherit" component={Link} to="/roles">Roles</Button>
      <Button color="inherit" component={Link} to="/permissions">Permissions</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
