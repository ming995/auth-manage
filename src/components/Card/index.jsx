import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px #f0f0f0 solid;
  padding: 10px;
  margin-top: 10px;
  width: 50%;
  position: relative;
  .img-box {
  }
  .desc-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    /* position: relative;
    left: 30%; */
    .title {
      font-size: 28px;
      font-weight: 500;
    }
    .desc {
      font-size: 16px;
      color: #666666;
    }
  }
`;

export default function Card(props) {
  const { name, desc, src } = props;
  return (
    <CardWrapper>
      <div className="img-box">
        <img src={src} />
      </div>
      <div className="desc-box">
        <span className="title">姓名：{name}</span>
        <span className="desc">出自动漫：{desc}</span>
      </div>
    </CardWrapper>
  );
}
