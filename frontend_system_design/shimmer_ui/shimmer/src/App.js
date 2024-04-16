import React, { Suspense, useEffect } from "react";
import Memes from "./components/without_library/Memes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Teams from "./components/Teams";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Accordion from "./components/accordion/Accordion";
import Comments from "./components/comments/Comments";
import MemesL from "./components/with_library/MemesL";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-blue-500 text-white text-center flex justify-evenly items-center">
        <nav className="px-20 m-2 w-[800px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/teams">Team </a>
          <a href="/accordion">Accordion</a>
          <a href="/comments">Nested Comments</a>
          <a href="/login">Login </a>
        </nav>
        <select
          className="bg-black text-white"
          onChange={handleLanguageChange}
          value={localStorage.getItem("i18nextLng")}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </header>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<MemesL />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<About />} />
              <Route path="/teams" element={<Teams />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
