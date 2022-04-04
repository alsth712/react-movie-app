// useParams 은 react-router-dom에서 제공하는 함수로 url에 있는 변수 값을 반환
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Load";
import styles from "../styles/Detail.module.css";

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

  // useEffect
  useEffect(() => {
    getMovie();
  }, []);

  // Movie Detail
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={styles.backImg}
          style={{
            background: `url(${detail.background_image})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            overflow: `hidden`,
          }}
        >
          <div className={styles.detailBox}>
            <img
              className={styles.mainImg}
              src={detail.large_cover_image}
              alt={detail.title}
            />
            <h1 className={styles.title}>{detail.title}</h1>
            <h3 className={styles.year}>year : {detail.year}</h3>
            <div className={styles.genres}>
              <ul>
                {detail.genres.map((g) => (
                  <li key={g}>🎬{g}</li>
                ))}
              </ul>
            </div>
            <p className={styles.summary}>{detail.description_intro}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
