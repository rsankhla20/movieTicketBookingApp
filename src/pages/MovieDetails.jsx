import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BookTicketForm } from "../components";
import "./movieDetails.css"; // Import the CSS file for styling
import img3 from "../assets/img3.png";

const MovieDetails = () => {
  const { movieid } = useParams();
  const data = useSelector((state) => state.movieData.data);

  const [showForm, setShowForm] = useState(false);

  const movieDetail = data.find(
    (movie) => movie.show.id.toString() === movieid
  );

  const showBookingPage = () => {
    setShowForm(true);
  };

  const closeBookingForm = () => {
    setShowForm(false);
  };

  return (
    <div className="movie-details-container">
      <div>
        <img
          src={
            movieDetail.show.image != null
              ? movieDetail.show.image.medium
              : img3
          }
          alt="loading"
        />
      </div>
      <div className="text-info">
        <h1>
          {" "}
          <b>{movieDetail && movieDetail.show.name} </b>{" "}
        </h1>
        <p>
          {" "}
          Language: <b>{movieDetail && movieDetail.show.language}</b>
        </p>
        <p>
          {" "}
          Rating:{" "}
          <b>
            {movieDetail.show.rating.average
              ? movieDetail.show.rating.average
              : "N/A"}
          </b>
        </p>
        <p>
          Genere:{" "}
          {movieDetail.show.genres.map((genere, index) => (
            <span className="genere" key={index}>
              {genere}{" "}
            </span>
          ))}
        </p>
        <button className="btn" onClick={showBookingPage}>
          Book Ticket
        </button>
      </div>
      <div
        className="summary"
        dangerouslySetInnerHTML={{
          __html: movieDetail && movieDetail.show.summary,
        }}
      ></div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeBookingForm}>
              &times;
            </span>
            <BookTicketForm {...movieDetail} />
          </div>
        </div>
      )}

      {/* <Link to="/">Go Back to Home</Link> */}
    </div>
  );
};

export default MovieDetails;
