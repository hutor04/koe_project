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
    <Container style={{ minHeight: '83vh' }} className={'d-flex flex-column'}>
      <Container className={'d-flex flex-row'}>
        <h1>{name}</h1>
      </Container>
      <Container className={'d-flex flex-column justify-content-around'} fluid>
        <Container className={'d-flex flex-row justify-content-center mb-5'}>
          <div style={{ fontSize: "6em"}}>{counter}</div>
        </Container>
        <Container className={'d-flex flex-row justify-content-around mb-5'}>
          <CounterButton id={id} delta='decrement'/>

          <CounterButton id={id} delta='increment'/>
        </Container>
        <Container className={'d-flex flex-row justify-content-center'}>
          <Button
            variant="light btn-lg"
            className={'mr-4'}
            onClick={() => {history.goBack()}}
          >Back</Button>
          <CounterButton
            id={id}
            delta='reset'
          />
        </Container>
      </Container>

    </Container>
  );



}

export default CounterPage;
