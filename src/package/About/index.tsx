import React from 'react';
import { Card, Media, Image, Heading, Content } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';

import './App.css';

function About() {
  return (
    <div className="App">
      <Card style={{ width: 500, margin: 'auto' }}>
        <Card.Image
          size="4by3"
          src="https://yanminghou.pek3b.qingstor.com/photo/WechatIMG30.jpeg"
        />
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" align="left">
              <Image
                size={64}
                alt="64x64"
                src="https://yanminghou.pek3b.qingstor.com/photo/WechatIMG30.jpeg"
              />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>yanmingHou</Heading>
              <Heading subtitle size={6}>
                @insomniac
              </Heading>
            </Media.Item>
          </Media>
          <Content>
            程序员/业余摄影师/2.5次元人类
            <a>@insomniac</a>.<a href="https://github.com/ming995">#github</a>{' '}
            <a href="https://500px.com.cn/yanminghou">#500px</a>
            <br />
          </Content>
        </Card.Content>
      </Card>
    </div>
  );
}

export default About;
