import React, { useEffect, useState } from 'react';
import { fireBase } from '../client';

function Counter({ id }) {
  const [counter, setCounter] = useState(0);
  const countRef = fireBase.ref(`stores/${id}/visitors`);
  useEffect(() => {
    countRef.on('value', function(snapshot) {
      setCounter(snapshot.val());
    });
  });
  return (
    <div>{counter}</div>
  );
}

export default Counter;
