import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "./BookTicketForm.css";
import { useSelector } from "react-redux";

const BookTicketForm = (data) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const bookingData = useSelector((state) => state.movieData.bookingData);

  const bookTicket = (formData) => {
    setError("");
    try {
      const newData = Array.isArray(bookingData)
        ? [...bookingData, formData]
        : [formData];
      localStorage.setItem("BookedTicketData", JSON.stringify(newData));
      console.log("form data is ", formData);
      navigate("/booked-tickets");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="booking-card">
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit(bookTicket)}>
        <div>
          <label htmlFor="movie">Movie:</label>
          <input
            type="text"
            id="movie"
            readOnly
            {...register("movie", { required: true })}
            value={data.show.name}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="error-message">Name is required</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email address"
            {...register("email", {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email && (
            <p className="error-message">Invalid email address</p>
          )}
        </div>
        <div>
          <label htmlFor="ticket">Number of tickets:</label>
          <input
            type="number"
            id="ticket"
            placeholder="Enter number of tickets you want to book"
            {...register("ticket", { required: true, min: 1, max: 6 })}
          />
          {errors.ticket && (
            <p className="error-message">You can book maximum 6 tickets only</p>
          )}
        </div>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default BookTicketForm;
