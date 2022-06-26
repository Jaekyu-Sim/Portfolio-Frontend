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
        <div style={{position: "relative", bottom: 0, height: "100px", width : "100%", backgroundColor:"#DDDDDD", minHeight:"50px", padding:"10px"}}>

            <Row style={{flexDirection:"row", width:"100%", display:"flex", height:"100%", alignContent:"center"}} gutter={16}>

                <Typography.Title level={1} style={{width:"10%", alignItems:"center", alignContent:"center"}}>
                    About
                </Typography.Title>

                    <Typography.Title level={3} style={{width:"10%", alignItems: "center", justifyContent: "center"}}>
                        Blog : 
                    </Typography.Title>

                    <Typography.Title level={3} style={{width:"5%", alignItems: 'center', justifyContent: 'center'}}>
                        <a href="https://blog.naver.com/worb1605"target='_blank'>
                            <img style={{width:"30px", height:"30px"}} alt="blog" src = {blogIcon}/>
                        </a>
                    </Typography.Title>    


                    <Typography.Title level={3} style={{width:"5%", alignItems: 'center', justifyContent: 'center'}}>
                        Github : 
                    </Typography.Title>
                    <Typography.Title level={3} style={{width:"5%", alignItems: 'center', justifyContent: 'center'}}>
                        <a href="https://github.com/JAEKYU-SIM"target='_blank'>
                            <img style={{width:"30px", height:"30px"}} alt="github" src = {githubIcon}/>
                        </a>
                    </Typography.Title>   

            </Row>
            </div>
            <div style={{position: "relative", bottom: 0, height: "100px", width : "100%", backgroundColor:"#EEEEEE", minHeight:"50px", padding:"10px"}}>
            <Row style={{flexDirection:"row", height:"100%", width:"100%", display:"flex", alignItems:"center"}} gutter={16}>
                <Typography.Title level={1} style={{width:"10%", alignItems:"center", alignContent:"center"}}>
                    Contact
                </Typography.Title>
                <Typography.Title level={2} style={{width:"30%", alignItems:"center"}}>
                    worb1605@naver.com
                </Typography.Title>
            </Row>
        </div> 
        </>
    )
}

export default Footer;