//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Main/>}></Route>
    </Routes>
  );
}

export default App;
