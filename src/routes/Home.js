import { useEffect, useState } from "react"
import Movie from "../components/movieapp/Movie"

const API = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'

function Home() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    const { data } = await (await fetch(API)).json()
    setMovies(data.movies)
    setLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      {loading?
      <h1>Loading...</h1> :
      <div>{movies.map(movie => 
        <Movie { ...movie } key={movie.id} />
        )}</div>}
    </div>
  )
}

export default Home