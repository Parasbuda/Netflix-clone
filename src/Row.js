import React, { useState, useEffect } from "react"
import "./Row.css"
import instance from "./axios"

const baseUrl = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl)
      console.table(request.data.results)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies)
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.name}
              key={movie.id}
              className="row_poster"
            />
          )
        })}
      </div>
    </div>
  )
}

export default Row
