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

  return (
    <Container fluid>
      {() => {
        if (movieList.length > 3) {
          return rowsArray.map((_, i) => {
            return <Row>
              <Col>
                <div>
                  {movieList.map((item, index) => {
                    if (index === i * 4)
                      return <MovieCard movie={item} />;
                    else return null;
                  })}
                </div>
              </Col>
              <Col>
                <div>
                  {movieList.map((item, index) => {
                    if (index === i * 4 + 1)
                      return <MovieCard movie={item} />;
                    else return null;
                  })}
                </div>
              </Col>
              <Col>
                <div>
                  {movieList.map((item, index) => {
                    if (index === i * 4 + 2)
                      return <MovieCard movie={item} />;
                    else return null;
                  })}
                </div>
              </Col>
              <Col>
                <div>
                  {movieList.map((item, index) => {
                    if (index === i * 4 + 3)
                      return <MovieCard movie={item} />;
                    else return null;
                  })}
                </div>
              </Col>
            </Row>
          })
        }
        else {
          return <Row>
            {movieList.map((item) => {
              return <Col>
                <MovieCard movie={item} />
              </Col>
            })}
          </Row>

        }
      }}
    </Container>
  );
}
