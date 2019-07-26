import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        // console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(char => (
        <CharacterCard characater={char} />
      ))}
    </section>
  );
}
