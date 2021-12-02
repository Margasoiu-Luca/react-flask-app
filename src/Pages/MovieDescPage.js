import React, { useEffect, useState, useRef } from "react";
import {
  Grid,
  Segment,
  Image,
  Header,
  List,
  Button,
  Rating,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";
import MovieVideo from "../Components/MovieVideo";
import Tloader from "../Components/Tloader";
import MovieGeneralInfo from "../Components/MovieGeneralInfo";
import ReviewInput from "../Components/ReviewInput";
import GenerateAllReviews from "../Components/GenerateAllReviews";


//This component is the endpoint for the movie description page
//It encompasses multiple 
export default function MovieDescPage() {
    //This useref variable ended up being unused
  const textInfo = useRef();
  //Getting the movie id from the url. Very important
  const movie_id = useParams();
  //The state for this component is information about the movie we are viewing right now. This is set in the useEffect hook
  const [movieInfo, setmovieInfo] = useState();
  async function fetchMyAPI() {
    const resource = `https://api.themoviedb.org/3/movie/${movie_id.id}?api_key=d0110b617d68ddb4f3c453cbdf800606&language=en-US`;
    let response = await fetch(resource);
    response = await response.json();
    setmovieInfo([response]);
  }
  useEffect(() => {
    fetchMyAPI();
  }, []);

  function generateInformation() {
    if (!movieInfo) return <Tloader />;
    else {
      return (
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieInfo[0].poster_path}`}
        />
      );
    }
  }

  return (
    <Grid>
      <Segment inverted color="yellow">
        <Header as="h2">{!movieInfo ? "Loading" : movieInfo[0].title}</Header>
      </Segment>
      <Grid.Row color="yellow" centered columns={2}>
        <Grid.Column color="yellow" width="4" largeScreen="4">
            {/* This function generates the image poster as an image, and a loader if that is not yet recieved from the api */}
          {generateInformation()}
        </Grid.Column>
        <Grid.Column color="yellow" width="10" largeScreen="10">
            {/*This component generates a list of 6 acotrs as their characters as cards together with some text about the movie*/}
          <MovieVideo movie={movie_id.id} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row color="yellow">
        <MovieGeneralInfo movie={movie_id.id} information={movieInfo} />
      </Grid.Row>
      <Grid.Row color="yellow">
        <ReviewInput movie={movie_id.id} ref={textInfo}></ReviewInput>
      </Grid.Row>
      <Grid.Row color="yellow">
            {/*This component generates all of the reviews as components and adds them to the bottom of the page. If there is no review nothing is swohn*/}
          <GenerateAllReviews movie={movie_id.id}/>
      </Grid.Row>
    </Grid>
  );
}
