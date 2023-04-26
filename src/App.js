import "./App.scss";
import 'swiper/swiper.min.css';
import './Images/logo.png';
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPage from "./config/Routes";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MyContext from "./components/Context";
import { useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  
  return (
    <MyContext.Provider value={{ setLoading }}>
      <Router>
        <Header />
        {loading ? <Loader /> : <RoutesPage />}
        <Footer />
      </Router>
    </MyContext.Provider>
  );
}

export default App;