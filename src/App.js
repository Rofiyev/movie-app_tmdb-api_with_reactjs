import "./App.scss";
import 'swiper/swiper.min.css';
import './Images/logo.png';
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPage from "./config/Routes";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { createContext, useState } from "react";
import Loader from "./components/loader/Loader";

export const MyContext = createContext({});

function App() {
  const [loading, setLoading] = useState(true);
  const setLoadingStop = () => setLoading(prev => !prev);

  return (
    <MyContext.Provider value={{ setLoadingStop }}>
      <Router>
        <Header />
        {loading ? <Loader /> : <RoutesPage />}
        <Footer />
      </Router>
    </MyContext.Provider>
  );
}

export default App;