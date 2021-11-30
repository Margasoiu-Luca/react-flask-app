import React, { useRef } from "react";
import {
  Grid,
  Segment,
  TextArea,
  Form,
  Header,
  Rating,
  Button,
} from "semantic-ui-react";

export default function ReviewInput(params) {
  let curRating = useRef();
  let reviewText = useRef();
  const movieId=params.movie

  async function sendReview(e, data) {
    const r=curRating.current.state.rating?curRating.current.state.rating:1
    const t=reviewText.current.ref.current.value
    const uName= localStorage.getItem('movieUser')
    const url = `http://localhost:5000/api/review`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({"text":t,"rating":r,"user_name":uName,'to_movie':movieId})
    }
    let query = await fetch(url,options)
    console.log(query.status)
    query = await query.json()

  }

  return (
    <>
      <Form style={{ width: "100%", fontSize: "20px" }}>
        <Segment compact style={{ color: "black" }}>
          Leave a review!
        </Segment>
        <TextArea
          ref={reviewText}
          style={{ minHeight: 200 }}
          placeholder="Tell us what you think about this movie"
        />
      </Form>
      <div>
        <Rating ref={curRating} maxRating={5} clearable />
        <Button onClick={sendReview}>Send Review</Button>
      </div>
    </>
  );
}
