import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {getDevices} from '../../../actions/device'
import socketIOClient from "socket.io-client";
import TrendingUpIconOutlined from '@mui/icons-material/TrendingUpOutlined';
import {Link} from "react-router-dom"
import './Table.css'
import moment from 'moment'
function createData(tag, des, date, type, status,id) {
  return { tag, des, date, type, status,id};
}
// const ENDPOINT = "http://sisma.online:4001";


const TableAssets=({status =false})=>{
  // const [status  , setStatus] = React.useState(false)
  var color ="red"
  const rows = []
  const dispatch = useDispatch();
  
// React.useEffect(()=>{
//       const socket = socketIOClient(ENDPOINT);
//     socket.on("customer", (data) => {
//       setStatus(data.status)
//       // setResponse(data.status);
//     });
//   try {
//     dispatch(getDevices());

//   } catch (err) {
//     console.log(err.message);
//   }
// },[dispatch , status])
// var date
// const data = useSelector((state) => state.apps);
// console.log(data.devices)
// if(data.devices !== undefined) {
//   data.devices.map((device)=>{
    
//     rows.push(
//       createData(
//         device.device,
//         "UltraSound",
//         "BlE",
//     (    device.start.length!==0 ?
//         moment(device.start[0]).format('DD\tMMM\ty'):
//         moment(device.end[0]).format('DD\tMMM\ty')
//         ),
//      device.status, 
//      device._id
//       )
//     );
//   })
// }
// const handlePress = (event) => {
//  if (event.key === "n") {
//     setStatus(!status);
//   }
// };

return(
    <TableContainer component={Paper} >
    <Table sx={{width: 750,ml:2 ,mt:2}} aria-label="simple table">
      <TableHead className="table_head" >
        <TableRow >
          <TableCell>Tag NO.</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Type</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Trend</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {console.log(rows)}
        {rows.map((row) => ( */}
          <TableRow
            // key={1}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            
          >
            <TableCell component="th" scope="row">
              1023
            </TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">3</TableCell>
            <TableCell align="right">4</TableCell>
            <TableCell align="center" style={{display:"flex" ,justifyContent: "center" }}>
              
              <div className="status" 
                            style={{backgroundColor :(status?color ="green" : color ="red")
              ,borderRaduis :"50%"
            }}></div>
              
         
              </TableCell>
            <TableCell align="right" >
              <Link  className="trend" to={`/asset/1`}>
                <TrendingUpIconOutlined style={{backgroundColor:"#3699D0"}}/>
              </Link>
            </TableCell>
          </TableRow>
        {/* ))} */}
      </TableBody>
    </Table>
  </TableContainer>

);

}
export default TableAssets;