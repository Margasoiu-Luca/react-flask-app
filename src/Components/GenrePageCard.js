import React from 'react'
import { Card, Icon, Image, Dimmer, Loader,Rating } from 'semantic-ui-react'

const defaultImage='https://media.istockphoto.com/vectors/cartoon-doodles-cinema-illustration-vector-id612510676'

export default function GenrePageCard(props){
  const items =props.items
    return(
  <Card color="yellow" style={{marginLeft:'10px', maxWidth:'250px',backgroundColor:"yellow"}} href={`/movie/${items.id}`}>
    <Card.Content textAlign='center'>
      <Card.Header>{items.title}</Card.Header>
    </Card.Content>
    <Image src={items.poster_path ? `https://image.tmdb.org/t/p/original${items.poster_path}`:defaultImage} wrapped ui={false} />

    <Card.Content>
      <Card.Meta textAlign='center'>
        <span className='date'>{items.release_date.substring(0,4)}</span>
      </Card.Meta>
      <Card.Description>
        {items.overview}
      </Card.Description>
    </Card.Content>
    <Card.Content textAlign='center' extra>
    <Rating defaultRating={0} maxRating={5} disabled />
    </Card.Content>
  </Card>
    )
}