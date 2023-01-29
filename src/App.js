import React, { useState, useEffect } from "react";

import Dashboard from "./view/dashboard/Dashboard";
import Assets from './view/AssetsInfo/assetsInfo';
import Login from './view/Login/Login';
import "./App.css";
import { BrowserRouter , Route ,Routes} from "react-router-dom";
const ENDPOINT = "http://sisma.online:4001";

function App() {
  // const [response, setResponse] = useState("");
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("customer", (data) => {
  //     console.log(data.status)
  //     setResponse(data.status);
  //   });
  // });


  return (

    <BrowserRouter>
    <Routes>
     
    <Route path="/" element={<Login/>}/>
    <Route path="/main" element={<Dashboard/>}/>
    <Route path="/asset/:id" element={<Assets/>}/>
    <Route path="/asset" element={<Assets/>}/>
    </Routes>
  </BrowserRouter>
  );
};






export default App;
