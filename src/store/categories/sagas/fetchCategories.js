import { call } from 'redux-saga/effects'
import * as api from '../../../api/categories';

function* fetchCategories() {
  const response = yield call(api.fetchCategories);
  console.log(response);
}

export default fetchCategories;