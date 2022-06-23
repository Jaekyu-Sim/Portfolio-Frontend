import React from "react";
import {Row, Col, Typography} from "antd" ;
import '../App.css';
import blogIcon from '../img/블로그1.png'

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
        <div style={{position: "relative", bottom: 0, height: "70px", width : "100%", backgroundColor:"#DDDDDD", minHeight:"50px", flexDirection:"row", padding:"10px", display:"flex"}}>

            <Typography.Title level={1} style={{width:"10%"}}>
                Contact
            </Typography.Title>


            <Typography.Title level={3}>
                <a href="https://blog.naver.com/worb1605"target='_blank'>
                    <img style={{width:"30px", height:"30px"}} alt="blog" src = {blogIcon}/>
                </a>
            </Typography.Title>    


        </div>
    )
}

export default Footer;