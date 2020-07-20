import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'


import { rootReducer } from './root-reducer';
import { loadBooksAction } from './actions';

import rootSaga from '../saga/root-saga';

const sagaM = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaM));

sagaM.run(rootSaga);

store.dispatch(loadBooksAction());

export default store;