import React from "react";
import {Row, Col} from "antd" ;
import '../App.css';
import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

/*
    Header Component
*/

const Header = () => {
    return (
        <div style={{ height: "80px", width : "100%", backgroundColor:"#DDDDDD", alignItems:"center", display: 'flex', justifyContent:"center"}}>
            <Typography>
                <Title underline level={1}>
                    JAEKYU SIM's portfolio
                </Title>
            </Typography>
        </div>
    )
}

export default Header;