import React, {useEffect} from 'react';
import styled from "styled-components";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import Home from "./views/pages/home";
import Watch from "./views/pages/Watch/Watch";

const Routes = (props) => {

    const {
        style
    } = props;

    const location = useLocation();

    useEffect(()=>{
        // photosCreators.clearStore() // keyword...
    },[location])

    return (
        <Wrapper style={style}>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/watch'} component={Watch}/>

                {/*<Route path={'/404'} component={Page404}/>*/}
                {/*<Redirect to={'/404'}></Redirect>*/}
            </Switch>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Routes;