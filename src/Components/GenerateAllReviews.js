import React,{useState, useEffect} from 'react'
import Tloader from './Tloader';
import Review from './Review';


//This component, as it name states, generates all props

export default function GenerateAllReviews(props) {
    const [reviews, setReviews] = useState('')
    async function fetchMyAPI() {
        //fetch the local flask api for reviews with 
        //method is a GET and it takes an url param 
        //returns a list of reviews for the movie id or returns status code 204 for no reviews
        const resource = `http://localhost:5000/api/review/${props.movie}`
        let response = await fetch(resource);
        const status = response.status
        if(status==204){
        setReviews(undefined);
        }
        else{
            response = await response.json()
            setReviews(response);
        }
      }
      useEffect(() => {
        fetchMyAPI();
      }, []);

    function generateReviews(){
        //if the reviews state is equal to the default state value, then it means that the 
        //promise is not yet finished and it is loading
        //Therefore we show the loader
        if(reviews=='') return <Tloader/>
        //if the reviews state is undefined, it means that the async fetch finished
        //however there's no reviews for that movie (204 http status code), in this case no review gets generated
        else if(reviews==undefined) return 
        //Otherwise, it means that tere is a number of reviews greater than one. 
        //For this we call the map method to return a <Review/> component for each of the reviews that has been generated
        else return(
            reviews.map(review =><Review data={review}/>)

        )
    }
    return (
        <div>
            {/* Check the generateReviews Function */}
            {generateReviews()}
        </div>
    )
}
