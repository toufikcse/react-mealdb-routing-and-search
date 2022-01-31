import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    // console.log(props.meal);
    const MAX_LENGTH = 200;
    const {idMeal, strMeal, strMealThumb, strInstructions} = props.meal;
    // const img = strMealThumb 
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    {strInstructions.substring(0, MAX_LENGTH)}
                </Card.Text>
                <Link to={`/mealDetail/${idMeal}`} >
                    <Button variant="primary">View Details</Button>
                </Link>
                <br />
                <Link to={`/mealDetail/${idMeal}`}>Visit Meal</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Meal;