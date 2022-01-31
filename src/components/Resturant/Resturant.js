import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Resturant.css';

const Resturant = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState(' ');

    useEffect(()=> {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearch = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    if(meals) {
        return (
            <div>
                <div className='search-container'>
                    <input onChange={handleSearch} type="text" placeholder='Search Meals'/>
                </div>
                <Row xs={1} md={4} className="g-4"> 
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>) 
                }
               </Row>
            </div>
        );
    } else {
        return (
            <div>
                <div className='search-container'>
                    <input onChange={handleSearch} type="text" placeholder='Search Meals'/>
                </div>
                <h2>Nothing Found</h2>
            </div>
        )
    }
    
};

export default Resturant;