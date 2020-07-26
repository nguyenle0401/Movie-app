import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

export default function MovieBoard(props) {
  let movieList = props.movieList;
  if (movieList.length === 0) return null;
  let numberOfRows = Math.floor(movieList.length / 4);
  if (movieList.length % 4 !== 0) numberOfRows++;
  console.log(numberOfRows)
  var rowsArray = Array.from(Array(numberOfRows).keys())
  console.log("ahhadf")
  return (
    <Container fluid>
      {
        movieList.length > 3?rowsArray.map((_, i) => {
            let subArr = movieList.slice(i*4, i*4 + 4);
            console.log(subArr)
            return <Row>
                      {subArr.map((item) =>  <Col><MovieCard movie={item} /></Col>)}
                  </Row>
          })
        : <Row>
            {movieList.map((item) => {
              return <Col>
                <MovieCard movie={item} />
              </Col>
            })}
          </Row>
      }
    </Container>
  );
}
