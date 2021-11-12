import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from 'styled-components';

import About from './package/About';
import DongMan from './package/DongMan';
import Content from './package/Content';

const ContainerWrapper = styled.div`
    display: flex;
   align-items: center;
   padding: 14px;
  
   .logo {
       width: 120px;
       height: 120px;
       border-radius: 50%;
       background-color: #f8f8f8;
   }
   .title {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 500;
    color: #f8f8f8;
   }
`;


export default function WrapperContainer() {
    return (
        <>
            <ContainerWrapper>
                <img
                    className='logo'
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    height="500"
                    src="https://yanminghou.pek3b.qingstor.com/photo/undraw_Programmer_re_owql.png"
                    width="112"
                />
                <Link to="/about">
                    <span className='title'>About me</span>
                </Link>
                <Link to="/dongman">
                    <span className='title'>动漫</span>
                </Link>

            </ContainerWrapper>
            <Switch>
                <Route exact path="/">
                    <Content />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/dongman">
                    <DongMan />
                </Route>
            </Switch>
        </>
    );
}