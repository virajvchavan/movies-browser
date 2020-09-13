import React, { useEffect, useState } from 'react';
import './bulma.css';
import './App.css';

const IMDB_ENDPINT = "https://api.themoviedb.org/3/";
const API_KEY = "9be5962f75cabd26c04eb4443674e0d2";

function App() {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    async function getCategories() {
      let response = await fetch(IMDB_ENDPINT + "genre/movie/list?api_key=" + API_KEY);
      let categoriesJson = await response.json();
      console.log(categoriesJson);
    }
    getCategories();
  }, []);

  return (
    <div className="App">
        <h1>Movie List</h1>

    </div>
  );
}

export default App;
