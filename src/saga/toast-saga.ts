import { takeLatest, put, delay } from 'redux-saga/effects';
import { ACTION } from '../redux/constants';
import { hideToastAction } from '../redux/actions';

function* showToast() {
    yield delay(2000);
    yield put(hideToastAction());
}


function* rootSaga() {
    yield takeLatest(ACTION.SHOW_TOAST, showToast);
} 

export default rootSaga;