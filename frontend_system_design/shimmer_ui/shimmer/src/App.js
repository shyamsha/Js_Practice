import React from "react";
import MemesL from "./components/with_library/MemesL";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Teams from "./components/Teams";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        <nav className="px-20 m-2 w-[800px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/teams">Team </a>
          <a href="/login">Login </a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MemesL />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
