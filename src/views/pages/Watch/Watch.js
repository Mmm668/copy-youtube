import React from 'react';
import styled from "styled-components";
import VideoPlaylist from "../../../components/Video/VideoPlaylist";
import VideoWrap from "./components/VideoWrap";

const Watch = (props) => {

    return (
        <Wrapper>
            <VideoWrap/>
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


export default Watch;