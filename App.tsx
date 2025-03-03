import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/reg" element ={<Registration/>} /> 
         <Route path="/" element ={<Login/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}