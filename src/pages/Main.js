import React from "react";
import {Layout, Row, Col} from "antd" ;
import '../App.css';

const {Header, Footer, Sider, Content} = Layout;

const Main = () => {
    return (
        <div>
            <Header></Header>
            Content
            <Footer></Footer>
        </div>
    )
}

export default Main;