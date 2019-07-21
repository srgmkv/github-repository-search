import { takeLatest, call, put, delay } from "redux-saga/effects"
import axios from 'axios'

export default function* watchInput() {
  yield takeLatest('INPUT_CHANGED', handleInput);
}
function* handleInput(action) {
  const { inputValue } = action

  try {
    if (inputValue.length > 2) {
      yield delay(500)
      const dataFromApi = yield call(fetchRepos, inputValue)

      const mappedItems = fetchedDataReducer(dataFromApi)
      yield put({ type: 'DATA_LOADED', data: mappedItems })
    }
  } catch (error) {
    yield put({ type: 'API_ERRORED', errorData: error })
  }
}

function fetchRepos(query) {
  const apiUrlForRepos = 'https://api.github.com/search/repositories?q='
  return axios.get(`${apiUrlForRepos}${query}`)
}

function fetchedDataReducer(data) {
  return data.data.items
    .map((item) => ({
      id: item.id,
      url: item.html_url,
      name: item.full_name,
      stars: item.stargazers_count,
      watchers: item.watchers_count
    }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 10)
}