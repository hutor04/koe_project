import React, { useState } from 'react';
import { Card, Image, Container, Collapse, Button, ButtonGroup } from 'react-bootstrap';
import Counter from '../Counter/Counter';
import defaultLogo from '../../imgs/default_logo.png';


function VenueCard({ id, logo, name, maxCapacity, street }) {
  const [open, setOpen] = useState(false);
  const logoPath = logo ? `images/logos/${logo}` : defaultLogo;
  const collapseId = `collapse-${id}`;
  return (
    <Card className={'mt-2'}>
      <Container fluid className={'d-flex flex-row align-items-center'}>
        <Image className={'img-responsive'} src={logoPath} style={{ width: "50px", margin: "10px" }} rounded />
        <Container className={'p-0'}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{street}</Card.Subtitle>
        </Container>
        <ButtonGroup>
          <Counter id={id} maxCapacity={maxCapacity}/>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls={collapseId}
            aria-expanded={open}
            variant={'light'}
          ><i className="fas fa-chevron-down"></i>
          </Button>
        </ButtonGroup>
      </Container>
      <Collapse in={open}>
        <Container id={collapseId}>
          <div >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Container>
      </Collapse>
    </Card>
  );
}

export default VenueCard;
