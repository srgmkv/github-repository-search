import * as React from 'react';
import { connect } from 'react-redux';
import Card from './CardComp';
import { ItemModel, IState } from '../../../models';
import BgHandler from '../../../containers/BGhandler'
import './Cards.css'

interface StateProps {
  items: ItemModel[]
  emptyDataRecieved: boolean
  error: boolean
}

const Results = ({ error, items, emptyDataRecieved }: StateProps) => {
  console.log('items from Results.tsx', items)

  const cards =
    <div id="cards-container">
      {items.map((item: ItemModel) => <Card key={item.id} card={item} />)}
    </div>

  return (
    <>
      {!emptyDataRecieved ? cards : <BgHandler spec='no-result' />}
      {error && <BgHandler spec='error' />}
    </>
  );
}

const mapStateToProps = (state: IState): StateProps => ({
  items: state.items,
  emptyDataRecieved: state.emptyDataRecieved,
  error: state.error
});

export default connect(mapStateToProps)(Results);

