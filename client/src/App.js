import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post  />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
