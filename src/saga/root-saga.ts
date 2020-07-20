import { takeLatest, put } from 'redux-saga/effects';
import { ACTION } from '../redux/constants';
import { Book } from '../types';
import { booksLoadedAction, booksLoadFailed } from '../redux/actions';

async function getBooks() {
    return await (await fetch('https://wedonate.live/books.json').then((res) => res.json()))
}

function* fetchBooks() {
    try {
        let books: Book[] = yield getBooks();
        yield put(booksLoadedAction(books));
    } catch(e) {
        yield put(booksLoadFailed())
    }
}


function* rootSaga() {
    yield takeLatest(ACTION.LOAD_BOOKS, fetchBooks);
} 

export default rootSaga;