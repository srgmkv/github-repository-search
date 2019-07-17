import React from 'react';



const Card = ({ item }: any) => {
  return (
    <div className='card'>
      <a href={item.html_url}>{item.full_name}</a>
      <div className='stars'>{item.stargazers_count}</div>
      <div className='watchers'>{item.watchers}</div>
    </div>
  );
}

export default Card;