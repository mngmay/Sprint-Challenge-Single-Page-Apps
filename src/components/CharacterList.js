import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState(null);
  console.log(name);

  function onSearch(e, query) {
    e.preventDefault();
    setName(query.name);
  }

  useEffect(() => {
    if (name) {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then(response => {
          console.log(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(err => {
          console.log("Error", err);
        });
    } else {
      axios
        .get(`https://rickandmortyapi.com/api/character`)
        .then(response => {
          // console.log(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  }, [name]);

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <section className="character-list grid-view">
        {characters.map(char => (
          <CharacterCard character={char} key={char.id} />
        ))}
      </section>
    </div>
  );
}
