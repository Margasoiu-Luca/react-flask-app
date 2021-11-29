import React from 'react'
import api_key from './api_key'
import { Search, Grid, Header, Segment,Image,Container } from 'semantic-ui-react'
import MovieCategoryList from './Components/MovieCategoryList'

import comedy from './images/Action.png'
import sci_fi from './images/Sci-Fi.png'
import horror from './images/Horror.png'
import romance from './images/Romance.png'
import action from './images/Action.png'
import thriller from './images/Thriller.png'
import drama from './images/Drama.png'
import mystery from './images/Mystery.png'
import crime from './images/Crime.png'
import animation from './images/Animation.png'
import adventure from './images/Adventure.png'
import fantasy from './images/Fantasy.png'


export default function CategoryPages() {
    return (
        <Container>
            <Segment compact inverted color={"yellow"}>Hello</Segment>
        <Grid doubling centered columns={4}>
            <Grid.Column>
                <Grid.Row>
                <Image href='/category/35+Comedy' src={comedy} />
                </Grid.Row>
                <Grid.Row style={{marginTop:'28px'}}>
                <Image href='/category/10749+Romance' src={romance} />
                </Grid.Row>
                <Grid.Row style={{marginTop:'28px'}}>
                <Image href='/category/18+Drama' src={drama} />
                </Grid.Row>
                <Grid.Row style={{marginTop:'28px'}}>
                <Image href='/category/16+Animation' src={animation} />
                </Grid.Row>
            </Grid.Column>

            <Grid.Column>
                <Grid.Row>
                <Image href='/category/878+Science Fiction' src={sci_fi} />
                </Grid.Row>
                <Grid.Row style={{marginTop:'28px'}}>
                <Image href='/category/28+Action' src={action} />
                </Grid.Row>
                <Grid.Row style={{marginTop:'28px'}}>
                <Image href='/category/9648+Mystery' src={mystery} />
                </Grid.Row>
                <Grid.Row style={{marginTop:'28px'}}>
                <Image href='/category/12+Adventure' src={adventure} />
                </Grid.Row>
            </Grid.Column>

            <Grid.Column>
                <Grid.Row>
                <Image href='/category/27+Horror' src={horror} />
                </Grid.Row>
                <Grid.Row style={{marginTop:'28px'}}>
                <Image href='/category/53+Thriller' src={thriller} />
                </Grid.Row>
                <Grid.Row style={{marginTop:'28px'}}>
                <Image href='/category/80+Crime' src={crime} />
                </Grid.Row>
                <Grid.Row style={{marginTop:'28px'}}>
                <Image href='/category/14+Fantasy' src={fantasy} />
                </Grid.Row>
            </Grid.Column>

            <Grid.Column>   
                <MovieCategoryList/>
            </Grid.Column>
        </Grid></Container>
    )
}
