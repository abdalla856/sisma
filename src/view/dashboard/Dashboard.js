import React from "react";

import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";

import PermanentDrawerLeft from "../../shared/Drawer/Drawer";
import MainContent from "./components/mainContent";
const drawerWidth = 255;

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <PermanentDrawerLeft />
      <MainContent />
    </Box>
  );
};
export default Dashboard;
