import React from "react";
import {Row, Col} from "antd" ;
import '../App.css';

/*
position: fixed;
  top: 0;
  left: 0;
  height: 56px;
  width: 100%;
  background-color: skyblue;

*/

const Header = () => {
    return (
        <div style={{position: "fixed", top:"0", left:"0", height: "50px", width : "100%", backgroundColor:"coral"}}>
            Header
        </div>
    )
}

export default Header;