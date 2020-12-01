import React from 'react';
import { useMutation } from '@apollo/client';
import { Button, ButtonGroup } from 'react-bootstrap';
import COUNTER from '../../client/api/queries/counter';

const CounterButton = ({id, delta}) => {
  const [updateVenueCounter] = useMutation(COUNTER);
  let btnVar;
  let btnContent;
  if (delta === 'increment') {
    btnVar = 'outline-danger btn-lg';
    btnContent = <i className="fas fa-plus fa-5x"></i>
  } else if (delta === 'decrement') {
    btnVar = 'outline-info btn-lg';
    btnContent = <i className="fas fa-minus fa-5x"></i>;
  } else {
    btnVar = 'secondary btn-lg';
    btnContent = 'Reset'
  }

  return (
    <ButtonGroup>
      <Button
        variant = {btnVar}
        value={delta}
        required
        onClick={e => {
          const vars = {
            id: id,
            delta: delta
          };
          updateVenueCounter({ variables: vars }).catch(err => console.log(err));
        }}
      >
        {btnContent}
      </Button>
    </ButtonGroup>
  );
}

export default CounterButton;
