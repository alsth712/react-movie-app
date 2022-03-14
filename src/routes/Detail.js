// useParams 은 react-router-dom에서 제공하는 함수로 url에 있는 변수 값을 반환
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();
  // await는 async함수 내부에 있어야만 함
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Detail</h1>
      ) : (
        <div>
          <div>navbar 만들기 ~ 홈, about, detail 이렇게 !</div>
          <img src={detail.large_cover_image} alt={detail.title} />
          <h1>{detail.title}</h1>
          <h3>year : {detail.year}</h3>
          <div>
            genres :
            {detail.genres.map((g) => (
              <span key={g}> {g} | </span>
            ))}
          </div>
          <p>{detail.description_intro}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
