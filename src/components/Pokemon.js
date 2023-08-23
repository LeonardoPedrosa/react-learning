import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/pokemonList-style.css';
import { SplitScreen } from './SplitScreen';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);  
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState(null);

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

  useEffect(() => {
    if (selectedPokemon) {
      axios
        .get(selectedPokemon.url)
        .then(response => {
          setPokemonInfo(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching Pokemon info:', error);
        });
    } else {
      setPokemonInfo(null); // Limpar as informações quando nenhum Pokemon for selecionado
    }
  }, [selectedPokemon]);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const PokemonList =()=>{
    return(
      <ul className="pokemon-list">
        {pokemons.map(pokemon => (
          <li
            key={pokemon.name}
            onClick={() => handlePokemonClick(pokemon)}
          >
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </li>
        ))}
      </ul>
    )
  };

  const PokemonDetails = () => {
    return(
      <div>
        {selectedPokemon && pokemonInfo && (
          <div className="pokemon-details">
            <h3>{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</h3>
            <img src={pokemonInfo.sprites.front_default} alt={selectedPokemon.name} />
            <p>Height: {pokemonInfo.height}</p>
            <p>Weight: {pokemonInfo.weight}</p>
            {/* ... outras informações que você queira exibir ... */}
          </div>
        )}
      </div>
    )
  };

  return (
    <div class="container">
      <h2>Pokémon List</h2>
        <SplitScreen
        left={PokemonList}
        right={PokemonDetails}
        leftWeight={1}
        rightWeight={3}
        />
    </div>
  );
};

export default Pokemon;
