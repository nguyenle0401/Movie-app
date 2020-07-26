import React from 'react'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";



export default function MovieCard(props) {
    let movie = props.movie
    return (

        <Card style={{ width: '100%', height: "100%" }} className="card-style1 row justify-content-center text-center mt-2 ">
            <div>
                <h3 className="col-12 color-3 pt-1"><img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" /></h3>
                <div>
                <h2 className="col-12 color-1 pb-3">{movie.title}</h2>
                <h3 className="col-12 color-2 pb-3">{movie.vote_average}</h3>
                <h3 className="col-12 color-2 pb-3">{movie.release_date}</h3>
                </div>
                <Button variant="primary">Go somewhere</Button>

            </div>
        </Card>


    )
}

