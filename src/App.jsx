import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import HomePages from "./pages/Home/HomePages";
import NavbarComp from "./components/NavbarComp";
import LangPages from "./pages/Lang/LangPages";
import ErrorPages from "./pages/error/ErrorPages";
import HistoryPages from "./pages/History/HistoryPages";
import AdatBudayaPages from "./pages/Adat&Budaya/AdatBudayaPages";
import MuseumPages from "./pages/Museum/MuseumPages";
import EventPages from "./pages/Event/EventPages";
import ButtonSideBarComp from "./components/ButtonSideBarComp";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showButtonSida, setShowButtonSida] = useState(false);

  const allowPath = [
    "/",
    "/bahasa-sasak",
    "/cerita-rakyat",
    "/adat-budaya",
    "/museum",
    "/event",
  ];
  const location = useLocation();

  useEffect(() => {
    if (allowPath.includes(location.pathname)) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (
      allowPath.includes(location.pathname) &&
      location.pathname !== "/bahasa-sasak"
    ) {
      setShowButtonSida(true);
    } else {
      setShowButtonSida(false);
    }
  }, [location.pathname]);

  return (
    <>
      {showNavbar && <NavbarComp />}
      {showButtonSida && <ButtonSideBarComp />}
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/bahasa-sasak" element={<LangPages />} />
        <Route path="/cerita-rakyat" element={<HistoryPages />} />
        <Route path="/adat-budaya" element={<AdatBudayaPages />} />
        <Route path="/museum" element={<MuseumPages />} />
        <Route path="/event" element={<EventPages />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
    </>
  );
}

export default App;
