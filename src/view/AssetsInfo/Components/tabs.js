import Graph from "./chart";
import map from "../../../assets/Hospital.jpg";
import "./tabs.css";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getById } from "../../../actions/device";

import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://sisma.online:4001";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
const [top , setTop] = React.useState("250px")
const [left , setLeft] = React.useState("450px")

  const [value, setValue] = React.useState(0);

  const [status, setStatus] = React.useState("");

  // React.useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("customer", (data) => {
  //     setStatus(data);
  //     // setResponse(data.status);
  //   });

  //   dispatch(getById(id));
  // }, [dispatch,  status]);

  // const data = useSelector((state) => state.apps);
  var stat;
  // if (data.device !== undefined) {
  //   stat = data.device.status;
  // }
//   React.useEffect(()=>{
//     console.log("hi")
    
//     if(data.device!==undefined){

//       if(0>=parseInt(data.device.rssi)&&parseInt(data.device.rssi)>=-35 ){
//       setLeft("200px")
//       setTop("240px")
//     }
//     else if(-36>=parseInt(data.device.rssi)&&parseInt(data.device.rssi)>=-53){
     

//       setLeft("650px")
//       setTop("240px")
//     }
//     else if(-54>=parseInt(data.device.rssi)){
//       setLeft("720px")
//       setTop("80px")
//     }

//   }
  
// },[data,status])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const handlePress = (event) => {
  // console.log("User pressed: ", event.key);
  if (event.key === "a") {
      setLeft("200px")
      setTop("240px")
  } else if (event.key === "d") {
      setLeft("650px")
      setTop("240px")
  } else if (event.key === "s") {
      setLeft("720px")
      setTop("80px")
  } else if (event.key === "n") {
    setStatus(!status);
  }
  // buttonRef.current.blur();

};
  return (
    <Box sx={{ width: "100%" }} onKeyDown={handlePress} tabIndex={0} >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Usage"
            {...a11yProps(0)}
            style={{
              borderRadius: "3px",
              backgroundColor: "#B6D5E5",
              marginRight: "15px",
            }}
          />
          <Tab
            label="Location"
            {...a11yProps(1)}
            style={{
              borderRadius: "3px",
              backgroundColor: "#B6D5E5",
              marginRight: "15px",
            }}
          />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
        <Graph />
      </TabPanel>
      <TabPanel value={value} index={1} style={{position :"relative"}}>
        <div
          className="tracker1"
          style={{ backgroundColor: status  ? "green" : "red" , left:left , bottom:top }}
        ></div>
        <img src={map} alt="" style={{ width: "800px" , height :"400px" }} />
      </TabPanel>
    </Box>
  );
}
