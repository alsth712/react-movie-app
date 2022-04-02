import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Load";
import Movie from "../components/Movie";
import styles from "../styles/Home.module.css";

function Genre({ genre }) {
  // state
  // const genre = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=5&sort_by=download_count&genre=${genre}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              backImg={movie.background_image}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Genre;
