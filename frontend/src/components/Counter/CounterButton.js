import React from 'react';
import { useMutation } from '@apollo/client';
import { Button, ButtonGroup } from 'react-bootstrap';
import COUNTER from '../../client/api/queries/counter';

const CounterButton = ({id, delta}) => {
  const [updateVenueCounter] = useMutation(COUNTER);
  console.log(id, delta)
  return (
    <ButtonGroup>
      <Button
        variant = {delta==='increment'? "outline-danger": delta==="decrement"? "outline-info":"secondary"}
        value={delta}
        required
        onClick={e => {
          const vars = {
            id: id,
            delta: delta
          };
          updateVenueCounter({ variables: vars }).then(data => console.log(data)).catch(err => console.log(err));
        }}
      >
        {delta==='increment'? "+": delta==="decrement"?"-":"reset"}
      </Button>
    </ButtonGroup>
  );
}

export default CounterButton;
