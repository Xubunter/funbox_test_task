import React, {useState} from 'react';
import template from './template.pug';
import './food-card.scss';
import './list.scss';
import Background from './Background';


const FoodCard = ({ data, disabled, selected, onClick=()=>{} }) => {
  const [hover, setHover] = useState(false)

  const type = disabled ? 'disabled' : 
               selected ? 'active' : ''

  const circleClass = disabled ? 'food-card__circle_disabled' : type && hover ? `food-card__circle_${type}_hover` :
                      type ? `food-card__circle_${type}` :
                      hover ? `food-card__circle_hover` : `food-card__circle`

  const handleHover = (x) => () => {
    setHover(x);
  }

  return template.call({}, {
    data,
    type,
    Background,
    hover,
    circleClass,
    handleHover,
    onClick,
  })
}

export default FoodCard;