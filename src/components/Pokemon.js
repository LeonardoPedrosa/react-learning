import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);  
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      setPokemons(res.data.results);
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
      <div>
        <h2>Pokemon List</h2>
        <p>Welcome to the Pokemon page!</p>
          <ul>
            {pokemons.map(pokemon => (
              <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
  );
};

export default Pokemon;
