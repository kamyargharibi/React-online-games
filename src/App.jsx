import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import GamesInfo from "./Pages/GamesInfo";
import Browser from "./Pages/Browser";
import Search from "./Pages/Search";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BrowserGame from "./Pages/BrowserGame";
import PcGames from "./Pages/PcGames";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  // Change body direction with current i18n.dir()
  document.body.dir = i18n.dir();

  return (
    <>
      <BrowserRouter>
        <div className="flex min-h-[100vh] w-full flex-col bg-primary-light dark:bg-secondry-dark">
          {/* Navbar Component */}
          <Navbar />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
            {/* Games Routes */}
            <Route path="/games" element={<Games />} />
            <Route
              path="/games/:categoryGame/:gameId"
              element={<GamesInfo />}
            />
            <Route path="/games/:categoryGame" element={<PcGames />} />
            {/* Browser Routes */}
            <Route path="/browser" element={<Browser />} />
            <Route
              path="/browser/:categoryGame/:gameId"
              element={<GamesInfo />}
            />
            <Route path="/browser/:categoryGame" element={<BrowserGame />} />
          </Routes>
          {/* Footer Component */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
