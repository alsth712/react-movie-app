import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";

// main 화면 movie 단
function Movie({
  id,
  backImg,
  coverImg,
  title,
  year,
  rating,
  summary,
  genres,
}) {
  return (
    <div className={styles.eachMovieBox}>
      <img className={styles.movie__img} src={coverImg} alt={title} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h5 className={styles.movie__year}>year : {year}</h5>
      <h5 className={styles.movie__rate}>rating : ⭐{rating}</h5>
      <p className={styles.movie__summary}>
        {summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}
      </p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}&nbsp;</li>
        ))}
      </ul>
    </div>
  );
}

// movie compoment의 PropTypes 설정
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  // genres 의 경우 string을 가진 array
};

export default Movie;
