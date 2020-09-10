import {createBrowserHistory} from 'history';

export const HISTORY = createBrowserHistory({
    basename: process.env.REACT_APP_API_BASE_LINE
});

export const navigate = url => {
    HISTORY.push(url);
};
export const navigateReplace = url => {
    window.location.replace(`#${url}`);
};
