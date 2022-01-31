import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const MealDetail = () => {
    const {mealId} = useParams();
    const [meal, setMeal] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    }, [])

    const handleNavigate = () => {
        navigate('/resturant');
    }

    return (
        <div>
            <h3>Meal Detail of {mealId}</h3>
            <Card style={{ width: '25rem', marginLeft: '475px'}}>
                <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                    <Card.Text>
                    {meal.strInstructions}
                    </Card.Text>             
                    <Button onClick={handleNavigate} variant="primary">Go Resturant</Button>    
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealDetail;