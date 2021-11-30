import React,{useState, useEffect} from 'react'
import Tloader from './Tloader';
import Review from './Review';


export default function GenerateAllReviews(props) {
    const [reviews, setReviews] = useState('')
    async function fetchMyAPI() {
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
        if(reviews=='') return <Tloader/>
        else if(reviews==undefined) return 
        else return(
            reviews.map(review =><Review data={review}/>)

        )
    }
    return (
        <div>
            {generateReviews()}
        </div>
    )
}
