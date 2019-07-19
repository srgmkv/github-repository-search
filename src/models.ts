export interface ItemModel {
  id: number
  name: string
  url: string
  stars: number
  watchers: number
}

export interface IState {
  items: ItemModel[]
  inputValue: string
  loading: boolean
  error: boolean
  errorMessage: Readonly<{}>
  emptyDataRecieved: boolean
}