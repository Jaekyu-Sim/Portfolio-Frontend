import React from "react";
import {Row, Col, Typography} from "antd" ;
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

const Footer = () => {
    return (
        <div style={{position: "relative", bottom: 0, height: "200px", width : "100%", backgroundColor:"#DDDDDD", minHeight:"50px", flexDirection:"row", padding:"10px"}}>

                <Typography.Title level={1} style={{width:"30%"}}>
                    Contact
                </Typography.Title>


                <Typography.Title level={3} style={{width:"70%"}}>
                Test
                </Typography.Title>
                


        </div>
    )
}

export default Footer;