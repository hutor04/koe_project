import React, { useState } from 'react';
import { Card, Image, Container, Collapse, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
          as={Link}
          to={{
            pathname: '/counter',
            state: {
              id: id,
              name: name,
            }
          }}
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
            <Container>
            <EditVenue readOnly={editMode} id={id}/>
            <DeleteVenue id={id}/>
            <br/>
            </Container>
            <br/>
          </div>
        </Container>
      </Collapse>
    </Card>
  );
}

export default VenueCardBusines;
