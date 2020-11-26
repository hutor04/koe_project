import React from 'react';
import { useMutation } from '@apollo/client';
import COUNTER from '../../../../client/api/queries/counter';

function CounterButton({id, delta}) {
  const [updateVenueCounter] = useMutation(COUNTER);
console.log(id, delta)
  return (
    <div>
      <button
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
            {delta==='increment'? "+": "-"} 
        </button>
    </div>
  );
}

export default CounterButton;
