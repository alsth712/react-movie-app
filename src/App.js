import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // async-await 를 then보다 많이 사용하므로, async-await을 사용하기 위해서 getMovies 라는 함수를 만들어줄 것
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...⏰</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <h5>
                year : {movie.year} / rating : ⭐{movie.rating}
              </h5>
              <p>{movie.summary}</p>
              {movie.hasOwnProperty("genres") ? (
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
