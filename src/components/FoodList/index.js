import React, { useState } from 'react';
import FoodCard from '../FoodCard';
import template from './template.pug';
import './food-list-item.scss';
import './food-list.scss';



const FoodList = ({data}) => {
  const [selected, setSelected] = useState([])

  const handleClick = (id) => {
    setSelected(state => {
      return state.includes(id) ? state.filter(item => item !== id) 
             : state.concat(id)
    });
  }

  return template.call(this, {
    data: data,
    FoodCard,
    handleClick,
    selected
  })
}

export default FoodList;