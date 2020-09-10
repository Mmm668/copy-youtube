import React from 'react';
import styled from "styled-components";
import {ImHeartBroken} from "react-icons/all";

const NoData = (props) => {

    return (
        <Wrapper>
            <ImHeartBroken size={50} color={'#c7c7c7'}/>
            <Text>데이터가 없습니다.</Text>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;  
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
`;
const Text = styled.div`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  color:#979797;
`;

export default NoData;