import { put, takeEvery } from 'redux-saga/effects'
import {
  GET_LIST,
  setList,
} from './actions';
import axios from 'axios';
import { mapListFromApi } from './selector';

function* getList() {
  try {
    const response = yield axios({
      method: 'get',
      url: 'https://api.github.com/orgs/react-native-community/repos',
    });
    const data = mapListFromApi(response.data);
    yield put(setList(data));
  } catch (e) {
    // Something wrong happened, assuming nothing happened.
  }
}

export default function* appSaga() {
  yield takeEvery(GET_LIST, getList);
}
