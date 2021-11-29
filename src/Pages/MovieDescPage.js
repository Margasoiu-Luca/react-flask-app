import React,{useEffect, useState} from 'react'
import { Grid,Segment,Image, Header,List,Button,Rating} from 'semantic-ui-react'
import {useParams} from "react-router-dom";
import MovieVideo from '../Components/MovieVideo';
import Tloader from '../Components/Tloader';
import MovieGeneralInfo from '../Components/MovieGeneralInfo';
import ReviewInput from '../Components/ReviewInput';



export default function MovieDescPage() {
    const movie_id = useParams()
    const [movieInfo, setmovieInfo] = useState()  
    async function fetchMyAPI() {
        const resource=`https://api.themoviedb.org/3/movie/${movie_id.id}?api_key=d0110b617d68ddb4f3c453cbdf800606&language=en-US`
        let response = await fetch(resource)
        response = await response.json()
        setmovieInfo([response])
      }
    useEffect(() => {

        fetchMyAPI()
        }, [])

    function generateInformation(){
        if(!movieInfo) return (<Tloader/>)
        else{
            return(
                <Image src={`https://image.tmdb.org/t/p/original/${movieInfo[0].poster_path}`}/>)
        }
    }
        
    return (
        <Grid >
            <Segment inverted color='yellow'><Header as='h2'>{!movieInfo?'Loading':movieInfo[0].title}</Header></Segment>
            <Grid.Row color='yellow' centered columns={2}>
                <Grid.Column color='yellow' width='4' largeScreen='4'>
                    {generateInformation()}
                </Grid.Column>
                <Grid.Column color='yellow' width='10' largeScreen='10'> 
                    <MovieVideo movie={movie_id.id}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row color='yellow'>
                <MovieGeneralInfo movie={movie_id.id} information={movieInfo}/>
            </Grid.Row>
            <Grid.Row color='yellow' >
            <ReviewInput></ReviewInput></Grid.Row>
            <Grid.Row color='yellow'> 
                <List style={{float:'right '}} horizontal>
                    <List.Item>
                        <Button>Send Review</Button>
                    </List.Item>
                    <List.Item><Rating maxRating={5} clearable />
                    </List.Item>
                </List>
            </Grid.Row>
        </Grid>
    )
}
