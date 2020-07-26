import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

export default function MovieBoard(props) {
  let movieList = props.movieList;
  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            {movieList.map((item, index) => {
                if(index%4===0)
                    return <MovieCard movie={item} />;
                else return null;
            })}
          </div>
        </Col>
        <Col>
          <div>
            {movieList.map((item, index) => {
                if(index%4===1)
              return <MovieCard movie={item} />;
              else return null;
            })}
          </div>
        </Col>
        <Col>
          <div>
            {movieList.map((item, index) => {
                if(index%4===2)
              return <MovieCard movie={item} />;
              else return null;
            })}
          </div>
        </Col>
        <Col>
          <div>
            {movieList.map((item, index) => {
                if(index%4===3)
              return <MovieCard movie={item} />;
              else return null;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
