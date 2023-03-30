import React, { useEffect, useState } from 'react';
import Meal from '../../Meal/Meal';
import './Meals.css'


const Meals = ({ handleFood, meal }) => {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setMeals(data.categories))
    },[])
    // console.log(meals)
    return (
        <div className='meals-container'>
            <div className='meals'>
            {
                meals.map(meal => <Meal meals={meal} handleFood = {handleFood}></Meal>)
            }
            
            </div>
            <div>
            <h2>Selected Foods</h2>
            <h2>Name: {meal}</h2>

            </div>
        </div>
    );
};

export default Meals;