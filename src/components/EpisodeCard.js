import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard({ episode }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Description>Episode: {episode.episode}</Card.Description>
        <Card.Meta>Aired: {episode.air_date}</Card.Meta>
      </Card.Content>
    </Card>
  );
}
