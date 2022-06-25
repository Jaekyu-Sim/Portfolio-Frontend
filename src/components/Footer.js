import React from "react";
import {Row, Col, Typography} from "antd" ;
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
        <div style={{position: "relative", bottom: 0, height: "70px", width : "100%", backgroundColor:"#DDDDDD", minHeight:"50px", padding:"10px"}}>

            <Row style={{flexDirection:"row", width:"100%", display:"flex"}} gutter={16}>

                    <Typography.Title level={1} style={{width:"10%"}}>
                        About
                    </Typography.Title>

                    <Typography.Title level={3} style={{width:"3%", padding: "8px 0"}}>
                        Blog : 
                    </Typography.Title>

                    <Typography.Title level={3} style={{width:"5%", padding: "8px 0"}}>
                        <a href="https://blog.naver.com/worb1605"target='_blank'>
                            <img style={{width:"30px", height:"30px"}} alt="blog" src = {blogIcon}/>
                        </a>
                    </Typography.Title>    


                    <Typography.Title level={3} style={{width:"5%", padding: "8px 0"}}>
                        Github : 
                    </Typography.Title>
                    <Typography.Title level={3} style={{width:"5%", padding: "8px 0"}}>
                        <a href="https://github.com/JAEKYU-SIM"target='_blank'>
                            <img style={{width:"30px", height:"30px"}} alt="github" src = {githubIcon}/>
                        </a>
                    </Typography.Title>   

            </Row>
            <Row style={{flexDirection:"row", width:"100%", display:"flex"}}>
                <Typography.Title level={1} style={{width:"10%"}}>
                    Contact
                </Typography.Title>
                <Typography.Title level={1} style={{width:"10%"}}>
                    worb1605@naver.com
                </Typography.Title>
            </Row>
        </div> 
    )
}

export default Footer;