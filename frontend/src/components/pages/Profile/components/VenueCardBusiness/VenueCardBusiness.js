import React, { useState } from 'react';
import { Card, Image, Container, Collapse, Button, Accordion } from 'react-bootstrap';
import defaultLogo from '../../../../../imgs/default_logo.png';
import DeleteVenue from '../../../../VenueUpdates/DeleteVenue';
import EditVenue from '../../../../VenueUpdates/EditVenue';

function VenueCardBusines({ id, logo, name, maxCapacity, street }) {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState('readOnly');
  const logoPath = logo ? `images/logos/${logo}` : defaultLogo;
  return (
    <Card className={'mt-2'}>
      <Container fluid className={'d-flex flex-row align-items-center'}>
        <Image className={'img-responsive'} src={logoPath} style={{ width: "50px", margin: "10px" }} rounded />
        <Container className={'p-0 mr-1'}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{street}</Card.Subtitle>
        </Container>
        <Button
          variant={'light'}
          className={'mr-2'}>
            <i className="fas fa-stopwatch-20"></i></Button>
        {open
        ? <Button
            onClick={() => editMode=== ''? setEditMode('readOnly') : setEditMode('')}
            variant={'light'}
            className={'mr-2'}><i className="far fa-edit"></i>
          </Button>
        : ""}
        <Button
            onClick={() => {setOpen(!open); setEditMode('readOnly')}}
            aria-expanded={open}
            variant={'light'}
          ><i className="fas fa-chevron-down"></i>
        </Button>

      </Container>
      <Collapse in={open}>
        <Container>
          <div >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
            <EditVenue readOnly={editMode} id={id}/>
            <DeleteVenue id={id}/>
          </div>
        </Container>
      </Collapse>
    </Card>
  );
}

export default VenueCardBusines;
