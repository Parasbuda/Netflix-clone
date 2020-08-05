import React from "react"
import "./App.css"
import Row from "./Row"
import requests from "./requests"
function App() {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanticMovies}/>
      <Row title="DOCUMENTARY" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default App
