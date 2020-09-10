import React, {useEffect} from 'react';
import styled from "styled-components";
import Loading from "../Loading/Loading";

const InfiniteScroll = ({children, fetchMore=()=>{}, hasMore, loader, footer}) => {

    function infiniteScrollListener() {
        let tick;
        let docHeight = document.body.clientHeight;
        let scrollBottom = document.documentElement.scrollTop + window.innerHeight; // scrollTop is lack of full content height.
        let percentScroll = Math.floor(scrollBottom / docHeight * 100);


        if(tick === undefined || window.oldScroll < window.scrollY){
            if(percentScroll > 85){
                console.log('@@ scroll 85%----------');
                fetchMore();
                tick = true;
            }
        } else if (tick && percentScroll < 85){
            tick = false;
        }
        window.oldScroll = window.scrollY;
    }

    useEffect(()=>{
        document.addEventListener('scroll', infiniteScrollListener);

        return () => {
            document.removeEventListener('scroll', infiniteScrollListener);
        }
    },[])

    return (
        <Wrapper>
            {loader}
            {children}
            {footer}
            <Loading style={{position: 'absolute', left: 0, right: 0, bottom: 0}}/>
        </Wrapper>

    )
};

const Wrapper = styled.div`
`;

export default InfiniteScroll;