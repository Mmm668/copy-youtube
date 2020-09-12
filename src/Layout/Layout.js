import React from 'react';
import styled from "styled-components";

const Layout = (props) => {

    const {children} = props;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
 min-width: 480px;
 max-width: 1115px;
 margin: 0 auto;
`;

export default Layout;