import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode`)
      .then(response => {
        // console.log(response.data.results);
        setEpisodes(response.data.results);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard episode={episode} key={episode.id} />
      ))}
    </section>
  );
}
