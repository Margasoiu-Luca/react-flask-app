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
  //values is the array of movies by genre 
  //while fetch is resolving we return loader
  if(!values){
      return(
        <Tloader/>  
      )
  }
  //after fetch is done the value passed is an array of movies, with which we generate a card for each
  else{
    return(
      values.map((x,index) =>
       <GenrePageCard  key={x.id} items={x}></GenrePageCard>)
    )
  }
}

//Component generates the movies of a specific genre on a page
export default function GenrePage() {
  //category id of genre is passed in the url
    const category = useParams()
    const category_id = category.id.substring(0, category.id.indexOf('+'))
    //sort is by default nothing, three is no type of sorty at the begining. the sort_by=popularity.desc is the default type of sort on this api method and needs to be passed
    const [genres, setGenres] = useState([{sort:"",sortString:"&sort_by=popularity.desc"}])

    async function fetchMyAPI(sortStatus) {
      //Fatches the movie with the base url, the category_id which is actualyl genre type, and finally sorts it in a way
    let response = await fetch(`${resource}${category_id}${sortStatus.sortString}`)
    response = await response.json()
    //Setgenres here will force a render after because the state was changed, which is the intended feature
    setGenres([sortStatus,response.results])
  }
  //useEffect is called after the first render. The second argument passed to this hook, '[]' says that is should ONLY trigger on the first render.
    useEffect(() => {

        fetchMyAPI(genres[0])
      }, [])
    console.log(genres[1])
      //Changes the state sort status, and also changes the sort type. When FetchMyApi is called a new state is alos generated with the argument passed
    function changeSort(){ 
      //Two different types of sorts, depending on what the state is like
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
          {/* generates the list of movies of this specific genre. if none, nothing is generated */}
          {generateCards(genres[1])}
        </Grid>
      </>
    )
}
