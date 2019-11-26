import React from 'react';
import './App.css';

const App = () => {
  const APP_ID = '91a10345';
  const APP_KEY = 'a3a2dcc078ae587ce7ad48b9dd82a2d7';
  const exampleReq ="https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}"

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default App;
