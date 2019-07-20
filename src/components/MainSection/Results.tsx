import * as React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/CardComp';
import { ItemModel, IState } from '../../interfaces';
import BgHandler from './BGroundHandler'

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
      {!emptyDataRecieved ? cards : <BgHandler spec='no-result' />} {/*если данные получены, но пусты => дефолный фон и no-res сообщение */}
      {error && <BgHandler spec='error' />} {/*если ошибка, => дефолный фон и err сообщение */}
    </>
  );
}

const mapStateToProps = (state: IState): StateProps => ({
  items: state.items,
  emptyDataRecieved: state.emptyDataRecieved,
  error: state.error
});

export default connect(mapStateToProps)(Results);

