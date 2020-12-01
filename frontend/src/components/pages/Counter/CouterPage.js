import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import ownVenues from '../../../client/api/queries/own-venues';
import CounterButton from '../../Counter/CounterButton'
import Counter from '../../VenueCardDeck/components/Counter/Counter'

function CouterPage() {
  const { loading, error, data } = useQuery(ownVenues);
  let { id } = useParams();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(id)

  const vl = data.listOwnVenues.map((venue) => {
    if(id === venue.id) {
         return (
      <>
      <Row key={venue.id} xs={1} style={{height: "25vh"}}>
        <CounterButton id={venue.id} delta='increment'/>        
      </Row>
      <Row key={Math.random()} className="justify-content-md-center" style={{height: "15vh", widht: "40%"}}>
        <div>{venue.name}</div>
        <Counter id={venue.id} maxCapacity={venue.maxCapacity}/>        
      </Row>
      <Row key={Math.random()} xs={1} style={{height: "25vh"}}>
        <CounterButton id={venue.id} delta='decrement'/>
      </Row>
      <Row key={Math.random()} className="justify-content-md-center" style={{height: "15vh"}}>
        <CounterButton id={venue.id} delta='reset'/>
      </Row>
      </>
    ) 
    }

  })

  return(
    <div>
      {vl}
    </div>
  )

  // const [favorite, setFavorite] = useState(false);

  // useEffect(() => {
    
  // }, [favorite])

}

export default CouterPage;
