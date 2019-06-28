import { takeLatest, fork, all } from 'redux-saga/effects';

function* log() {
 console.log('Saga is working')
 yield null;
}

function* rootS() {
  yield takeLatest('ADD', log);
}

export default function* rootSaga() {
  yield all([
    fork(rootS)
  ])
}