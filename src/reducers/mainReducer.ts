import { IState } from '../interfaces'
import { AppActions} from '../actions'
import  * as A from '../actions'


const initState: IState = {
  items: [],
  loading: false,
  error: false,
  errorMessage: '',
  inputValue: '',
  emptyDataRecieved: false
}

const reducer = (state: IState = initState, action: AppActions): IState => {
  switch (action.type) {

    case A.ACTION_DATA_LOADED:
      return (!action.data.length) ? {
        ...initState,
        inputValue: state.inputValue,
        emptyDataRecieved: true
      } : {
          ...initState,
          items: action.data,
          inputValue: state.inputValue
        }

    case A.ACTION_API_ERRORED:
      return {
        ...initState,
        error: true,
        errorMessage: action.errorData,
        inputValue: state.inputValue
      }

    case A.ACTION_INPUT_CHANGED:
      return (action.inputValue.length < 3) ? {
        ...initState,
        inputValue: action.inputValue
      } : {
          ...state,
          inputValue: action.inputValue,
          error: false,
          loading: true
        }

    default:
      return state
  }
}

export default reducer