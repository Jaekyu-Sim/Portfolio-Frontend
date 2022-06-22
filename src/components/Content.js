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


  position : relative;
  transform : translateY(-100%);
*/

const Content = () => {
    return (
        <div style={{position: "relative",  height: "100%", width : "100%", backgroundColor:"white", minHeight:"50px", flex:"1"}}>
            Content
        </div>
    )
}

export default Content;