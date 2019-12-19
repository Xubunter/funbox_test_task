import React from 'react';
import FoodList from '../../components/FoodList';
import cat from '../../assets/cat.png';

const testData = [
  {
    name: 'Нямушка',
    taste: 'с фуа-гра',
    desc: 'Печень утки разварная с артишоками.',
    slogan: 'Сказочное заморское яство',
    features: [
      {count: 10, unit: 'порций'},
      {text: 'мышь в подарок'}
    ],
    weight: {count: 0.5, unit: 'кг'},
    img: cat
  },  {
    name: 'Нямушка',
    taste: 'с рыбой',
    desc: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    slogan: 'Сказочное заморское яство',
    features: [
      {count: 40, unit: 'порций'},
      {count: 2, unit: 'мыши в подарок'},
    ],
    weight: {count: 2, unit: 'кг'},
    img: cat
  },  {
    name: 'Нямушка',
    taste: 'с курой',
    desc: 'Филе из цыплят с трюфелями в бульоне.',
    slogan: 'Сказочное заморское яство',
    features: [
      {count: 100, unit: 'порций'},
      {count: 5, unit: 'мышей в подарок'},
      {text: 'заказчик доволен'}
    ],
    weight: {count: 5, unit: 'кг'},
    img: cat
  }
]

const FoodListContainer = ({...props}) => {
  return <FoodList data={testData} {...props}/>
}

export default FoodListContainer;