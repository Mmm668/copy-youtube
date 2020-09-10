import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const ToastMessage = (props) => {

    const {toastMessage} = useSelector(state => state.app);

    return (
        <Wrapper>
            {toastMessage}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 40px;
  border-radius: 25%;
  background:#08c;
  font-size: 16px;
  font-weight: 500;
  color:#fff;
`;

export default ToastMessage;