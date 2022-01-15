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
  
   .logo {
       width: 120px;
       height: 120px;
       border-radius: 50%;
       background-color: #f8f8f8;
   }
   .title {
    margin-left: 20px;
    font-size: 1em;
   }
`;


export default function WrapperContainer() {
    return (
        <>
            <ContainerWrapper>
               <span>Insomniac</span>
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