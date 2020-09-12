import React from 'react';
import styled from "styled-components";
import InfiniteScroll from 'react-infinite-scroll-component';
import {Switch} from "antd";
import VideoItem from "./VideoItem";

const VideoPlaylist = ({className}) => {

    return (
        <Wrapper className={className}>
            {/* 무한 스크롤*/}
            <Top>
                <LeftWrap>다음 동영상</LeftWrap>
                <RightWrap>
                    <div className="txt">자동 재생</div>
                    <Switch defaultChecked={false} onChange={() => console.log('@@ fetch sth')}/>
                </RightWrap>
            </Top>
            <Body>
                <VideoItem></VideoItem>
                <div className="bar"></div>
            </Body>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  //display: flex;
  width: 400px;
  flex-shrink: 0;
  padding: 0 24px 24px 0;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
const LeftWrap = styled.div`
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 600;
`;
const RightWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  .txt{
    position: relative;
    top: 2px;
    margin-right: 8px;
  }
`;

const Body = styled.div`
  
  .bar{
    position: relative;
    margin: 20px 0;
    &:before{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background:#e0e0e0;
    }
  }
`;
export default VideoPlaylist;