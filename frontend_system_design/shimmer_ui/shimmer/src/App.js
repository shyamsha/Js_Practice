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
import Slider from "./components/slider/Slider";
import NestedSelect from "./components/Select/NestedSelect";
import FeatureFlagEnable from "./components/feature-flag/FeatureFlagEnable";
import UseFeatureFlagContextProvider from "./components/feature-flag/UseFeatureFlagContextProvider";
import Product from "./components/pagination/Product";

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
        <nav className="px-15 m-2 w-[800px] flex justify-between text-lg">
          <a className="pr-4" href="/">
            Home{" "}
          </a>
          <a className="pr-4" href="/about">
            About{" "}
          </a>
          <a className="pr-4" href="/teams">
            Team{" "}
          </a>
          <a className="pr-4" href="/accordion">
            Accordion
          </a>
          <a className="pr-4" href="/comments">
            Nested Comments
          </a>
          <a className="pr-4" href="/slider">
            Slider
          </a>
          <a className="pr-4" href="/select">
            Select Box
          </a>
          <a className="pr-4" href="/flag">
            Feature Flag
          </a>
          <a className="pr-4" href="/pagination">
            Pagination
          </a>
          <a className="pr-4" href="/login">
            Login{" "}
          </a>
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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Memes />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<About />} />
              <Route path="/teams" element={<Teams />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/select" element={<NestedSelect />} />
            <Route path="/pagination" element={<Product />} />
            <Route
              path="/flag"
              element={
                <UseFeatureFlagContextProvider>
                  <FeatureFlagEnable />
                </UseFeatureFlagContextProvider>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
