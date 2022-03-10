import PropTypes from "prop-types";

function Movie({ coverImg, title, year, rating, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <h5>
        year : {year} / rating : ⭐{rating}
      </h5>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

// movie compoment의 PropTypes 설정
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  // genres 의 경우 string을 가진 array
};

export default Movie;
