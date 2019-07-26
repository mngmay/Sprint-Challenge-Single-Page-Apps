import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard({ location }) {
  const { name, type, dimension, residents } = location;
  console.log(location);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          {type} - {dimension}
        </Card.Description>
        <Card.Meta>Residents: {residents.length}</Card.Meta>
      </Card.Content>
    </Card>
  );
}
