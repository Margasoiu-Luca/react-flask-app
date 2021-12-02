import React from 'react'
import api_key from '../api_key'
import { Search, Grid, Header, Segment,Image,Container } from 'semantic-ui-react'
import MovieCategoryList from '../Components/MovieCategoryList'

import comedy from '../images/Action.png'
import sci_fi from '../images/Sci-Fi.png'
import horror from '../images/Horror.png'
import romance from '../images/Romance.png'
import action from '../images/Action.png'
import thriller from '../images/Thriller.png'
import drama from '../images/Drama.png'
import mystery from '../images/Mystery.png'
import crime from '../images/Crime.png'
import animation from '../images/Animation.png'
import adventure from '../images/Adventure.png'
import fantasy from '../images/Fantasy.png'

//This Component renders the endpoint for the Category types page
//It has two parts: a pre-defined set of images with a link to their genre movies page
//A second list of dynamically generated list of genres
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
                {/* This MovieCategoryList is generated through the movie database api */}
                <MovieCategoryList/>
            </Grid.Column>
        </Grid></Container>
    )
}
