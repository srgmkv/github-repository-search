import { takeEvery, call, put } from "redux-saga/effects";
import axios from 'axios';

export default function* watcherSaga() {
  yield takeEvery('DATA_REQUESTED', workerSaga);
}
function* workerSaga(action) {
  try {
    const response = yield call(fetchRepos, action.valueForUrl);
    const mappedItems = fetchedDataReducer(response);
    yield put({ type: 'DATA_LOADED', data: mappedItems });
  } catch (error) {

    console.log('error', error)

    yield put({ type: 'API_ERRORED', errorData: error });
  }
}

function fetchRepos(str) {
  const fetchRepos = axios.get(`https://api.github.com/search/repositories?q=${str}`)
  console.log('fetchRepos', fetchRepos)

  return fetchRepos
}

function fetchedDataReducer(response) {
  return response.data.items.map(item => ({
    id: item.id,
    url: item.html_url,
    name: item.full_name,
    stars: item.stargazers_count,
    watchers: item.watchers_count
  }))
}