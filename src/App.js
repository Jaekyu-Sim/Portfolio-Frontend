//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import MainMobile from "./pages/MainMobile";
import React from "react";
import "antd/dist/antd.min.css"
import { BrowserView, MobileView } from 'react-device-detect';

function App() {
  return (
    <>
    <MobileView>
      <Routes>
        <Route path = "/" element = {<MainMobile/>}></Route>
      </Routes>
    </MobileView>
    <BrowserView>
      <Routes>
        <Route path = "/" element = {<Main/>}></Route>
      </Routes>
    </BrowserView>
    </>
  );
}

export default App;
