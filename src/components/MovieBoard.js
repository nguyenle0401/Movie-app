import React from "react"
import MovieCard from './MovieCard'

export default function MovieBoard(props) {
    let movieList = props.movieList
    return (
        <div>
            {movieList.map(item =>{
                return(<MovieCard movie ={item}/>
                
            )})}
           
        </div>
    )
}
