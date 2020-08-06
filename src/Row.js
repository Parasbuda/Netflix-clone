import React, { useState, useEffect } from "react"
import "./Row.css"
import instance from "./axios"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const baseUrl = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl)

      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters,
      autoplay: 1,
    },
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    }
    else {
      movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
      }).catch(error=>console.log(error))
    }
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img onClick={() => handleClick(movie)}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              
              alt={movie.name}
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"} `}
            />
          )
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
