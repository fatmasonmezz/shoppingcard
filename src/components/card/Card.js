import React from 'react';
import CardImage from '../cardimage/CardImage';
import CardInfo from '../cardinfo/CardInfo';
import CardTitle from '../cardTitle/CardTitle';
import "./card.css";

function Card({title,info,image,onClick}) {
  return (
    <div className='card' onClick={onClick}>
        <div className='card-body'>
            <CardTitle title={title} />
            <CardImage image={image}/>
            <CardInfo info={info}/>
        </div>

    </div>
  );
}

export default Card