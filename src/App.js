// import React from 'react';
// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';
import MovieCard from './components/MovieCard'
import MovieBoard from './components/MovieBoard'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Nav, Navbar, Form, NavDropdown, FormControl } from "react-bootstrap";




const apikey = process.env.REACT_APP_APIKEY
export default function App() {
    let [movieList, setMovieList] = useState(null)
   

    const callMovie = async () => {
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`
        let result = await fetch(url)
        let data = await result.json()
        console.log("data", data)

        setMovieList(data.results)
    }


    let searchByKeyword = (keysearch) => {




    }

    useEffect(() => {
        callMovie()
    }, [])

    if (movieList == null) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <div>
            <h1 className="row justify-content-center text-center">Nguyen Cinema</h1>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(keysearch) => searchByKeyword(keysearch)} />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className="container-fluid  my-auto">
                <div className="container mx-auto my-4 py-4">
                    <div className="row justify-content-center text-center">
                        <div>
                            {movieList.map(item => {
                                return (<MovieCard movie={item} />)
                            })}
                            <MovieBoard movieList={movieList} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

