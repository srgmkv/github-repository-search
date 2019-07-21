import { takeLatest, call, put, delay } from "redux-saga/effects"
import axios from 'axios'
import { ACTION_INPUT_CHANGED, ACTION_DATA_LOADED, ACTION_API_ERRORED } from '../actions'
import { ItemModel } from '../interfaces'

interface ActionInputChange {
  type: 'INPUT_CHANGED'
  inputValue: string
}

export default function* watchInput() {
  yield takeLatest(ACTION_INPUT_CHANGED, handleInput);
}
function* handleInput(action: ActionInputChange) {
  const { inputValue } = action

  try {
    if (inputValue.length > 2) {
      yield delay(500) // сага предоставляет внутреннюю debounce ф-ю ввиде delay
      const dataFromApi: any[] = yield call(fetchRepos, inputValue)
      const mappedItems = fetchedDataMapper(dataFromApi)
      yield put({ type: ACTION_DATA_LOADED, data: mappedItems })
    }
  } catch (error) {
    yield put({ type: ACTION_API_ERRORED, errorData: error })
  }
}


function fetchRepos(query: string) {
  const apiUrlForRepos: string = 'https://api.github.com/search/repositories?q='
  return axios.get(`${apiUrlForRepos}${query}`)
}

//вспомогательная ф-я, преобразующая полченные данные в нужный вид
function fetchedDataMapper(dataToMap: any): ItemModel[] {
  const items: any[] = dataToMap.data.items
  return items
    .map((item) => ({
      id: item.id,
      url: item.html_url,
      name: item.full_name,
      stars: item.stargazers_count,
      watchers: item.watchers_count
    }))
    .sort((a: any, b: any) => b.stars - a.stars)
    .slice(0, 10)
}