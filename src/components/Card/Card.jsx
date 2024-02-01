import { Link } from "react-router-dom";
import "./Card.css";
import img3 from "../../assets/img3.png";

const card = (data) => {
  return (
    <Link to={`/movie/${data.show.id}`} className="movie-card">
      <div>
        <img
          src={data.show.image != null ? data.show.image.medium : img3}
          alt="loading"
        />
        <p>{data.show.name}</p>
      </div>
    </Link>
  );
};

export default card;
