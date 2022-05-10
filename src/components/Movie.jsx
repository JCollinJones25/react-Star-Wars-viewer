import { Link } from "react-router-dom";


const Movie = (props) => {



    return (
        <>
        <Link to={`/`}>Back to Home Page</Link>
        <h1> {props.title} </h1>
        </>
    )
}

export default Movie