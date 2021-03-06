import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Load";
import styles from "../styles/Home.module.css";

function Home() {
  // state
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async-await 를 then보다 많이 사용하므로, async-await을 사용하기 위해서 getMovies 라는 함수를 만들어줄 것
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=5&sort_by=download_count&limit=14`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  // useEffect
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

export default Home;
