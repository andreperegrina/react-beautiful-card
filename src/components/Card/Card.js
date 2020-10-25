import React from 'react';
import './Card.css'

import CircleButton from "../CircleButton/CircleButton";


const Card = (props) => {
   const {buttons, onClick, color} = props;
   return (
      <div className={`Card ${color}`} onClick={onClick}>
         <div className='image-container'>
            <img src={props.image} alt='doggie'/>
         </div>
         <div className='title-container'>
            <h1>{props.title}</h1>
            <span>{props.subtitle}</span>
         </div>
         <div className='action-container'>
            {buttons && buttons.map((e) => <CircleButton key={e.key} text={e.text}/>)}
         </div>
      </div>
   );
};

export default Card;
