/* eslint-disable */
import React, { Suspense, useEffect } from "react";
import Memes from "./components/without_library/Memes";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
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
import LiveChat from "./components/livechat/LiveChat";

function App() {
  const { i18n } = useTranslation();
  const { t } = useTranslation(["common"]);
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
      <BrowserRouter>
        <header className="text-2xl font-bold p-9 bg-blue-500 text-white  flex justify-between items-center">
          <nav className="px-15 m-2 w-auto flex justify-between text-lg">
            <Link className="" to="/">
              Home<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/about">
              About<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/teams">
              Team<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/accordion">
              Accordion<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/comments">
              Nested Comments<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/slider">
              Slider<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/select">
              Select Box<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/flag">
              Feature Flag<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/pagination">
              Pagination<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/live-chat">
              Live Chat<span className="text-red-600 px-1">|</span>
            </Link>
            <Link className="" to="/login">
              Login
            </Link>
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
        <h4 className="text-center text-2xl font-bold py-5  text-black">
          {t("WELCOME_MSG")}
        </h4>
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
            <Route path="/live-chat" element={<LiveChat />} />
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
