import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import VideoPlaylist from "../../../components/Video/VideoPlaylist";

const Watch = (props) => {

    const videoArea = useRef(null);
    const [videoSize, setVideoSize] = useState({});

    useEffect(() => {
        if (videoArea) {
            let resWidth = videoArea.current.offsetWidth - 48;
            let resHeight = Math.floor(resWidth * 360 / 640)
            setVideoSize({width: resWidth, height: resHeight})
        }
    }, [videoArea])

    return (
        <Wrapper>
            <VideoPanel ref={videoArea}>
                <Video src={'https://www.w3schools.com/html/mov_bbb.mp4'} style={videoSize}/>
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
  padding: 24px;
`;
const Video = styled.video`
`;

export default Watch;