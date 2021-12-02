//This component ended up as unused
//It was supposed to be a componnet to contain a recommended movie based on the movie you are looking at 



import React from 'react'
import { Card, Icon, Rating } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='certificate ' />
    <Rating defaultRating={3} maxRating={5} disabled />
  </a>
)

const CardExampleCardProps = () => (
  <Card style ={{maxWidth:'150'}}
    image='https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg'
    header='Elliot Baker'
    meta='Action'
    description='WW1 Movie where soldier needs to do the deed'
    extra={extra}
    
  />
)

export default CardExampleCardProps