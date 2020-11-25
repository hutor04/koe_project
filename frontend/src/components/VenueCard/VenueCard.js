import React from 'react';
import { Card, Image} from 'react-bootstrap';
import defaultLogo from '../../imgs/default_logo.png';
function VenueCard({ logo, name }) {
  const logoPath = logo ? `images/logos/${logo}` : defaultLogo;
  return (
    <Card className={'mt-2 flex-row flex-wrap'}>
      <Image src={logoPath} style={{ height: "50px", margin: "5px" }} rounded />
      <Card.Body>{name}</Card.Body>
    </Card>
  );
}

export default VenueCard;
