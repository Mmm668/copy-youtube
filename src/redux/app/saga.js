import {Action as API, Action} from "./redux";
import {delay, put, call, takeLatest, spawn, all} from "@redux-saga/core/effects";
import {navigate} from "../../helpers/HistoryHelper";
import {getAccessToken, setAccessToken} from "../../helpers/TokenHelper";


export default function* () {
    const toastMessage = function*(message, duration){
        yield put(Action.Creators.updateState({toastMessage: message}))
        yield spawn(function*(){
            yield delay(2000);
            yield put(Action.Creators.updateState({toastMessage: ''}))
        })
    }

    yield all([
        takeLatest(Action.Types.AUTH_TOUCH, function* () {
            const result = yield call(API.authTouch);
            if(!result?.data?.googleId) {
                console.log('@@ 로그인 실패');
                return navigate('/login')
            }
            const user = result.data;
            setAccessToken(JSON.stringify(user));
            yield put(Action.Creators.updateState({user}))
        }),

        takeLatest(Action.Types.LOGOUT, function* () {
            const result = yield call(API.logout);
            setAccessToken('');
            yield put(Action.Creators.updateState({user: undefined}))
            navigate('/login')
        })
    ])
}