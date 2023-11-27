import "./App.scss";
import "swiper/swiper.min.css";
import "./Images/logo.png";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPage from "./config/Routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
        <RoutesPage />
      <Footer />
    </Router>
  );
}

export default App;
