import React from 'react';
import { Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function VenueCard(props) {
  return (
    <Card key={uuidv4} className={'mt-2'}>
      <Card.Body>{props.name}</Card.Body>
    </Card>
  );
}

export default VenueCard;
