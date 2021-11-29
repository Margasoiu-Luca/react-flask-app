import React,{useEffect, useState} from 'react'
import { Grid,Segment,Image } from 'semantic-ui-react'
import {useParams} from "react-router-dom";

export default function MovieDescPage() {
    const movie_id = useParams()
    const [movieData, setMovieData] = useState()
    // async function fetchMyAPI(sortStatus) {
    //   let response = await fetch(`${resource}${category_id}${sortStatus.sortString}`)
    //   response = await response.json()
    //   setGenres([sortStatus,response.results])
    // }
    //   useEffect(() => {
  
    //       fetchMyAPI()
    //     }, [])
    return (
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column color='yellow' width={10}> 
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src='https://media.istockphoto.com/vectors/cartoon-doodles-cinema-illustration-vector-id612510676'></Image>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
