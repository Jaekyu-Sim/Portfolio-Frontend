import React from "react";
import {Row, Col, Typography, Skeleton} from "antd" ;
import '../App.css';
import blogIcon from '../img/블로그1.png'
import githubIcon from '../img/깃허브1.png'

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
        <>
        <div style={{alignItem:"center", display:"flex", justifyContent:"right", position: "relative", bottom: 0, height: "100px", width : "100%", backgroundColor:"#DDDDDD", minHeight:"50px", padding:"10px"}}>

            <div style={{fontFamily:"ParkYongJun", fontSize:"40px"}}>
                Design and Development by JAEKYU SIM
            </div>
        </div> 
        </>
    )
}

export default Footer;