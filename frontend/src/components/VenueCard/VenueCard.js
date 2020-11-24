import React from 'react';
import { Card } from 'react-bootstrap';

function VenueCard(props) {
  return (
    <Card className={'mt-2'}>
      <Card.Body>{props.name}</Card.Body>
    </Card>
  );
}

export default VenueCard;
