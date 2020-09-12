import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

let resWidth;
let resHeight;
const VideoWrap = (props) => {

    const videoArea = useRef(null);
    const [videoSize, setVideoSize] = useState({});

    function resizeVideo() {
        if (window.innerWidth <= 1175 && window.innerWidth >= 744) {
            resWidth = Math.floor(750 * window.innerWidth / 1175)
            resHeight = Math.floor(resWidth * 360 / 640)
        }
        if (window.innerWidth < 744) {
            resWidth = 451
        }
        if (window.innerWidth > 1175) {
            resWidth = 744
        }

        resHeight = Math.floor(resWidth * 360 / 640)
        setVideoSize({width: resWidth, height: resHeight})
        setVideoSize({width: resWidth, height: resHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', resizeVideo)
        if (videoArea) {
            resizeVideo()
        }

        return () => {
            window.removeEventListener('resize', resizeVideo)
        }
    }, [videoArea])
    return (
        <VideoPanel ref={videoArea}>
            <iframe width={videoSize.width} height={videoSize.height} src="//www.youtube.com/embed/ue-0o-Glsrk"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <Desc>
                {/*<Title>Lofi Coding Mix - Part 3 [Stay Home Edition]</Title>*/}
                {/*<LeftWrap>조회수 261,152회•2020. 3. 30.</LeftWrap>*/}
                {/*<RightWrap>*/}
                {/*    <ActionItem></ActionItem>*/}
                {/*    <ActionItem></ActionItem>*/}
                {/*    <ActionItem></ActionItem>*/}
                {/*    <ActionItem></ActionItem>*/}
                {/*</RightWrap>*/}
            </Desc>
        </VideoPanel>
    )
};

const Wrapper = styled.div`
`;


const VideoPanel = styled.div`
  flex-grow: 1;
  padding: 21px 24px;
`;

const Desc = styled.div`
`;

export default VideoWrap;