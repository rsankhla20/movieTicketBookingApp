import { useEffect, useState } from "react";
import { Card } from "../components";
import { useDispatch } from "react-redux";
import { setAllData, setBookingData } from "../store/dataSlice";
import "./home.css"; // Import the CSS file for styling

const Home = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const result = await response.json();
        setData(result);
        dispatch(setAllData(result));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("BookedTicketData"));
    dispatch(setBookingData(bookingData));
  }, []);

  return (
    <div className="card-grid">
      {data.map((post, index) => (
        <Card key={index} {...post} />
      ))}
    </div>
  );
};

export default Home;
