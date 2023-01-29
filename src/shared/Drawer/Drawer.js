import * as React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import GridViewIcon from '@mui/icons-material/GridView';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import SummarizeIcon from '@mui/icons-material/Summarize';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {Link} from 'react-router-dom'
import user from './user.jpg'

import './Drawer.css'


const drawerWidth = 255;

export default function PermanentDrawerLeft() {

 

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <div className="header">SMART INTEGRATED SYSTEM MANAGEMENT FOR HOSPITAL</div>
        <div className="cont">
          <img src={user} alt=""/>
          <div>Rashdan</div>
        </div>
        <Divider />
        <List>
          
            <ListItem button key="dashboard" className="list_item">
              <ListItemIcon>
               <GridViewIcon /> 
              </ListItemIcon>
              <Link to='/'>
              <ListItemText primary="Dashboard" className="list_text"/>
              </Link>

            </ListItem>
            <ListItem button key="Acquistion">
              <ListItemIcon>
               <DataSaverOffIcon /> 
              </ListItemIcon>
              <ListItemText primary="Asset Acquistion" />
            </ListItem>
            <ListItem button key="Ulitization">
              <ListItemIcon>
               <EngineeringIcon /> 
              </ListItemIcon>
              <ListItemText primary="Asset Ulitization" />
              
            </ListItem>
            <ListItem button key="Maintenance">
              <ListItemIcon>
               <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Asset Maintenance" />
            </ListItem>
            <ListItem button key="Dispossal">
              <ListItemIcon>
               <RemoveFromQueueIcon /> 
              </ListItemIcon>
              <ListItemText primary="Asset Dispossal" />
            </ListItem>
         
        </List>
        <Divider />
        <List className="boottom_list">
  
            <ListItem button key="Report">
              <ListItemIcon>
              <SummarizeIcon />
              </ListItemIcon>
              <ListItemText primary= "Report"/>
            </ListItem>
            <ListItem button key="Schedule">
              <ListItemIcon>
              <EventNoteIcon />
              </ListItemIcon>
              <ListItemText primary= "Schedule"/>
            </ListItem>
            <ListItem button key="Download">
              <ListItemIcon>
              <FileDownloadIcon />
              </ListItemIcon>
              <ListItemText primary= "Download"/>
            </ListItem>
     
        </List>
      </Drawer>


    </Box>
  );
}
