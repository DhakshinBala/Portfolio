import React, { useState, useEffect } from "react";
import Preloader from "../src/components/preloader/Preloader";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./Context/theme";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [{ themename }] = React.useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${themename} app`}>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
