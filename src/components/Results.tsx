import * as React from 'react';
import { connect } from 'react-redux';
import Card from './CardComp'

interface StateProps {
  items: any;
}

const mapStateToProps = (state: any): StateProps => ({
  items: state.items
});

const Results = ({ items }: StateProps) => {
  console.log('items', items)

  const cards = items.map((item: any) => {
    return <Card item={item} />
  })
  return (
    <>
      {cards}
    </>
  );
}

export default connect(mapStateToProps)(Results);