import React from 'react'
import { Card, Icon, Image, Dimmer, Loader,Rating } from 'semantic-ui-react'

const defaultImage='https://media.istockphoto.com/vectors/cartoon-doodles-cinema-illustration-vector-id612510676'


//This component generates a card that  
export default function GenrePageCard(props){
  const items =props.items
    return(
  <Card color="yellow" style={{marginLeft:'10px', maxWidth:'250px',backgroundColor:"yellow"}} href={`/movie/${items.id}`}>
    <Card.Content textAlign='center'>
      <Card.Header>{items.title}</Card.Header>
    </Card.Content>
    {/* if there is no poster for the movie, make the image the default one. Not doing this would lead to errors */}
    <Image src={items.poster_path ? `https://image.tmdb.org/t/p/original${items.poster_path}`:defaultImage} wrapped ui={false} />

    <Card.Content>
      <Card.Meta textAlign='center'>
        {/* From the date, only add the first 4 characters which are the year */}
        <span className='date'>{items.release_date.substring(0,4)}</span>
      </Card.Meta>
      <Card.Description>
        {items.overview}
      </Card.Description>
    </Card.Content>
    <Card.Content textAlign='center' extra>
      {/* Viewing the average rating  from the users is not yet implemented */}
    <Rating defaultRating={0} maxRating={5} disabled />
    </Card.Content>
  </Card>
    )
}