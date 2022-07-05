import React, {useState, useEffect} from "react";
import {Row, Col} from "antd" ;
import '../App.css';
import { Divider, Typography } from 'antd';
import zIndex from "@mui/material/styles/zIndex";

const { Title, Paragraph, Text, Link } = Typography;

/*
    Header Component
*/



const HeaderMobile = () => {

    let size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight 
      };

    

    //States
    const [cardLoading, setCardLoading] = useState(false);
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
    const [scrollPosition, setScrollPosition] = useState("0");

    //func
    const handleBrowserResize = () => {
        console.log("브라우저 크기 바뀜", window.innerHeight, window.innerWidth);
        setBrowserHeight(window.innerHeight);
        setBrowserWidth(window.innerWidth);
    }

    const handleBrowserScroll = () => {
        console.log("스크롤 변화 감지됨", window.scrollY);
        setScrollPosition(window.scrollY);
    }

    //useEffect


    useEffect(() => {
        window.addEventListener("resize", handleBrowserResize);
        return () => {
            window.removeEventListener("resize", handleBrowserResize);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleBrowserScroll);
        return () => {
            window.removeEventListener("scroll", handleBrowserScroll);
        }
    }, []);

    return (
        <div style={{width:browserWidth, height:browserHeight, background:"#91D1D3"}}>
                <div style={{fontFamily:"ParkYongJun", fontSize:"12vw", position: "relative", zIndex:"3", transform:`translateX(${scrollPosition}px)`, float:"left"}}>
                    안녕하세요 심재규 입니다
                </div>

                <div className="paper-header" >
                    <div class="paper-content">
                        <div style={{color:"#686561"}}>
                        <br></br>
                        <br></br>
                        <br></br>
                            오늘의 공부<br></br>
                            1. Programming Skill Up<br></br>
                            2. 업무 Logic 분석 및 개발
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HeaderMobile;