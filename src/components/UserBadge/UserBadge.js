import React from 'react';
import styled, {css} from "styled-components";
import Images from "../../assets/image";

const UserBadge = (props) => {
    const {
        src = Images.userIcon,
        name,
        sub,
        style,
        font,
        light,
    } = props;

    return (
        <Wrapper style={style} light={light}>
           <Thumb src={src}/>
            <Desc>
                <Name style={font}>{name}</Name>
                <Sub>{sub}</Sub>
            </Desc>
        </Wrapper>
    )
};

const Thumb = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  font-size: 0.9rem;
  color:#797979;
`;

const Sub = styled.div`
  line-height: 1;
  font-size: 0.7rem;
  color:#797979;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => props.light && css`
    ${Name} {
      color:#f3f3f3;
    }
    ${Sub} {
      color:#e6e6e6;  
    }
  `}
`;
export default UserBadge;