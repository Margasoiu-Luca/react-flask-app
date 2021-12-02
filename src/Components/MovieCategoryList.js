import React,{useState, useEffect} from 'react'
import use_key from '../api_key'
import { List,Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'



//  generateList(genres){
//     // genres.map(genre =>{
//     //     <List.Item key={genre.name}>{genre.name}</List.Item>
//     // })
//     console.log(typeof(genres))
// }
// listItems 


//This function dynamically generates a list of genres to be added to a list element
export default function MovieCategoryList() {
    const [genres, setGenres] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
          let response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d0110b617d68ddb4f3c453cbdf800606&language=en-US')
          response = await response.json()
          console.log(response.genres)
          setGenres(response.genres)
        }
        fetchMyAPI()
      }, [])
    return (
        <Segment compact inverted color={"yellow"}>
            <List bulleted>
                <List.Header>All genres</List.Header>
                {/*  */}
                {
                    genres.map(genre =>(
                        <List.Item key={genre.id} href={`/category/${genre.id}+${genre.name}`}>{genre.name}</List.Item>
                    ))
                }
            </List>
        </Segment>
    )
}
