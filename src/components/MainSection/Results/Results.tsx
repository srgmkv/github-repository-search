import * as React from 'react';
import { connect } from 'react-redux';
import Card from './CardComp';
import { ItemModel, IState } from '../../../models';
import './Cards.css'

const Message: React.FC = () => (
  <div id="image">
    <div id="message">There is no results on this request </div>
  </div>
)


interface StateProps {
  items: ItemModel[]
  emptyDataRecieved: boolean
}

const mapStateToProps = (state: IState): StateProps => ({
  items: state.items,
  emptyDataRecieved: state.emptyDataRecieved
});

const Results = ({ items, emptyDataRecieved }: StateProps) => {
  console.log('items from Results.tsx', items)

  const cards =
    <div id="cards-container">
      {items.map((item: ItemModel) => <Card key={item.id} card={item} />)}
    </div>

  return (
    <>
      {!emptyDataRecieved ? cards : <Message />}
    </>
  );
}

export default connect(mapStateToProps)(Results);

