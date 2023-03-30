import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBowlFood, faCoffee, faFish, faFishFins } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'

const Meal = ({ meals, handleFood }) => {
    console.log(meals)
    return (
        <div className='meal'>
            <img src={meals.strCategoryThumb
            } alt="" />
            <h3>name: {meals.strCategory
            }</h3>
            <p>Details: {meals.strCategoryDescription.slice(0, 190)}.....</p>
            <button onClick={() => handleFood(meals.strCategory)}  className='btn-meal'>
                 Add Meal <FontAwesomeIcon icon={faBowlFood} /></button>
        </div>
    );
};

export default Meal;