import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate, BrowserRouter } from "react-router-dom";






//
export default function MovieCarousel(props) {
    function goTo(e,data){
        console.log(data)
        navigate(`/movie/${data.key}`)
    }
    
    const navigate = useNavigate()
    function add(movies){
        return(
            movies.map(movie =>
                <div href={`/movie/${movie.id}`} key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                    <p className="legend">
                        <p style={{fontWeight:'bold'}}>{`${movie.title} `}</p>
                        {`${movie.release_date.substr(0,3)}  ${movie.overview.substr(0, movie.overview.indexOf('.')+1)}`}
                        </p>
                </div>
            )
        )
    }
    return (
        <Carousel onClickItem={goTo} style={{ maxHeight: 150}} width={"100%"} >
            {add(props.movies)}
            </Carousel>
    )
}

{/* <div>
<img  src="https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg" />
<p className="legend">1917</p>
</div>
<div>
<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
<p className="legend">Legend 2</p>
<p className="legend" style={{position:'absolute'}}>Legend 23</p>
</div>
<div>
<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
<p className="legend">Legend 3</p>
</div> */}