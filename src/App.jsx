import "./App.css";
import "./fonts.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
// import Home from "./Pages/Home/Homescreen";
import AboutMe from "./Pages/Home/AboutMe";
import ContactMe from "./Pages/Home/ContactMe";
import Footer from "./Pages/Home/Footer";
import Profile from "./Pages/Home/Profile";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import MySkills from "./Pages/Home/MySkills";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="window-size">
            <Profile />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <ContactMe />
          </div>
          <Footer />
          {/* <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
