import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useLocation, useHistory } from 'react-router-dom';
import { fireBase } from '../../../client';
import CounterButton from '../../Counter/CounterButton'

function CounterPage() {
  const [counter, setCounter] = useState(0);
  const location = useLocation();
  const history = useHistory();
  const {id, name } = location.state;


  useEffect(() => {
    let mount = true;
    const countRef = fireBase.ref(`stores/${id}/visitors`);
    if (mount) {
      countRef.on('value', function(snapshot) {
        const currentVal = snapshot.val();
        setCounter(currentVal);
      });
    }
    return function cleanup() {
      countRef.off();
      mount = false;
    }
  }, []);
  return (
    <Container style={{ minHeight: '83vh' }}>
      <Row>
        <h1>{name}</h1>
      </Row>
      <Row>
        <Col>
          <Button
            variant="light"
            onClick={() => {history.goBack()}}
          >Back</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <CounterButton id={id} delta='decrement'/>
        </Col>
        <Col>{counter}</Col>
        <Col>
          <CounterButton id={id} delta='increment'/>
        </Col>
      </Row>
      <Row>
        <Col>
          <CounterButton id={id} delta='reset'/>
        </Col>
      </Row>
    </Container>
  );



}

export default CounterPage;
