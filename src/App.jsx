import React from "react";
import { Routes, Route } from "react-router";
import SigninPage from "./components/SigninPage";
import Home from "./components/Home";


function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;