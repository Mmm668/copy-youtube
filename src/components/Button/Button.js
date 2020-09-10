import React from 'react';
import styled, {css} from "styled-components";

const Button = (props) => {
    const {
        icon,
        color,
        children,
        onClick,
        filled,
        fullWidth,
        opacity,
        fontSize,
        ..._
    } = props;

    return (
        <Wrapper color={color} opacity={opacity} filled={filled} fullWidth={fullWidth} onClick={onClick} {..._}>
            {icon}
            <Text filled={filled} fontSize={fontSize}>
                {children}
            </Text>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  opacity: 0.7;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 11px;
  border-radius: 3px;
  border:1px solid #909090;
  background:#fff;
  transition: 0.2s ease-in-out;
  cursor:pointer;
  &:hover{
    opacity: 1;
  }
  ${props => props.color === 'gray' && css`
    background: #fff;
    color:#767676;
  `}
  ${props => props.filled && css`
    border-color: ${props.filled};
    background: ${props.filled};
  `}
 ${props => props.opacity && css`
    opacity: ${props.opacity};
 `}
 ${props => props.fullWidth && css`
   //display: flex;
   width: 100%;
`}
`;

export const Text = styled.div`
  margin-left: 4px;
  font-size: 0.9rem;
  font-weight: 400;
  color:#111;
  ${props => props.filled && css`
    font-weight: 400;
    color:#fff;
  `}
   ${props => props.fontSize && css`
    opacity: ${props.fontSize};
 `}
`;

export default Button;