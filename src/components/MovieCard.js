import React, { useState, useEffect } from "react";

import { Modal, Card, ListGroupItem, Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import Trailer from "./Trailer";

export default function MovieCard({ movie, genres }) {
  const apikey = process.env.REACT_APP_APIKEY;
  // let movie = props.movie
  const [lgShow, setLgShow] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState(null);
  const callApiGetVideo = async () => {
    let url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apikey}&language=en-US&append_to_response=videos`;
    let respone = await fetch(url);
    let data = await respone.json();
    if (data.videos.results.length > 0) {
      setYoutubeLink(data.videos.results[0].key);
    }
    console.log(data);
  };
  const showModal = () => {
    callApiGetVideo();
    setLgShow(true);
  };
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
          <Button variant="success" onClick={() => showModal()}>
            Watch Trailer
          </Button>
          <Modal
            // className="myVideo"
            // size="xl"
            dialogClassName="modalzz"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <iframe
              className="responsive-iframe"
              src={`https://www.youtube.com/embed/${youtubeLink}`}
            ></iframe>
          </Modal>
        </div>
      </Card>
    </div>
  );
}
