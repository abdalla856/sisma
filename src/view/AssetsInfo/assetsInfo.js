import * as React from "react";
import "./assetsInfo.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import PermanentDrawerLeft from "../../shared/Drawer/Drawer";
import UpperPanel from "./Components/imageAssetnInfo";
import qr from "../../assets/qr.jpg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const drawerWidth = 255;

const Assets = () => {

const [value, onChange] = React.useState(new Date());

  return (
    <Grid container spacing={5}>
      <Grid xs={10}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
            }}
          ></AppBar>
          <PermanentDrawerLeft />
          <UpperPanel />
        </Box>
      </Grid>
      <Grid className="qrCon" xs={2}>
        <Box >

        <div className="calender">
          <Calendar onChange={onChange} value={value} />
        </div>
        </Box>
        <img className="qr" src={qr} alt="" />
      </Grid>
    </Grid>
  );
};

export default Assets;
