import React from "react";
import {Layout, Row, Col} from "antd" ;
import HeaderMobile from "../components/HeaderMobile";
import FooterMobile from "../components/FooterMobile";
import ContentMobile from "../components/ContentMobile";

import "./MainMobile.css"

//import {Header} from "../components/Header";

//import {Header} from "../components/Header";
import '../App.css';
/*
height: 100%;
        display: flex;
        flex-flow: column;
        margin: 0;
        background-color: #999;
        text-align: center;

*/

const MainMobile = () => {
    return (
        <div style={{display:"flex", flexFlow:"column"}}>
            <HeaderMobile></HeaderMobile>
            <ContentMobile></ContentMobile>
            <FooterMobile></FooterMobile>
        </div>
    )
}

export default MainMobile;