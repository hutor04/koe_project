import React, {useState} from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import {Alert, Button, ButtonGroup } from 'react-bootstrap';
import DELETE_VENUE from '../../client/api/queries/deleteVenue';
import ownVenues from '../../client/api/queries/own-venues'

const  DeleteVenue = ({ id }) => {
  const [deleteVenue] = useMutation(DELETE_VENUE);
  const [show, setShow] = useState(false);
  const client = useApolloClient();

  const clickHandler = e => {
    const vars = {
      id: id,
    };
    deleteVenue({ variables: vars })
      .then(() => {
        const { listOwnVenues } = client.readQuery({query: ownVenues});
        const filteredList = listOwnVenues.filter(el => el.id !== id);
        client.writeQuery({query: ownVenues, data: {listOwnVenues: [...filteredList]}});
      })
      .catch(err => console.log(err));
  }
  return (
    <ButtonGroup>
      <Alert show={show} variant="danger">
        Are you sure you want to delete this venue?
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-secondary">
            No
          </Button>
          <Button onClick={clickHandler} variant="danger">
            Delete
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Delete</Button>}
    </ButtonGroup>
  );
}

export default DeleteVenue;
