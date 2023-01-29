import React from "react";
import { Line } from "react-chartjs-2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getById } from "../../../actions/device";
import moment from "moment";
import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://sisma.online";
const Graph = () => {
  var time = ["1/12","1/1","1/2","3/1","4/1","5/1",];
  var dataline = [1,0,1,0,1,0,1,0,1,0];
  let { id } = useParams();
  const dispatch = useDispatch();
  const [status, setStatus] = React.useState();
  // React.useEffect(() => {
  //   try {
  //     const socket = socketIOClient(ENDPOINT);
  //     socket.on("customer", (data) => {
  //       setStatus(data);
  //     });
  //     dispatch(getById(id));
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }, [dispatch, status]);

  // const data = useSelector((state) => state.apps);
  // if (data.device !== undefined) {
  //   if (data.device.start.length === 0) {
  //     time.push(
  //       moment(data.device.end[0].time).subtract(1, "minutes").format("LT")
  //     );
  //     time.push(
  //       moment(data.device.end[0].time).subtract(2, "minutes").format("LT")
  //     );
  //     time.push(
  //       moment(data.device.end[0].time).subtract(3, "minutes").format("LT")
  //     );
  //     dataline.push(1);
  //     dataline.push(1);
  //     dataline.push(1);
  //   }
  //   if (data.device.end.length === 0) {
  //     time.push(
  //       moment(data.device.start[0].time).subtract(3, "minutes").format("LT")
  //     );
  //     time.push(
  //       moment(data.device.start[0].time).subtract(2, "minutes").format("LT")
  //     );
  //     time.push(
  //       moment(data.device.start[0].time).subtract(1, "minutes").format("LT")
  //     );

  //     dataline.push(0);
  //     dataline.push(0);
  //     dataline.push(0);
  //   }

  //   console.log(dataline);

  //   // data.device.start.map((obj) => {
  //   //   time.push( moment(obj.time).format("LT"))

  //   //   dataline.push(obj.status === "on" ? 1 : 0)

  //   // });
  //   // // console.lg(dataline)
  //   // if (data.device.end.length !== 0) {
  //   //   data.device.end.map((obj) => {
  //   //     time.push( moment(obj.time).format("LT"))

  //   //     dataline.push(obj.status === "on" ? 1 : 0)
  //   //   });

  //   // }

  //   const array = [];
  //   if (data.device.start.length !== 0) {
  //     data.device.start.map((obj) => {
  //       array.push({ date: obj });
  //     });
  //   }
  //   if (data.device.end.length !== 0) {
  //     data.device.end.map((obj) => {
  //       array.push({ date: obj });
  //     });
  //   }
  //   console.log(array);
  //   const sortedArray = array.sort(
  //     (a, b) =>
  //       new moment(a.date.time).format("X") -
  //       new moment(b.date.time).format("X")
  //   );
  //   console.log(sortedArray);
  //   if (sortedArray.length > 20) {
  //     const num = sortedArray.length - 20;
  //     console.log(num)
  //     console.log(sortedArray.length )
  // const arr= sortedArray.splice(0, num);
  //  console.log(sortedArray)
  //   }
  //   sortedArray.map((obj) => {
  //     time.push(moment(obj.date.time).format("LT"));

  //     dataline.push(obj.date.status === "on" ? 1 : 0);
  //   });


  // }
  const pdata = {
    labels: time,
    datasets: [
      {
        label: "# of logs",
        data: dataline,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div style={{ height: "400px", width: "600px" }}>
        <Line data={pdata} />
      </div>
    </>
  );
};

export default Graph;
