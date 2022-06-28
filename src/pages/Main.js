import React from "react";
import {Layout, Row, Col} from "antd" ;
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

import "./Main.css"

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

const Main = () => {
    return (
        <div style={{display:"flex", flexFlow:"column"}}>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default Main;