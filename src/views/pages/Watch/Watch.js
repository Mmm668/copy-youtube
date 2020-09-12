import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import VideoPlaylist from "../../../components/Video/VideoPlaylist";

const Watch = (props) => {

<<<<<<< HEAD
    return (
        <Wrapper>
            <VideoPanel>
                <Video src={'https://www.w3schools.com/html/mov_bbb.mp4'}/>
=======
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
>>>>>>> fbed946... [page] Watch width 계산
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
<<<<<<< HEAD
  padding: 21px 24px;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
=======
  padding: 24px;
`;
const Video = styled.video`
>>>>>>> fbed946... [page] Watch width 계산
`;

export default Watch;