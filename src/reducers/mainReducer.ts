import { IState } from '../models';
import { AppActions } from '../actions';

const initState: IState = {
  items: [],
  loading: false,
  error: false,
  errorMessage: '',
  inputValue: '',
  emptyDataRecieved: false
}

const mainReducer = (state: IState = initState, action: AppActions): IState => {
  switch (action.type) {

    case 'DATA_REQUESTED':
      return {
        ...state,
        loading: true
      }

    case 'DATA_LOADED':
      return (!action.data.length) ? {
        ...initState,
        inputValue: state.inputValue,
        emptyDataRecieved: true
      } : {
          ...initState,
          items: action.data,
          inputValue: state.inputValue
        }

    case 'API_ERRORED':
      return {
        ...initState,
        error: true,
        errorMessage: action.errorData,
        inputValue: state.inputValue
      }

    case 'CHANGE_INPUT':
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

export default mainReducer;