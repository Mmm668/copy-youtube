import React from 'react';
import styled, {css} from "styled-components";
import Button from "./index";

const ButtonWrap = (props) => {
    const {
        style,
        gutter,
        align,
        children,
        className
    } = props;

    return (
        <Wrapper gutter={gutter} style={style} align={align}  className={className}>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  ${props => props.align && css`
    justify-content: ${props.align};  
  `}
  ${props => props.gutter && css`
    > * {
          margin-left: ${props.gutter}px;
          &:nth-child(1) {
            margin-left: 0;
          }
      }
  `}
`;

export default ButtonWrap;