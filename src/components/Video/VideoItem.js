import React from 'react';
import styled, {css} from "styled-components";
import {GrPlayFill} from "react-icons/all";

const VideoItem = ({item}) => {

    // size : md, lg

    return (
        <Wrapper size={'md'}>
           <Thumb>
               <Screen>
                   {/*<ListCount></ListCount>*/}
                   <PlayIcon>
                       <GrPlayFill size={40} color={'#fff'}/>
                   </PlayIcon>
                   <RunningTime>4:32:19</RunningTime>
               </Screen>
           </Thumb>
            <Desc>
                <Title>Chillhop Radio - jazzy & lofi hip hop beats 🐾jazzy & lofi hip hop beats 🐾</Title>
                <Sub>
                    <p>Chillihop Music</p>
                    <p>조회수 78만회 • 3주 전</p>
                </Sub>
            </Desc>
        </Wrapper>
    )
};


const Thumb = styled.div`
  position: relative;
  flex-shrink: 0;
`;
const Screen = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  font-weight: 700;
  color:#fff;
`;
const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-44%, -50%);
  opacity: 0.6;
`;
const RunningTime = styled.div`
  position: absolute;
  right: 4px;
  bottom: 4px;
  padding: 3px 6px 0;
  border-radius: 3px;
  background:rgba(0,0,0,.8);
`;
const Desc = styled.div`
  padding-left: 10px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const Title = styled.div`
  margin-bottom: 3px;
  line-height: 1;
  font-size: 16px;
  font-weight: 500;
`;
const Sub = styled.div`
  p{
    line-height: 1.4;
    font-size: 13px;
    font-weight: 400;
    color:#7b7b7b;
    &:nth-child(2){
      font-size: 13px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  & + & {
    margin-top: 10px;
  }
  ${props => props.size === 'md' && css`
       ${Thumb} {
          width: 148px;
          height: 94px;
          background:pink;
       }
  `}
  ${props => props.size === 'lg' && css`
       ${Thumb} {
          width: 148px;
          height: 94px;
       }
  `}
`;

export default VideoItem;