import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
	const APP_ID = "067c01d4";
	const APP_KEY = "ea64f717e7c85595826cafb6a25f0bf9";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes()
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
		const data = await response.json()
		setRecipes(data.hits);
		console.log(data.hits);
	};

	const updateSearch = e => {
		setSearch(e.target.value)
	};

	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
	<div className="App">
		<div className="hangerTitle">
			<p>Hanger</p>
		</div>
		<form onSubmit={getSearch} className="search-form">
			<input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="find a recipe."/>
			<button className="search-button" type="submit"><strong>search</strong></button>
		</form>
		<div className="recipes">
			{recipes.map(recipe => (
				<Recipe 
					image={recipe.recipe.image}
					key={recipe.recipe.label}
					title={recipe.recipe.label} 
					calories={recipe.recipe.calories} 
					ingredients={recipe.recipe.ingredients}
				/>
			))}
		</div>
	</div>
	);
};

export default App;
