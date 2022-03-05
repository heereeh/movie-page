import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState({})

  const { id } = useParams()
  const getAPI = id => `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  const getMovieDetail = async() => {
    const { data } = await (await fetch(getAPI(id))).json()
    
    setLoading(false)
    setMovie(data.movie)
  }

  useEffect(() => {
    getMovieDetail()
  }, [])

  return (
    <div>
      { loading?
        <h1>Loading...</h1> :
        <div>
          <img src={movie.large_cover_image} />
          <h1>{movie.title}</h1>
          <summary>{movie.language} {movie.year}</summary>
          <p>{movie.description_full}</p>
          {movie.genres?.join(', ') }
        </div>
      }
    </div>
  )
}

export default Detail