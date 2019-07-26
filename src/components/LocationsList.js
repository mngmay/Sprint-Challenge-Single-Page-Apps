import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location`)
      .then(response => {
        // console.log(response.data.results);
        setLocations(response.data.results);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {locations.map(location => (
        <LocationCard location={location} />
      ))}
    </section>
  );
}
