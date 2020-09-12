import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import VideoPlaylist from "../../../components/Video/VideoPlaylist";

let resWidth;
let resHeight;
const Watch = (props) => {

    const videoArea = useRef(null);
    const [videoSize, setVideoSize] = useState({});

    function resizeVideo() {
        if(window.innerWidth <= 1175 && window.innerWidth >= 744){
            resWidth = Math.floor(750 * window.innerWidth / 1175)
            resHeight = Math.floor(resWidth * 360 / 640)
        }
        if(window.innerWidth < 744){
            resWidth = 451
        }
        if(window.innerWidth > 1175){
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
        <Wrapper>
            <VideoPanel ref={videoArea}>
                <iframe width={videoSize.width} height={videoSize.height} src="//www.youtube.com/embed/ue-0o-Glsrk"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </VideoPanel>
            <VideoPlaylist className={'rwd'}></VideoPlaylist>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  .rwd{
    @media only screen and (max-width: 497px) {
      display: none;
    }
  }
`;
const VideoPanel = styled.div`
  flex-grow: 1;
  padding: 21px 24px;
`;

export default Watch;