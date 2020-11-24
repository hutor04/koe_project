import React from 'react';
import { Card, Image} from 'react-bootstrap';

function VenueCard({ logo, name }) {
  const logoPath = logo ? `images/logos/${logo}` : '';
  return (
    <Card className={'mt-2 flex-row flex-wrap'}>
      <Image src={logoPath} style={{ width: "50px", height: "50px", margin: "5px" }} rounded />
      <Card.Body>{name}</Card.Body>
    </Card>
  );
}

export default VenueCard;
