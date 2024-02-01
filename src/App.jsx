import "./App.css";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default App;
