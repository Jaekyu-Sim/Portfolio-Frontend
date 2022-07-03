import React, {useState} from "react";
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

const FooterMobile = () => {

    const [mobileBrowserWidth, setMobilebrowserWidth] = useState("100%");
    const [mobileBrowserHeight, setMobilebrowserHeight] = useState("100%");
    return (
        <>
        <div style={{alignItem:"center", display:"flex", justifyContent:"right", position: "relative", bottom: 0, height: "100%", width : "100%", backgroundColor:"#DDDDDD", minHeight:"50px", padding:"10px"}}>

            <div style={{fontFamily:"ParkYongJun", fontSize:"5vw"}}>
                Design and Development by JAEKYU SIM
            </div>
        </div> 
        </>
    )
}

export default FooterMobile;