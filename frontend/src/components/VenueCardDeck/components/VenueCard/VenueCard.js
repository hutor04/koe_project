import React, { useState, useRef } from 'react';
import { Card, Image, Container, Collapse, Button, ButtonGroup, Table } from 'react-bootstrap';
import Counter from '../Counter/Counter';
import defaultLogo from '../../../../imgs/default_logo.png';
import {useSpring, animated} from 'react-spring'


function VenueCard({ id, logo, name, maxCapacity, street }) {
  const [open, setOpen] = useState(false);
  const logoPath = logo ? `images/logos/${logo}` : defaultLogo;
  const props = useSpring({opacity: 1, marginTop:0, from: {opacity: 0, marginTop:500}})

  return (
    <animated.div style={props}>
      <Card className={'mt-2'}>
        <Container fluid className={'d-flex flex-row align-items-center'}>
          <Image className={'img-responsive'} src={logoPath} style={{ width: "50px", margin: "10px" }} rounded />
          <Container className={'p-0 mr-1'}>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{street}</Card.Subtitle>
          </Container>
          <ButtonGroup>
            <Counter id={id} maxCapacity={maxCapacity}/>
            <Button
              onClick={() => setOpen(!open)}
              variant={'light'}
            ><i className="fas fa-chevron-down"></i>
            </Button>
          </ButtonGroup>
        </Container>
        <Collapse in={open}>
          <Container>
            <div >
              <h5>Opening Hours</h5>
              <Container>
              <Table>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>8:00</td>
                    <td>23:00</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>8:00</td>
                    <td>23:00</td>
                  </tr>
                      <tr>
                    <td>Wednesday</td>
                    <td>8:00</td>
                    <td>23:00</td>
                  </tr>
                      <tr>
                    <td>Thursday</td>
                    <td>8:00</td>
                    <td>23:00</td>
                  </tr>
                      <tr>
                    <td>Friday</td>
                    <td>8:00</td>
                    <td>23:00</td>
                  </tr>
                      <tr>
                    <td>Saturday</td>
                    <td>8:00</td>
                    <td>23:00</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td colSpan="2">closed</td>
                  </tr>
                </tbody>
              </Table>

              </Container>
            </div>
          </Container>
        </Collapse>
      </Card>
    </animated.div>
  );
}

export default VenueCard;
