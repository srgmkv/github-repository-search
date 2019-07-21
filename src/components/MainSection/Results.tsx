import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'
import { ItemModel, IState } from '../../interfaces'

interface StateProps {
  items: ItemModel[]
  emptyDataRecieved: boolean
  error: boolean
}

//Компонент для отображения результата запроса
const Results = ({ error, items, emptyDataRecieved }: StateProps) => {
 //если список репозиториев получен, то генерируем JSX c карточками репозиториев
  const cards =
    items.length > 0 &&
    <div id="cards-container">
      {items.map((item: ItemModel) => <Card key={item.id} card={item} />)}
    </div>

  return (
    <>
      {!emptyDataRecieved ? cards : Message(noRes)} {/* блок с карточками репозиториев либо сообщение о получении пустых данных */}
      {error && Message(errMes)} {/*сообщение об ошибке */}
    </>
  )
}

const mapStateToProps = (state: IState): StateProps => ({
  items: state.items,
  emptyDataRecieved: state.emptyDataRecieved,
  error: state.error
})

export default connect(mapStateToProps)(Results)

const Message = (str: string) => <div id="message">{str}</div>

const errMes: string =
  `Error occured.  
Check for incorrect symbols or try later`

const noRes: string =
  `There is no result on this request.
Try it to change.`

