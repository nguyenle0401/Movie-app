import React from 'react'
import { Card } from "react-bootstrap";
import { Container, Row } from "react-bootstrap"


export default function MovieCard(props) {
    let movie = props.movie
    return (
        <Container>
            <Row>
                <Card style={{ width: '35rem', height: "35rem" }} className="card-style1 row justify-content-center text-center">
                    <div>
                        <h2 className="col-12 color-1 pb-5">{movie.title}</h2>
                        <h3 className="col-12 color-2 pb-5">{movie.popularity}</h3>
                        <h3 className="col-12 color-2 pb-5">{movie.release_date}</h3>
                        <h3 className="col-12 color-3"><img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" /></h3>
                    </div>
                </Card>
               
            </Row>

        </Container>

    )
}

