import { Link } from "react-router-dom";

// HOME, menu bar
function Navbar() {
  return (
    <header>
      <div>
        <Link to={`/`}>sofilx</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={`/movie/highRating`}>High Rating</Link>
          </li>
          <li>
            <Link to={`/movie/action`}>Action</Link>
          </li>
          <li>
            <Link to={`/movie/animation`}>Animation</Link>
          </li>
          <li>
            <Link to={`/movie/music`}>Music</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
