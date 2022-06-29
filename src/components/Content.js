import React, {useEffect, useState} from "react";
import {Row, Col, Divider, Typography, Tag} from "antd" ;
import Carousel from 'react-material-ui-carousel'
import { createFromIconfontCN } from '@ant-design/icons';
import '../App.css';
import developerImg1 from '../img/개발자1.png'
import developerImg2 from '../img/개발자2.png'
import developerImg3 from '../img/개발자3.png'
import developerImg4 from '../img/개발자4.png'
import developerImg5 from '../img/개발자심재규입니다.png'
//import githubIcon from '../img/githubIcon.png';
import githubIcon from '../img/githubIcon.svg'
import title from '../img/Title.png';

import title2 from '../img/Title2.PNG';
import myPic from '../img/내사진2.jpg';
import myPic2 from '../img/우리사진.jpg';
import myPic3 from '../img/졸업작품.PNG';

import CarouselImg1 from '../img/TitlePage/001.jpg'
import CarouselImg2 from '../img/TitlePage/002.jpg'

import SubPageImg1 from '../img/SubPage/003.jpg'
import SubPageImg2 from '../img/SubPage/004.jpg'
import SubPageImg3 from '../img/SubPage/005.jpg'

import ButtonMui from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';

import githubResult1 from '../img/githubResult1.png'

import "../components/Content.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

//import Divider from '@mui/material/Divider';

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

    //Variables
    AOS.init();

    let size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight 
      };

    

    //States
    const [cardLoading, setCardLoading] = useState(false);
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const [browserHeight, setBrowserHeight] = useState(window.innerHeight);

    //func
    const handleBrowserResize = () => {
        console.log("브라우저 크기 바뀜", window.innerHeight, window.innerWidth);
        setBrowserHeight(window.innerHeight);
        setBrowserWidth(window.innerWidth);
    }

    //useEffect
    useEffect(()=>{
        console.log('가로 값이 바뀜', window.innerWidth)
      }, [window.innerWidth]);
    
    useEffect(()=>{
    console.log('세로 값이 바뀜', window.innerHeight)
    }, [window.innerHeight]);

    useEffect(() => {
        window.addEventListener("resize", handleBrowserResize);
        return () => {
            window.removeEventListener("resize", handleBrowserResize);
        }
    }, []);

    return (
        <>
        <div style={{background:"#91D1D3", position: "relative",  height: "100%", width:browserWidth, minHeight:"50px", flex:"1"}}>
            <div style={{paddingLeft:"5%", paddingBottom:"20px"}}>
                <div className="pape" style={{fontFamily:"ParkYongJun", fontSize:"30px"}}>

                    1. Introduction

                </div>
            </div>
            <div className="paper">
                <div class="paper-content">
                    <div style={{height:"fit-content"}}>
                        안녕하세요, 깊이있게 실력을 키우고자 하는 개발자 <span style={{color:"blue"}}>심재규</span> 입니다.<br></br>
                        낯선 분야로의 도전을 두려워 하지 않고, 꾸준히 역량향상을 하며 개발 영역을 서서히 넓히고 있습니다.<br></br><br></br>
                        <span style={{color:"blue", justifyContent:"center", alignItems:"center"}}>"현실에 안주하지 말자"</span><br></br><br></br>
                        제가 가장 추구하고있는 인생모토입니다. 이 말을 모토로 업무에 임하며, 타협없이 일하고 꾸준히 역량 향상을 추구해오고 있습니다.<br></br>
                        또한, 낯선분야에서의 시작을 두려워 하지 않고, 문제를 빠르게 정의하고 해결하는 개발자가 되도록 노력하고있습니다.<br></br><br></br>
                    </div>
                    <div style={{}}>
                        Contact
                        <ul>
                            <li>
                                Github : 
                                <a href="https://github.com/JAEKYU-SIM">
                                    {/* <img style={{width:"2%"}} src={githubIcon}></img>*/}
                                    https://github.com/JAEKYU-SIM
                                </a>
                            </li>
                        
                            <br></br>
                            <li>
                                Blog : 
                                <a href="https://blog.naver.com/worb1605">
                                    {/* <img style={{width:"2%"}} src={githubIcon}></img>*/}
                                    https://blog.naver.com/worb1605
                                </a>
                            </li>
                            <br></br>
                            <li>
                                Mail : worb1605@naver.com
                            </li>
                            {/* <img style={{width:"2%"}} src={githubIcon}></img>*/}
                        </ul>
                    </div>


                </div>
            </div>

            <div style={{paddingLeft:"5%", paddingBottom:"20px", paddingTop:"50px"}}>
                <div className="pape" style={{fontFamily:"ParkYongJun", fontSize:"30px"}}>

                    2. Tech Stack

                </div>
            </div>
            <div style={{fontFamily:"ParkYongJun", fontSize:"30px", alignItems:"center", justifyContent:"center", display:"flex"}} >
            Language : Javascript / Java / Oracle SQL / Python<br></br>
            Framework/Library : React / Vue / Springboot / Tensorflow<br></br>
            Domain : 반도체, AI, Computer Vision
            {/* <Chip label="React" color="primary"></Chip>
            <Chip label="Javascript" color="secondary"></Chip>
            <Chip label="Springboot" color="primary"></Chip>
            <Chip label="Java" color="primary"></Chip>
            <Chip label="Tensorflow" color="primary"></Chip>
            <Chip label="Python" color="primary"></Chip>
            <Chip label="AI" color="primary"></Chip>
            <Chip label="Compurter Vision" color="primary"></Chip>
            <Chip label="Pose Estimation" color="primary"></Chip> */}
            </div>
            <div style={{display:"flex"}}>
                <div data-aos="flip-right" style={{paddingLeft:"17.5%", paddingBottom:"20px", paddingTop:"55px", position:"absolute", zIndex:"2"}}>
                    <div className="papeTag" style={{fontFamily:"ParkYongJun", fontSize:"30px", alignItems:"center", justifyContent:"center", display:"flex", width:"100%"}}>

                        Frontend

                    </div>
                </div>
                <div  className="sticker" style={{zIndex:"1", left: "0%", transform: "translate(10%, 10%)"}} >
                    <div data-aos="flip-right" class="sticker-content">
                        <div data-aos="flip-right" style={{height:"fit-content"}}>
                            <br></br>React <br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    Redux, Saga 패턴을 적용한 상태관리 라이브러리를 사용한 경험이 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    Antd, Ag-grid, MUI 등의 라이브러리를 사용하여 시스템 개발을 한 경험이 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    실시간 가상 반도체장비 모니터링 시스템 UI 구축 경험이 있습니다.
                                </li>
                            </ul>
                            <br></br>CSS<br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    CSS 파일을 통하여 UI Component들의 Style 값을 관리할 수 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    CSS 문법에 익숙합니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>              
                <div  data-aos="flip-left" style={{paddingLeft:"60.5%", paddingBottom:"20px", paddingTop:"55px", position:"absolute", zIndex:"2"}}>
                    <div className="papeTag" style={{fontFamily:"ParkYongJun", fontSize:"30px", alignItems:"center", justifyContent:"center", display:"flex", width:"100%"}}>

                        Backend

                    </div>
                </div>
                <div  className="sticker" style={{zIndex:"1", left: "-7%", transform: "translate(10%, 10%)"}}>
                    <div data-aos="flip-left" class="sticker-content">
                        <div data-aos="flip-left" style={{height:"fit-content"}}>
                            <br></br>Springboot <br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    Springboot를 활용한 REST API 구축을 할 수 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    F/E 의 API 호출에 따른 내부 Core Logic을 구현할 수 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    Service/Implement 의 추상화 구조로 프로젝트를 구축한 경험이 있습니다.
                                </li>
                            </ul>
                            <br></br>SQL<br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    Oracle SQL 기반의 Table 설계, Query문 설계 업무를 수행한 경험이 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    index 를 설정하여 탐색 속도 향상을 구현할 수 있습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="flip-up" style={{display:"flex", paddingTop:"30px", justifyContent:"center", display:"flex"}}>
                <div style={{paddingBottom:"20px", paddingTop:"55px", paddingRight:"8%",position:"absolute", zIndex:"2"}}>
                    <div className="papeTag" style={{fontFamily:"ParkYongJun", fontSize:"30px",width:"100%"}}>

                        AI / Computer Vision

                    </div>
                </div>
                <div className="sticker" style={{zIndex:"1", left: "0%", transform: "translate(0%, 10%)"}}>
                    <div class="sticker-content">
                        <div style={{height:"fit-content"}}>
                            <br></br>AI / Computer Vision <br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    Object Detection, GAN, STN 등 다양한 Network를 학습하고 구현하였습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    Computer Vision 분야 중 Human Pose Estimation 분야에 대해 연구하고 개발한 경험이 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    고전 영상처리 알고리즘의 동작 원리에 대해 이해하고 구현한 경험이 있습니다.
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div> 
            </div>

            <div style={{paddingLeft:"5%", paddingBottom:"20px", paddingTop:"50px"}}>
                <div className="pape" style={{fontFamily:"ParkYongJun", fontSize:"30px"}}>

                    3. Projects

                </div>
            </div>
            <div className="frame">
                <img src={githubIcon}></img>
            </div>
            <div className="typing-demo" data-aos-easing="ease-in-out" style={{background:"white"}}>
                Spatial_Transform_Network
                
            </div>
            
            
            <Divider>기술 스택 - Github</Divider>

            <Row style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                <img style={{height:"500px", alignItems:"center", justifyContent:"center", display:"flex"}} src={SubPageImg1}></img>
            </Row>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                <Typography.Title style={{paddingLeft:"10px"}}>
                    Frontend - Study
                </Typography.Title>
                </Col>
                <Col span={4}></Col>
            </Row>
            <Row gutter={16}>
                <Col span={4}>
                </Col>
                <Col span={8}>
                    <img style={{width:"100%"}} src={githubResult1}></img>
                </Col>
                <Col span={8}>
                    <Typography.Title level={3}>
                        React기반 채팅 프로그램
                    </Typography.Title>    
                    <Typography.Paragraph>
                        <ul>
                            <li>
                                <Typography.Text >Socket 통신 기반의 React Chat 프로그램 제작</Typography.Text>
                            </li>
                            <li>
                                <Typography.Text >사용자 ID 설정 페이지에서 입력된 값을 Redux Store를 통하여 관리</Typography.Text>
                            </li>
                            <li>
                                <Typography.Text >Antd 라이브러리를 사용한 UI Component 적용</Typography.Text>
                            </li>
                            <li>
                                <Typography.Text >Router(v6)를 적용하여 Component 라우팅</Typography.Text>
                            </li>
                        </ul>
                    </Typography.Paragraph>
                </Col>
                <Col span={4}></Col>
                {/* <Col span={8}></Col>
                <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                React Chat Program
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            리액트 기반의 소켓 채팅프로그램
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/reactMessenger", '_blank')} >React Chat Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                React 포트폴리오 페이지
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            리액트 기반의 포트폴리오 페이지
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/Portfolio-Frontend", '_blank')} >Portfolio Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>
                <Col span={8}></Col> */}
            </Row>

            <br/>
            <br/>
            <br/>

            <Row style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                <img style={{height:"500px", alignItems:"center", justifyContent:"center", display:"flex"}} src={SubPageImg2}></img>
            </Row>

            <Row gutter={16}>
                <Col span={8}></Col>
                <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                MSA 구조 프로그래밍
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Springboot 기반의 MSA 구조 프로그램 구축 연습
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/order", '_blank')} >Order Explore</ButtonMui>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/delivery", '_blank')} >Delivery Explore</ButtonMui>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/view", '_blank')} >View Explore</ButtonMui>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/gateway", '_blank')} >Gateway Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                SpringSecurity JWT 구현
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                SpringSecurity를 이용한 Springboot 기반의 JWT Token 발급 구현 연습<br/><br/>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/JWT_Example", '_blank')} >JWT Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>
                <Col span={8}></Col>
            </Row>

            <br/>
            <br/>

            <Row style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                <img style={{height:"500px", alignItems:"center", justifyContent:"center", display:"flex"}} src={SubPageImg3}></img>
            </Row>

            <Row gutter={16}>
            <Col span={6}></Col>
                <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Super Resolution GUI Program
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                PyQT 를 이용하여 Super Resolution Network 구현 후 GUI 프로그램으로 구현
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/Super-Resolution_GUI", '_blank')} >SuperResolution Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                DCGAN Network 구현
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                DCGAN Paper 학습 후 Network 구현<br/><br/>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/DCGAN-Deep-Convolution-Generative-Adverserial-Networks-", '_blank')} >DCGAN Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>

                <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pose Estimation Network 구현
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Open Pose Paper 학습 후 Network 구현<br/><br/>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/Open_Pose_Original_Network", '_blank')} >OpenPose Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>

                <Col span={6}></Col>
            </Row>
            <Row gutter={16}>
                <Col span={6}></Col>
            <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                STN 구현
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Spatial Transform Network Paper 학습 후 Network 구현
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/Spatial_Transform_Network", '_blank')} >STN Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                STN Hand Detection 구현
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                STN을 이용한 Hand Detection 연구 및 Network 구현
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/STN_Hand_Detection", '_blank')} >STN Hand Detection Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            width="10%"
                            image={githubIcon}
                            alt="github"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                DeepLog 구현
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                DeepLog Paper 학습 후 Network 구현<br/><br/>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonMui size="small" onClick={() => window.open("https://github.com/Jaekyu-Sim/DeepLog", '_blank')} >DeepLog Explore</ButtonMui>
                        </CardActions>
                    </Card>
                </Col>
                <Col span={6}></Col>
            </Row>

            <Card title = "프로젝트">

            <p>
                사용자 모션 인식 로보메이션

                SK Hynix M16

                SK Hynix R3

                SK Hynix M15
            </p>
            </Card>

            
            


        </div>
        </>
    )
}

export default Content;