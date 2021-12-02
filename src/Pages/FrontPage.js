import React,{useState,useEffect} from 'react'
import MovieCard from '../Components/MovieCard'
import { Container,Grid,Segment,Image } from 'semantic-ui-react'
import MovieCarousel from '../Components/MovieCarousel'
import Tloader from '../Components/Tloader'

const resource='https://api.themoviedb.org/3/discover/movie?api_key=d0110b617d68ddb4f3c453cbdf800606&language=en-US&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&sort_by=popularity.desc'


function postMovies(x){
  //If http request not yet solved, render a loader
  console.log(x)
  if(!x)
    return(<Tloader/>)
  //Otherwise go to the moviecarousel with the movies that are to be added to the carousel as react parameters
  return(<MovieCarousel movies={x}style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}/>)

}

export default function FrontPage() {
  const [values, setValues] = useState()
    


  useEffect(() => {  async function fetchMyAPI() {
    //Fetch the resource for the most popular movies 
    let response = await fetch(resource)
    response = await response.json()
    setValues(response.results)
    } 
      fetchMyAPI()
    }, [])

  return (
    <>
    
    {postMovies(values)}
    </>
    )
}







  //