import React, {useState} from "react";
import {Row, Col, Divider, Typography, Tag} from "antd" ;
import Carousel from 'react-material-ui-carousel'
import { createFromIconfontCN } from '@ant-design/icons';
import '../App.css';
import developerImg1 from '../img/개발자1.png'
import developerImg2 from '../img/개발자2.png'
import developerImg3 from '../img/개발자3.png'
import developerImg4 from '../img/개발자4.png'
import developerImg5 from '../img/개발자심재규입니다.png'
import githubIcon from '../img/githubIcon.png';
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

import "../components/Content.css"

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

    //States
    const [cardLoading, setCardLoading] = useState(false);



    return (
        <>
        <div style={{position: "relative",  height: "100%", width : "100%", minHeight:"50px", flex:"1"}}>
            <div style={{alignItems:"center", justifyContent:"center"}}>
                <Carousel autoplay >
                    <div className="CarouselStyle">
                        <img style={{height:"500px"}} alt="TopImg1" src={CarouselImg1}></img>
                    </div>
                    <div className="CarouselStyle">
                        <img style={{height:"500px"}} alt="TopImg3" src={CarouselImg2}></img>
                    </div>
                    {/* <div className="CarouselStyle">
                        <img style={{height:"500px"}} alt="TopImg2" src={myPic2}></img>
                    </div> */}
                </Carousel>
            </div>
            {/* <Row>
                <Col span={14} style={{display:"flex", alignItems:"center", justifyContent:"center"}} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"right"}}>
                        { <img style={{width:"70%"}} alt="IsDevelperText" src = {title}></img>}
                    </div>
                </Col>
                <Col span={7} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <img style={{width:"70%"}} alt="developer2" src = {developerImg4}/>
                </Col>
                <Col span={3}></Col>
            </Row> */}
            <Row style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                <Divider>
                    SUMMARY
                </Divider>
                <Typography.Text style={{whiteSpace:"pre-wrap"}}>
                    안녕하세요, 개발자 심재규 입니다. 계속해서 새로 배우는것을 즐기고, 끊임없이 개발 능력의 한계를 찾고, 이를 극복하는 활동을 해오고 있습니다. <br/>
                    석사과정에서 AI 기반의 Pose Estimation을 연구하고, 현재는 Web 개발(React & Springboot) 업무를 수행하며 역량을 가다듬고 있습니다. <br/>
                    낯선분야에서의 시작을 두려워 하지 않고, 문제를 빠르게 정의하고 해결하는 개발자가 되도록 노력하고있습니다.
                </Typography.Text>
            </Row>

            <Row style={{alignItems:"center", display:"contents", justifyContent:"center"}}>
                <Divider>Tech Stack</Divider>
                <p style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                    <Tag color={"blue"}>React</Tag>
                    <Tag color={"yellow"}>Javascript</Tag>
                </p>
                <p style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                    <Tag color={"green"}>Springboot</Tag>
                    <Tag color={"cyan"}>Java</Tag>
                </p>
                <p style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                    <Tag color={"orange"}>Tensorflow</Tag>
                    <Tag color={"blue"}>Python</Tag>
                </p>
                <p style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                    <Tag color={"pink"}>AI</Tag>
                    <Tag color={"geekblue"}>Computer Vision</Tag>
                    <Tag color={"lime"}>Human Pose Estimation</Tag>
                </p>
                <p style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                    <Tag color={"magenta"}>SQL</Tag>
                    <Tag color={"volcano"}>Oracle</Tag>
                    <Tag color={"purple"}>MySQL</Tag>
                </p>
            </Row>
            
            
            <Divider>기술 스택 - Github</Divider>

            <Row style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                <img style={{height:"500px", alignItems:"center", justifyContent:"center", display:"flex"}} src={SubPageImg1}></img>
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
                <Col span={8}></Col>
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