import React from 'react';
import styled from "styled-components";
import ButtonWrap from "../Button/ButtonWrap";
import Button from "../Button";

const Modal = (props) => {

    const {
        children,
        onCancel,
        onOk,
    } = props;
    
    return (
        <Wrapper>
            <WindowWrap>
                <ContentWrap>
                    {children}
                </ContentWrap>
                <ButtonWrap gutter={5}>
                    <Button onClick={onCancel}>취소</Button>
                    <Button filled={'#08c'} onClick={onOk}>확인</Button>
                </ButtonWrap>
            </WindowWrap>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgba(0,0,0,.4);
`;

const WindowWrap = styled.div`
  min-width: 400px;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0,0,0,.15);
  background:#fff;
`;

const ContentWrap = styled.div`
  padding: 10px 20px;
  line-height: 1.2;
  font-size: 14px;
  font-weight: 400;
  color:#111;
`;

export default Modal;