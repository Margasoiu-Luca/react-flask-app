import React,{useEffect, useState,useParams} from 'react'
import { Grid,Segment,Image, Embed} from 'semantic-ui-react'
import Tloader from './Tloader'

function generateVideo(info){
    //If the http request is not finished, return the loader
    if(!info){
        return(<Tloader/>)
    }
    //else generate a youtbe element with the tutorial
    else{
        return(<Embed id={filterForTrailer(info)} placeholder='' source='youtube'/>)
    }
}


//This function finds a trailer in a list of videos related to a movie 
//This is required because when you request the resource the recieved videos would be of many types, such as interviews, director's insights, production videos etc
function filterForTrailer(videos){
    if(videos.length==0) return ''
    const temp = videos.filter( x =>{
        console.log(x.name.includes('Trailer'))
        return x.name.includes('Trailer')===true
    })
    console.log(temp[0])
    return temp[0].key?temp[0].key:videos[0].key
}



export default function MovieVideo(props) {
    const id=props.movie
    const [movieData, setMovieData] = useState()
    async function fetchMyAPI() {
      let response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d0110b617d68ddb4f3c453cbdf800606&language=en-US`)
      response = await response.json()
      setMovieData(response.results)
    }
      useEffect(() => {
  
          fetchMyAPI()
        }, [])
    return (<>
                {/* Generate a embedded element with a youtube link */}
                {generateVideo(movieData)}
            </>
    )
}
