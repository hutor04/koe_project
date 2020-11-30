import React, { useEffect, useState } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { fireBase } from '../../../../client';

function Counter({ id, maxCapacity }) {
  const [counter, setCounter] = useState({
    count: 0,
    badgeType: 'success',
  });

  useEffect(() => {
    let mount = true;
    const countRef = fireBase.ref(`stores/${id}/visitors`);
    if (mount) {
      countRef.on('value', function(snapshot) {
        const currentVal = snapshot.val();
        if (currentVal > maxCapacity * 0.9) {
          setCounter({
            count: currentVal,
            badgeType: 'danger',
          });
        }
        if (currentVal > (maxCapacity * 0.5) && currentVal < (maxCapacity * 0.9)) {
          setCounter({
            count: currentVal,
            badgeType: 'warning',
          });
        }
        if (currentVal < maxCapacity * 0.5) {
          setCounter({
            count: currentVal,
            badgeType: 'success',
          });
        }
      });
    }
    return function cleanup() {
      countRef.off();
      mount = false;
    }
  }, [id, maxCapacity]);
  return (
    <Button variant={counter.badgeType}>
      <i className="fas fa-users"></i> <Badge variant="light">{counter.count}</Badge>
    </Button>
  );
}

export default Counter;
