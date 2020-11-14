import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipe">
            <div className="recipeImage">
                <img src={image} alt=""></img>
            </div>
            
            <h1>{title}</h1>
            <p>{Math.round(calories)} calories</p>
            <hr/>
            <div className="ingredients">
                <ul>
                    {ingredients.map(ingredient => (
                        <li>• {ingredient.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Recipe;