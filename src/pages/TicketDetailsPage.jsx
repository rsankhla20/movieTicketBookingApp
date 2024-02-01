// TicketDetailsPage.js
import React, { useEffect, useState } from "react";

const TicketDetailsPage = () => {
  const [bookedTickets, setBookedTickets] = useState([]);

  useEffect(() => {
    // Fetch booked tickets from local storage or your API
    const storedTickets =
      JSON.parse(localStorage.getItem("BookedTicket")) || [];
    setBookedTickets(storedTickets);
  }, []);

  return (
    <div>
      <h1>Booked Tickets</h1>
      {Array.isArray(bookedTickets) && bookedTickets.length === 0 ? (
        <p>No tickets booked yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Movie</th>
              <th>Number of Tickets</th>
            </tr>
          </thead>
          <tbody>
            {bookedTickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.name}</td>
                <td>{ticket.email}</td>
                <td>{ticket.movie}</td>
                <td>{ticket.ticket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TicketDetailsPage;
