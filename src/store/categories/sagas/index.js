import { takeLatest, all } from 'redux-saga/effects';
import { Types } from '../index';
import fetchCategories from './fetchCategories';

function* categoriesSagas() {
  yield all([
    takeLatest(Types.FETCH_CATEGORIES, fetchCategories)
  ])
}

export default categoriesSagas;