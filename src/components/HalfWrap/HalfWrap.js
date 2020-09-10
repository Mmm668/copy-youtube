import React from 'react';
import styled from "styled-components";

const HalfWrap = (props) => {

    const {
        children
    } = props;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default HalfWrap;