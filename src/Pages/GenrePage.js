import React, {useEffect, useState} from 'react'
import { Grid,Segment, Dimmer, Loader, List } from 'semantic-ui-react'
import GenrePageCard from '../Components/GenrePageCard'
import Tloader from '../Components/Tloader';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
const resource = 'https://api.themoviedb.org/3/discover/movie?api_key=d0110b617d68ddb4f3c453cbdf800606&language=en-US&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres='




function generateCards(values){
  console.log("test")
  if(!values){
      return(
        <Tloader/>  
      )
  }
  else{
    return(
      values.map((x,index) =>
       <GenrePageCard  key={x.id} items={x}></GenrePageCard>)
    )
  }
}

//Generates The gerne page with all the movie cards
export default function GenrePage() {

    const category = useParams()
    const category_id = category.id.substring(0, category.id.indexOf('+'))
    const [genres, setGenres] = useState([{sort:"",sortString:"&sort_by=popularity.desc"}])

    async function fetchMyAPI(sortStatus) {
      //Fetches the movie for the category with the id from the query params
    let response = await fetch(`${resource}${category_id}${sortStatus.sortString}`)
    response = await response.json()
    setGenres([sortStatus,response.results])
  }
    useEffect(() => {

        fetchMyAPI(genres[0])
      }, [])
    console.log(genres[1])

    function changeSort(){ 
      if(genres[0].sort!='▼'){
        let tempObject= {sort:"▼",sortString:"&sort_by=release_date.desc"}
        fetchMyAPI(tempObject)
      }
      else{
        let tempObject= {sort:"▲",sortString:"&sort_by=release_date.asc"}
        fetchMyAPI(tempObject)
      }
     }
    //
    return (
      <>
      <List style={{marginBottom:"30px"}} bulleted horizontal>
        <List.Item >{`Sort by`}</List.Item>
        <List.Item onClick={changeSort} as='a'>{`Release Date${genres[0].sort}`}</List.Item>
      </List>
        <Grid>
          {generateCards(genres[1])}
        </Grid>
      </>
    )
}
