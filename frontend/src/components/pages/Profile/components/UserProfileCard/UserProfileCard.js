import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import Gravatar from 'react-gravatar';
import { selectUser } from '../../../Login/userStatusSlice';

function UserProfileCard() {
  const user = useSelector(selectUser);
  return(
    <Card style={{ width: '18rem' }}>
      <Gravatar email={user.email} className={'card-img-top'} size={180}/>
      <Card.Body>
        <Card.Title>{user.firstName} {user.lastName}</Card.Title>
        <Card.Text>
          <p><i className="far fa-envelope"></i> Email: {user.email}</p>
          <p></p>
        </Card.Text>
        <Button variant="primary">Edit Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default UserProfileCard;
