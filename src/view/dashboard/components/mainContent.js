import React  , {useRef}from "react";
import Box from "@mui/material/Box";

// import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import map from "../../../assets/Hospital.jpg";
import qr from "../../../assets/qr.jpg";
import SearchIcon from "@material-ui/icons/Search";
import Table from "./Table";
import { useDispatch } from "react-redux";
import { useSelector, shallowEqual } from "react-redux";
import { getDevices } from "../../../actions/device";
import "./mainContent.css";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://sisma.online:4001";
function createData(status) {
  return { status };
}

const MainContent = () => {
  const buttonRef = useRef(null)
  const [floor, setFloor] = React.useState("");
  const [status, setStatus] = React.useState(false);
  const handleChange = (event) => {
    setFloor(event.target.value);
  };
  const [top, setTop] = React.useState("250px");
  const [right, setRight] = React.useState("650px");

  var color = "red";
  const rows = [];
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("customer", (data) => {
  //     setStatus(data);
  //     // setResponse(data.status);
  //   });
  //   try {
  //     dispatch(getDevices());
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }, [dispatch, status]);

  // const data = useSelector((state) => state.apps, shallowEqual);
  // console.log(data.devices);

  // React.useEffect(() => {
  //   console.log("hi");

  //   if (data.devices !== undefined) {
  //     // console.log(parseInt(data.devices[0].rssi))
  //     if (
  //       0 >= parseInt(data.devices[0].rssi) &&
  //       parseInt(data.devices[0].rssi) >= -37
  //     ) {
  //       setRight("220px");
  //       setTop("200px");
  //     } else if (
  //       -40 >= parseInt(data.devices[0].rssi) &&
  //       parseInt(data.devices[0].rssi) >= -54
  //     ) {
  //       setRight("660px");
  //       setTop("200px");
  //     }  else if (-55 >= parseInt(data.devices[0].rssi)) {
  //       setRight("740px");
  //       setTop("50px");
  //     }
  //   }
  // }, [data, status]);

  // if (data.devices !== undefined) {
  //   data.devices.map((device) => {
  //     rows.push(createData(device.status));
  //   });
  // }
  const handlePress = (event) => {
    // console.log("User pressed: ", event.key);
    if (event.key === "a") {
      setRight("220px");
      setTop("200px");
    } else if (event.key === "d") {
      setRight("660px");
      setTop("200px");
    } else if (event.key === "s") {
      setRight("740px");
      setTop("50px");
    } else if (event.key === "n") {
      setStatus(!status);
    }
    // buttonRef.current.blur();

  };
  return (
    <Grid 
    className="focus"
    container spacing={5} onKeyDown={handlePress} tabIndex={0} ref={buttonRef}>
      <Grid xs={10}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            ml: 4,
            mt: 8,
          }}
        >
          <Box sx={{ minWidth: 270 }}>
            <div style={{ fontSize: "16px" }}>Floor Level</div>
            <FormControl sx={{ m: 1, minWidth: 270 }}>
              <InputLabel id="demo-simple-select-label">
                Select Floor Level
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={floor}
                label="Floor"
                onChange={handleChange}
              >
                <MenuItem value={1}>First</MenuItem>
                <MenuItem value={2}>Second</MenuItem>
                <MenuItem value={3}>Third</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: 100 }} style={{ position: "relative" }}>
            <img className="map" src={map} alt="" />
            {/* {rows.map((row) => ( */}
            <div
              className="tracker"
              style={{
                backgroundColor:
                  status ? (color = "green") : (color = "red"),
                // top:top,
                // right:right
                bottom: top,
                left: right,
              }}
            ></div>
          </Box>
          <Box sx={{ mt: 5, ml: 2, flexGrow: 1, width: 780 }}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <div style={{ marginTop: "24px", fontWeight: "bold" }}>
                  LIST OF ASSETS
                </div>
              </Grid>
              <Grid xs={6}>
                <Box style={{ float: "right" }}>
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                  />
                  <SearchIcon
                    style={{ marginTop: "26px", marginLeft: "5px" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Table status={status}/>
          </Box>
        </Box>
      </Grid>
      <Grid className="qrCon" xs={2}>
        <img className="qr" src={qr} alt="" />
      </Grid>
    </Grid>
  );
};

export default MainContent;
