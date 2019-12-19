import React from 'react';
import template from './template.pug';
import './p-section.scss';
import FoodListContainer from '../../containers/FoodListContainer';


const SelectionPage = ({data}) => {

  return template.call({}, {
    data,
    FoodListContainer,
  })
}

export default SelectionPage;