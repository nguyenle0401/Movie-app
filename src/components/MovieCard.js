import React from 'react'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";



export default function MovieCard(props) {
    let movie = props.movie
    if (!movie) return <div></div>
    return (
<div className = "style-card">


        <Card style={{ width: '100%', height: "100%" }}>
            <div>
                <h3 className="col-12 color-3 pt-1"><img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" /></h3>
                <div>
                <h2 className="col-12 color-1 pb-2 style-movie">{movie.title}</h2>
                <h3 className="col-12 color-2 pb-2 style-average">{movie.vote_average}</h3>
                <h3 className="col-12 color-2 pb-2 style-date">{movie.release_date}</h3>
                </div>
                <Button variant="success">Overview</Button>

            </div>
        </Card>
        </div>

    )
}

