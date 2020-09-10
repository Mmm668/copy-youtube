import React from 'react';
import styled from "styled-components";

const RightWrap = (props) => {

    const {
        style,
        children
    } = props;

    return (
        <Wrapper style={style}>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export default RightWrap;