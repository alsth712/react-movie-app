import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

// HOME, menu bar
function Navbar() {
  return (
    <header>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link className={styles.home} to={`/`}>
              sofilx
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={`/movie/highRating`}>
              High Rating
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={`/movie/action`}>
              Action
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={`/movie/animation`}>
              Animation
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={`/movie/music`}>
              Music
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
