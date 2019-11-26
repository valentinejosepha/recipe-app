import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const APP_ID = '91a10345';
  const APP_KEY = 'a3a2dcc078ae587ce7ad48b9dd82a2d7';

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  };

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button 
          className='search-button' 
          type='submit'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default App;
