import React from 'react';
import styled, {keyframes} from "styled-components";
import {AiOutlineLoading} from "react-icons/all";

const Loading = ({style}) => {

    return (
        <Wrapper style={style}>
            <Icon size={30} color={"#d0d0d0"}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled(AiOutlineLoading)`
  animation: ${rotate} 2s linear infinite;
`;

export default Loading;