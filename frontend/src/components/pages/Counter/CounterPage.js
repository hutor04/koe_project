import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
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
    <Container style={{ minHeight: '83vh' }} className={'flex-column'}>
      <br/>
      <Container className={'flex-row'}>
        <Card style= {{boxShadow: "1px 3px 1px #9E9E9E"}}>
        <h1 style={{textAlign: "center"}}>{name}</h1>
        <Container className={'d-flex flex-column justify-content-around'} fluid>
          <Container className={'d-flex flex-row justify-content-center'}>
            <div style={{ fontSize: "6em"}}>{counter}</div>
          </Container>
          <Container className={'d-flex flex-row justify-content-around'}>
            <CounterButton id={id} delta='decrement'/>
            <CounterButton id={id} delta='increment'/>
          </Container>
          <br/>
            <Container className={'d-flex flex-row justify-content-center'}>
              <Button
                variant="outline-dark btn-lg"
                className={'mr-4'}
                onClick={() => {history.goBack()}}
              >Back</Button>
              <CounterButton
                id={id}
                delta='reset'
              />
          </Container>
          <br/>
        <br/>
      </Container>
          
        </Card>
        </Container>

    </Container>
  );



}

export default CounterPage;
