import * as React from 'react';
import { connect } from 'react-redux';
import Card from '../../Views/Card/CardComp';
import { ItemModel, IState } from '../../interfaces';
import BgHandler from './BGroundHandler'

interface StateProps {
  items: ItemModel[]
  emptyDataRecieved: boolean
  error: boolean
}

const Results = ({ error, items, emptyDataRecieved }: StateProps) => {
  console.log('items from Results.tsx', items)

  const cards =
    items.length > 0 &&
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

