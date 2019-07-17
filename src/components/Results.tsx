import * as React from 'react';
import { connect } from 'react-redux';
import Card from './CardComp';
import ItemModel from '../model'

interface StateProps {
  items: ItemModel[];
}

const mapStateToProps = (state: StateProps): StateProps => ({
  items: state.items
});

const Results = ({ items }: StateProps) => {
  console.log('items from Results.tsx', items)

  const cards = items.map((item: ItemModel) => {
    return (
      <Card
        key={item.id}
        url={item.url}
        name={item.name}
        stars={item.stars}
        watchers={item.watchers}

      />
    )
  })
  return (
    <>
      {cards}
    </>
  );
}

export default connect(mapStateToProps)(Results);