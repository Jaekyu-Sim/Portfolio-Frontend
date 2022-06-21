import React from "react";
import {Layout} from "antd" ;
import '../App.css';

const {Header, Footer, Sider, Content} = Layout;

const Main = () => {
    return (
            <Layout className="layout">
                <Sider style={{width:"200px", background:"#ffff00"}}>
                    Sider
                </Sider> 
                <Layout>
                    <Header>Header</Header>
                    <Content style={{minHeight:"200px"}}>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>   
            </Layout>
    )
}

export default Main;