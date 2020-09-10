import {bindActionCreators} from "redux";
import store from './store'
import {Action as AppAction} from './app/redux';

const {dispatch} = store;

export const appCreators = bindActionCreators(AppAction.Creators, dispatch);
