import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import movieData from "../data.js";

const Movie = () => {

    
    console.log(movieData)

    const [movie, setMovie] = useState({})
    const params = useParams()
    const movieId = params.id
    const getMovie = async () => {
        const data = await movieData.movies[movieId]
        setMovie(data)
    }
    useEffect(() => {
        getMovie()
    }, [])

    console.log(movie)

    // const characters = movie.main_characters.map((character) => {
    //     return (
    //         <>
    //         <h3>{character}</h3>
    //         </>
    // )})
        

    return (
        <>
        <Link to={`/`}>Back to Home Page</Link>
        <div className="movie-info">
        <div className="hero-img">
        <img src={`../images/${movie.hero_image}`} alt={'hero img'}/>
        </div>
        <h1> {movie.title} </h1>
        <h3> Episode: {movie.episode_number} </h3>
        {/* {characters} */}
        </div>
        </>
    )
}

export default Movie