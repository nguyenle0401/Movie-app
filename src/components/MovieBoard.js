import React from "react";
import MovieCard from "./MovieCard";
import { Container } from "react-bootstrap";

export default function MovieBoard({ movieList, genres }) {
  return (
    <Container>
      <div className=" d-flex justify-content-center flex-wrap">
        {movieList.map((item) => {
          return <MovieCard movie={item} genres={genres} />;
        })}
      </div>
    </Container>
  );
}
