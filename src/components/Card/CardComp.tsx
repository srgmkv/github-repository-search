import React from 'react';
import { ItemModel } from '../../interfaces'
import './Cards.scss'

interface ItemProps {
  card: ItemModel;
}

//Компонент отрисовывает карточку репозитория
const Card = ({ card: { url, name, stars, watchers } }: ItemProps) => {
  return (
    <div className='card' >
      <a href={url} className='name' title="See on Github">{name}</a>
      <div className='stars-watchers-cont'>
        <div className='stars'>{stars} <span>stars</span></div>
        <div className='watchers'>{watchers} <span>watchers</span></div>
      </div>
    </div>
  );
}

export default Card;