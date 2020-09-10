import React from 'react';
import styled from "styled-components";

const PageTitle = (props) => {

    const { title, style } = props;

    return (
        <Wrapper style={style}>
            {title}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  margin-bottom: 10px;
  font-size: 46px;
  font-weight: 900;
  color:#111;
`;

export default PageTitle;