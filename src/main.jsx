import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Home,
  Contact,
  MovieDetails,
  TicketDetailsPage,
} from "./pages/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movie/:movieid",
        element: <MovieDetails />,
      },
      {
        path: "/booked-tickets",
        element: <TicketDetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
