import React from 'react'
import { useEffect, useState } from 'react'
import { Grid,Segment,Image, Embed,List, Card, Header} from 'semantic-ui-react'
import Tloader from './Tloader'

const defaultImage='https://lh3.googleusercontent.com/proxy/yUMkkU84CMsOYn906kNtDFmLg0hnjQgDLMpOMri3NmujHgUF2JI_EBf7FDD9iyTcg-Ewgk2khcTQALd304PPjIUqFasb4pgzHhEffDbTS2oqq3fx6yVh'



//This component generates the actor pages and adds the what the movie is about
export default function MovieGeneralInfo(props) {


    const id=props.movie
    const overview=props.information
    const [info, setinfo] = useState()
    //Fetches the information about the movie. That information also includes the lsit of actors, which we are itnerested ion
    async function fetchMyAPI() {
        let cast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d0110b617d68ddb4f3c453cbdf800606&language=en-US`)
        cast = await cast.json()
        setinfo([cast])
      }
    useEffect(() => {

        fetchMyAPI()
        }, [])
    
    //If not done, generate the loader. Very small and nice syntax.
    function generateActors(){
    if(!overview || !info)return <Tloader/>

    else return(
        //In retrospect, this was a bad way to approach this
        //A component should have been made instead and a map function to generate each one would have been a better way to do this
        //Other than that, what each card contains is pretty self-explanatory such as cast.name, cast.character
        <Card.Group textAlign='center' doubling itemsPerRow={6}>
            <Card color='yellow' header={`${info[0].cast[0].name}`}
            description={info[0].cast[0].character}
            image={info[0].cast[0].profile_path?`https://image.tmdb.org/t/p/original${info[0].cast[0].profile_path}`:defaultImage} 
            />
            <Card color='yellow' header={`${info[0].cast[1].name}`}
            description={info[0].cast[1].character}
            image={info[0].cast[1].profile_path?`https://image.tmdb.org/t/p/original${info[0].cast[1].profile_path}`:defaultImage} 
            />
            <Card color='yellow' header={`${info[0].cast[2].name}`}
            description={info[0].cast[2].character}
            image={info[0].cast[2].profile_path?`https://image.tmdb.org/t/p/original${info[0].cast[2].profile_path}`:defaultImage} />
            <Card color='yellow' header={`${info[0].cast[3].name}`}
            description={info[0].cast[3].character}
            image={info[0].cast[3].profile_path?`https://image.tmdb.org/t/p/original${info[0].cast[3].profile_path}`:defaultImage} 
            />
            <Card color='yellow' header={`${info[0].cast[4].name}`}
            description={info[0].cast[4].character}
            image={info[0].cast[4].profile_path?`https://image.tmdb.org/t/p/original${info[0].cast[4].profile_path}`:defaultImage} 
            />
            <Card color='yellow' header={`${info[0].cast[5].name}`}
            description={info[0].cast[5].character}
            image={info[0].cast[5].profile_path?`https://image.tmdb.org/t/p/original${info[0].cast[5].profile_path}`:defaultImage} 
            />
        </Card.Group>
    )
    }
    


    return (
        <>
        <Header textAlign='center' as='h1'>
        {/* If promise was not solved print loading else print the information */}
        {!overview?'Loading...':overview[0].overview}</Header>
        {generateActors()}
        </>
    )
}
