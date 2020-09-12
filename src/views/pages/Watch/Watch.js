import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import VideoPlaylist from "../../../components/Video/VideoPlaylist";

const Watch = (props) => {

    return (
        <Wrapper>
            <VideoPanel>
                <Video src={'https://www.w3schools.com/html/mov_bbb.mp4'}/>
            </VideoPanel>
            <VideoPlaylist></VideoPlaylist>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
`;
const VideoPanel = styled.div`
  flex-grow: 1;
  padding: 21px 24px;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export default Watch;