import React from 'react';
import { useQuery } from '@apollo/client';
import { userInfo } from '../../client/api/queries/user';
// import { me } from '../../client/api/queries/me';
import { Form, } from 'react-bootstrap';


function ProfilePage() {
  const { loading, error, data } = useQuery(userInfo);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;



  return (
    <div>
      <div>{data.user.email}</div>
      <div>{data.user.firstName}</div>
      <div>{data.user.lastName}</div>
    </div>
  )
}

export default ProfilePage
