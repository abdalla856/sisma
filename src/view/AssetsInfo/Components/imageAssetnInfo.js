import * as React from "react";
import Box from "@mui/material//Box";
import CssBaseline from "@mui/material//CssBaseline";
import "./imageAssetnInfo.css";
import robot from "../../../assets/robot.jpg";
import TabsAsset from "./tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Card from "@mui/material//Card";
import Typography from "@mui/material//Typography";
import CardContent from "@mui/material//CardContent";
import Grid from "@mui/material//Grid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getById } from "../../../actions/device";
import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://sisma.online:4001";
const UpperPanel = () => {

    // let { id } = useParams();
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   try {
  //     const socket = socketIOClient(ENDPOINT);
  //     socket.on("customer", (data) => {
       
  //       // setResponse(data.status);
  //     });
  //     dispatch(getById(id));
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }, [dispatch]);
  
  // const data = useSelector((state) => state.apps);
  // var stat;
  // if (data.device !== undefined) {
  //   stat = data.device.status;
  // }

  return (

    <Grid container spacing={1}>
      <Grid xs={6}>
        <Box sx={{ ml: 4, mt: 4, mr: 0, width: 380, height: 400 }}>
          <CssBaseline />
          <h3>KM-221B</h3>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            className="swaiper"
          >
            <SwiperSlide>
              <img src={robot} style={{ display: "flex" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={robot} style={{ display: "flex" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={robot} style={{ display: "flex" }} />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Grid>
      <Grid xs={1}>
        <Box sx={{  mt: 13 ,mr:20}}>
          <Card sx={{ width: 280, height: 280 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontWeight: "bold" }}
                color="text.secondary"
              >
                Asset Profile :
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 10 }}
                component="div"
                style={{
                  borderBottom: "1px solid black",
                  marginBottom: "20px",
                  marginTop: "50px",
                }}
              >
                Asset Name : S65F4S6DF4
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                variant="body2"
                style={{
                  borderBottom: "1px solid black",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                PIC ID / Name : Zaki
              </Typography>
              {/* <Typography
                variant="body2"
                style={{
                  borderBottom: "1px solid black",
                  marginBottom: "5px !important",
                  marginTop: "20px",
                }}
              >
                Status : {stat === "on" ? "Available" : "Unavailable"}
                <br />
              </Typography> */}
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Box sx={{ ml: 5, width: 800 }}>
        <TabsAsset />
      </Box>
      
    </Grid>

  );
};

export default UpperPanel;
