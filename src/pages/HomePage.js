// src/pages/HomePage.js
import React from "react";
import { Typography, Box } from "@mui/material";

const HomePage = () => (
  <Box textAlign="center" marginTop={5}>
    <Typography variant="h3" gutterBottom>
      Welcome to the Admin Dashboard
    </Typography>
    <Typography variant="h5">
      Manage users, roles, and permissions with ease.
    </Typography>
    <Typography variant="body1" marginTop={2}>
      Use the navigation bar above to get started.
    </Typography>
  </Box>
);

export default HomePage;
