import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Movie({id, medium_cover_image, title, summary, genres}) {
  return (
    <div>
      <img src={medium_cover_image} />
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary.length > 235? summary.slice(0, 232)+"..." : summary}</p>
      <ul>
        {genres?.map(g => <li key={id + "-" + g}>{g}</li>)}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string)

}

export default Movie