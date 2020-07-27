import React from "react";
import { Card, ListGroupItem, Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function MovieCard({ movie, genres }) {
  // let movie = props.movie
  if (!movie || !genres) return <div></div>;
  return (
    <div className="style-card">
      <Card style={{ width: "300px", height: "100%" }}>
        <div>
          <h3 className="col-12 color-3 pt-1">
            <img
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt=""
            />
          </h3>
          <div>
            {/* <h2 className="col-12 color-1 pb-2 style-movie">{movie.title}</h2> */}
            <h3 className="col-12 color-2 pb-2 style-average">
              {movie.vote_average}
            </h3>
            <h3 className="col-12 color-2 pb-2 style-date">
              {movie.release_date}
            </h3>
            <ListGroupItem style={{ height: "72px" }}>
              {movie.genre_ids.map((genre, index) => {
                if (index < 4)
                  return (
                    <Badge variant="danger" style={{ marginRight: "10px" }}>
                      {genres.find((item) => item.id == genre).name}
                    </Badge>
                  );
              })}
            </ListGroupItem>
          </div>
          <Button variant="success">View trailer</Button>
        </div>
      </Card>
    </div>
  );
}
