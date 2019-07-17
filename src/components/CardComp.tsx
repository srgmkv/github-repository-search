import React from 'react';
import ItemModel from '../model'

const Card = ({ url, name, stars, watchers }: ItemModel) => {
  return (
    <div className='card' >
      <a href={url}>{name}</a>
      <div className='stars'>{stars}</div>
      <div className='watchers'>{watchers}</div>
    </div>
  );
}

export default Card;