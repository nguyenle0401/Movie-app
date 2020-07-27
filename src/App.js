// import React from 'react';
// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import FilterBoard from "./components/FilterBoard";
import MovieBoard from "./components/MovieBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel } from "react-bootstrap";
import { Nav, Navbar, Form, NavDropdown, FormControl } from "react-bootstrap";
import Pagination from "react-js-pagination";
import "react-input-range/lib/css/index.css";
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/core";
import Filter from "./components/FilterBoard";

const apikey = process.env.REACT_APP_APIKEY;
export default function App() {
  let [movieList, setMovieList] = useState(null);
  let [originList, setOriginList] = useState(null);
  let [activePage, setActivePage] = useState(1);
  let [year, setYear] = useState({ min: 1980, max: 2020 });
  let [rating, setRating] = useState({ min: 0, max: 10 });

  const callMovies = async (page) => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=${page}`;
    let result = await fetch(url);
    let data = await result.json();
    console.log("data", data);
    setOriginList(data.results);
    setMovieList(data.results);
  };

  const callTopRateMovies = async (page) => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=${page}`;
    let result = await fetch(url);
    let data = await result.json();
    console.log("data", data);
    setOriginList(data.results);
    setMovieList(data.results);
  };
  //Search by keyword
  function searchByKeyword(keySearch) {
    let filterMovie = originList.filter((movie) =>
      movie.title.includes(keySearch.target.value)
    );

    setMovieList(filterMovie);
  }
  // Load more
  function loadMore(numPage) {
    callMovies(numPage);
    setActivePage(numPage);
  }
  // Sort by Source
  function nowPlaying() {
    callMovies();
  }
  function topRated() {
    callTopRateMovies();
  }
  //Sort Popularity
  function lowToHigh() {
    let a = originList
      .sort((a, b) => {
        return a.popularity - b.popularity;
      })
      .map((x) => x);
    console.log("LowToHigh");
    console.log(a);
    setMovieList(a);
  }

  function highToLow() {
    let a = originList.sort((a, b) => b.popularity - a.popularity);
    console.log("HighToLow");
    console.log(a);
    setMovieList(a);
  }

  //Sort by Rating
  function lowToHighR() {
    let a = originList
      .sort((a, b) => {
        return a.vote_average - b.vote_average;
      })
      .map((x) => x);
    console.log("LowToHighR");
    console.log(a);
    setMovieList(a);
  }

  function highToLowR() {
    let a = originList.sort((a, b) => b.vote_average - a.vote_average);
    console.log("HighToLowR");
    console.log(a);
    setMovieList(a);
  }

  //Range Rating
  const filterByRate  = (value) => {
    let filteredList = originList.filter(
      (movie) => movie.vote_average > value.min && movie.vote_average < value.max
    )
    setRating(value)
    setMovieList(filteredList)
  }
  //Range Year
  const filterByYear = (value) => {
    let filteredList = originList.filter((movie) => {
      let year = parseInt(movie.release_date.split("-")[0]);
      return year > value.min && year < value.max;
    });
    setYear(value);
    setMovieList(filteredList);
  };

  //

  useEffect(() => {
    callMovies();
  }, []);

  //
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  if (movieList == null) {
    return (
      <div className="sweet-loading style-loading">
        <CircleLoader css={override} size={150} color={"green"} />
      </div>
    );
  }

  return (
    <div className="body-bg">
      <div className="header-fixed">
        <Navbar bg="warning" expand="lg">
          <Navbar.Brand href="#home" className = "style-title">Nguyen Xine</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto dflex justify-center">
              <NavDropdown title="Search by Source" id="basic-nav">
                <NavDropdown.Item
                  href="#action/3.1"
                  value="1"
                  onClick={() => nowPlaying()}
                >
                  Currently Playing
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  value="2"
                  onClick={() => topRated()}
                >
                  Top Rated
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Sort by Rating " id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => highToLowR()}
                >
                  High to Low
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => lowToHighR()}
                >
                  Low to High
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Sort by Popularity " id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => highToLow()}
                >
                  High to Low
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => lowToHigh()}
                >
                  Low to High
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(keySearch) => searchByKeyword(keySearch)}
              />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div
        className="container-fluid  my-auto"
        style={{ "padding-top": "100px", top: "200px" }}
      >
        {/* <div style={{"display": "flex", 'justifyContent': 'space-between'}}> */}
        <FilterBoard
          filterByYear={filterByYear}
          filterByRate={filterByRate}
          year={year}
          rating={rating}
        />
        {/* </div> */}
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            <div>
              <MovieBoard movieList={movieList} />
              {console.log("fgf", movieList)}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={(numPage) => loadMore(numPage)}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
}
