import React from "react";
import styled from "styled-components";

import Card from "../../components/Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: auto;
  padding: 20px;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 36px;
    font-weight: 500;
  }
`;
export default function DongMan() {
  return (
    <Wrapper>
      <h1 className="title">TOP 榜</h1>
      <Card
        name="霞之丘诗羽"
        desc="路人女主养成方法"
        src="https://yanminghou.pek3b.qingstor.com/photo/xzq.jpeg"
      />
      <Card
        name="藤原千花"
        desc="辉夜大小姐想让我告白"
        src="https://yanminghou.pek3b.qingstor.com/photo/tyqh.png"
      />
      <Card
        name="加藤惠"
        desc="路人女主养成方法"
        src="https://www.bnacg.com/uploads/allimg/2106/7-2106091643400-L.png"
      />
    </Wrapper>
  );
}
